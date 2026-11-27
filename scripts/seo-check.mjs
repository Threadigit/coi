#!/usr/bin/env node
/**
 * SEO checker for the multilingual site. Run against a running server:
 *
 *   npm run build && npm start        # in one terminal
 *   npm run seo:check                 # in another (defaults to http://localhost:3000)
 *   npm run seo:check -- https://www.chroniclesofinnovation.com
 *
 * It fetches every page in every language as a search engine would (no
 * language redirect) and fails with a non-zero exit code on any problem.
 */
const BASE = (process.argv[2] || process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const LOCALES = ['en', 'es', 'fr', 'zh'];
const HTML_LANG = { en: 'en', es: 'es', fr: 'fr', zh: 'zh-Hans' };
// Countries targeted per language (keep in step with localeMeta.regions in src/i18n/config.ts).
const REGIONS = { en: ['US', 'GB', 'CA', 'AU', 'IE', 'NG', 'GH', 'KE', 'ZA', 'IN'], es: ['ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'US'], fr: ['FR', 'BE', 'CA', 'CH', 'SN', 'CI', 'CM'], zh: ['CN', 'SG'] };
const PAGES = ['/', '/archive', '/timeline', '/about', '/privacy', '/terms',
  '/episode/edison-vs-tesla', '/episode/penicillin', '/episode/wright-brothers', '/episode/shipping-container'];
const UA = { 'user-agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' };

const loc = (l, p) => (l === 'en' ? p : p === '/' ? `/${l}` : `/${l}${p}`);
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
// Search engines measure by pixel width; approximate with CJK counting double.
const width = (s) => [...s].reduce((n, c) => n + (/[⺀-鿿＀-￯]/.test(c) ? 2 : 1), 0);

const problems = [];
const warn = [];
const fail = (page, msg) => problems.push(`${page}  ${msg}`);
const note = (page, msg) => warn.push(`${page}  ${msg}`);

async function get(path, headers = UA) {
  const res = await fetch(BASE + path, { headers, redirect: 'manual' });
  return { status: res.status, text: await res.text(), headers: res.headers };
}
const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`, "i")) || [])[1];
const metas = (html) => [...html.matchAll(/<meta\s[^>]*>/g)].map((m) => m[0]);
const metaContent = (html, key, val = 'name') => {
  const m = metas(html).find((t) => attr(t, val) === key);
  return m ? decode(attr(m, 'content') || '') : undefined;
};
const links = (html) => [...html.matchAll(/<link\s[^>]*>/g)].map((m) => m[0]);

const cache = new Map();
const imageCache = new Map();
async function page(l, p) {
  const key = loc(l, p);
  if (!cache.has(key)) cache.set(key, get(key));
  return cache.get(key);
}

const hostOf = (u) => new URL(u).host;
let canonicalHost;

for (const l of LOCALES) {
  const titles = new Map();
  const descs = new Map();
  for (const p of PAGES) {
    const path = loc(l, p);
    const r = await page(l, p);
    if (r.status !== 200) { fail(path, `status ${r.status}`); continue; }
    const html = r.text;

    if (!new RegExp(`<html[^>]*lang="${HTML_LANG[l]}"`).test(html)) fail(path, `<html lang> is not ${HTML_LANG[l]}`);

    const t = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
    if (t.length !== 1) fail(path, `${t.length} <title> tags`);
    const title = decode(t[0]?.[1] || '');
    if (!title) fail(path, 'empty title');
    else {
      if (width(title) > 78) note(path, `title long (${width(title)}): ${title}`);
      if (width(title) < 20) note(path, `title short (${width(title)}): ${title}`);
      if (titles.has(title)) fail(path, `duplicate title with ${titles.get(title)}`);
      titles.set(title, path);
    }

    const desc = metaContent(html, 'description');
    if (!desc) fail(path, 'no meta description');
    else {
      if (width(desc) > 165) note(path, `description long (${width(desc)})`);
      if (width(desc) < 70) note(path, `description short (${width(desc)})`);
      if (descs.has(desc)) fail(path, `duplicate description with ${descs.get(desc)}`);
      descs.set(desc, path);
    }

    const h1 = [...html.matchAll(/<h1[\s>]/g)].length;
    if (h1 !== 1) fail(path, `${h1} <h1> tags`);

    const canon = links(html).find((x) => attr(x, 'rel') === 'canonical');
    const canonHref = canon && attr(canon, 'href');
    if (!canonHref) fail(path, 'no canonical');
    else {
      if (!/^https:\/\//.test(canonHref) && !canonHref.startsWith(BASE)) fail(path, `canonical not absolute: ${canonHref}`);
      const u = new URL(canonHref, BASE);
      if (u.pathname !== path) fail(path, `canonical is not self-referential: ${u.pathname}`);
      canonicalHost ??= u.host;
      if (u.host !== canonicalHost) fail(path, `canonical host differs: ${u.host} vs ${canonicalHost}`);
    }

    // hreflang: every language + x-default, absolute, reciprocal, resolving
    const alts = links(html).filter((x) => attr(x, 'rel') === 'alternate' && attr(x, 'hreflang'));
    const map = new Map(alts.map((x) => [attr(x, 'hreflang'), attr(x, 'href')]));
    for (const code of [...Object.values(HTML_LANG), 'x-default']) if (!map.has(code)) fail(path, `missing hreflang ${code}`);
    for (const ll of LOCALES) for (const r of REGIONS[ll]) {
      const code = `${ll}-${r}`;
      if (!map.has(code)) fail(path, `missing country hreflang ${code}`);
      else if (new URL(map.get(code)).pathname !== loc(ll, p)) fail(path, `hreflang ${code} points to ${new URL(map.get(code)).pathname}`);
    }
    for (const [code, href] of map) {
      if (!/^https?:\/\//.test(href)) fail(path, `hreflang ${code} not absolute`);
      const target = new URL(href).pathname;
      const tl = LOCALES.find((x) => HTML_LANG[x] === code);
      if (tl && target !== loc(tl, p)) fail(path, `hreflang ${code} -> ${target}, expected ${loc(tl, p)}`);
      if (!/^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(code) && code !== 'x-default') fail(path, `bad hreflang code ${code}`);
    }
    if (map.get('x-default') && new URL(map.get('x-default')).pathname !== loc('en', p)) fail(path, 'x-default is not the English page');

    // social
    const og = (k) => metaContent(html, k, 'property');
    for (const k of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale', 'og:site_name', 'og:type']) if (!og(k)) fail(path, `missing ${k}`);
    if (og('og:url') && new URL(og('og:url')).pathname !== path) fail(path, `og:url path ${new URL(og('og:url')).pathname}`);
    if (og('og:locale') && !new RegExp('^' + (l === 'zh' ? 'zh_CN' : l + '_')).test(og('og:locale'))) fail(path, `og:locale ${og('og:locale')}`);
    if (!metaContent(html, 'twitter:card')) fail(path, 'missing twitter:card');
    if (!metaContent(html, 'twitter:image')) fail(path, 'missing twitter:image');
    for (const k of ['og:image', 'twitter:image']) {
      const v = k.startsWith('og') ? og(k) : metaContent(html, k);
      if (!v) continue;
      const ip = new URL(v).pathname;
      if (!imageCache.has(ip)) imageCache.set(ip, fetch(BASE + ip, { headers: UA }).then((x) => ({ status: x.status, type: x.headers.get('content-type') })));
      const img = await imageCache.get(ip);
      if (img.status !== 200 || !/^image\//.test(img.type || '')) fail(path, `${k} ${ip} is not a working image (${img.status} ${img.type})`);
      if (!ip.startsWith(loc(l, '/').replace(/\/$/, '') + '/') && l !== 'en' && !ip.includes(`/${l}/`)) fail(path, `${k} is not the ${l} image: ${ip}`);
    }
    if (!og('og:image:alt')) fail(path, 'no og:image:alt');
    if (!metaContent(html, 'twitter:image:alt')) fail(path, 'no twitter:image:alt');
    const kw = metaContent(html, 'keywords');
    if (!kw || kw.split(',').length < 5) fail(path, 'keywords missing or too few');
    const robots = metaContent(html, 'robots');
    if (robots && /noindex/.test(robots)) fail(path, `noindex: ${robots}`);

    // structured data
    const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    if (!ld.length) fail(path, 'no JSON-LD');
    for (const m of ld) {
      try {
        const data = JSON.parse(m[1]);
        const types = (data['@graph'] || [data]).map((n) => n['@type']);
        const need = p.startsWith('/episode') ? ['VideoObject', 'BreadcrumbList'] : p === '/' ? ['Organization', 'WebSite'] : [];
        for (const n of need) if (!types.flat().includes(n)) fail(path, `JSON-LD missing ${n}`);
        const bad = m[1].match(/"(?:url|@id|item|embedUrl|contentUrl)":"(?!https?:)[^"]+/g);
        if (bad) fail(path, `JSON-LD has non-absolute URL ${bad[0]}`);
      } catch (e) { fail(path, `JSON-LD invalid: ${e.message}`); }
    }

    // images need alt text
    for (const img of html.matchAll(/<img\s[^>]*>/g)) if (!/ alt="/.test(img[0])) fail(path, 'image without alt');

    // internal links must stay in this language
    const hrefs = [...html.matchAll(/<a\s[^>]*href="(\/[^"#?]*)/g)].map((m) => m[1]);
    for (const h of new Set(hrefs)) {
      if (h.startsWith('/_next') || h.includes('.') || h.startsWith('//')) continue;
      const stripped = h === '/' ? '' : h;
      const ok = l === 'en' ? !LOCALES.some((x) => x !== 'en' && (h === `/${x}` || h.startsWith(`/${x}/`))) : h === `/${l}` || h.startsWith(`/${l}/`);
      if (!ok) fail(path, `link leaves the language: ${h || stripped}`);
    }
  }
}

// sitemap
{
  const r = await get('/sitemap.xml');
  if (r.status !== 200) fail('/sitemap.xml', `status ${r.status}`);
  else {
    const urls = [...r.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
    const expected = PAGES.length * LOCALES.length;
    if (urls.length !== expected) fail('/sitemap.xml', `${urls.length} urls, expected ${expected}`);
    const hosts = new Set(urls.map(hostOf));
    if (hosts.size !== 1) fail('/sitemap.xml', `mixed hosts ${[...hosts]}`);
    if (canonicalHost && !hosts.has(canonicalHost)) fail('/sitemap.xml', `host ${[...hosts]} differs from canonical host ${canonicalHost}`);
    const withAlt = (r.text.match(/<xhtml:link/g) || []).length;
    const perUrl = LOCALES.reduce((n, ll) => n + 1 + REGIONS[ll].length, 1);
    if (withAlt < expected * perUrl) fail('/sitemap.xml', `only ${withAlt} hreflang links, expected ${expected * perUrl}`);
    if (/&(?!amp;|lt;|gt;|quot;|apos;|#)/.test(r.text)) fail('/sitemap.xml', 'unescaped & makes the XML invalid');
    const vids = (r.text.match(/<video:video>/g) || []).length;
    if (vids !== 4 * LOCALES.length) fail('/sitemap.xml', `${vids} video entries, expected ${4 * LOCALES.length}`);
    for (const tag of ['video:title', 'video:thumbnail_loc', 'video:description', 'video:player_loc', 'video:duration']) {
      if ((r.text.match(new RegExp(`<${tag}>`, 'g')) || []).length !== vids) fail('/sitemap.xml', `video entries missing ${tag}`);
    }
    if (!/<video:video>/.test(r.text)) note('/sitemap.xml', 'no video entries');
    if (!/<image:image>/.test(r.text)) note('/sitemap.xml', 'no image entries');
    // every URL in the sitemap resolves on this server
    for (const u of urls) {
      const pth = new URL(u).pathname;
      const rr = await get(pth);
      if (rr.status !== 200) fail('/sitemap.xml', `${pth} returns ${rr.status}`);
    }
  }
}

// robots
{
  const r = await get('/robots.txt');
  if (r.status !== 200) fail('/robots.txt', `status ${r.status}`);
  else {
    if (!/Sitemap:\s*https?:\/\//i.test(r.text)) fail('/robots.txt', 'no Sitemap line');
    if (/Disallow:\s*\/\s*$/m.test(r.text)) fail('/robots.txt', 'blocks the whole site');
    if (!/Disallow:\s*\/api\//i.test(r.text)) note('/robots.txt', 'does not disallow /api/');
  }
}

// filtered archive views must not be indexed, and must canonicalise to the main archive
for (const l of LOCALES) {
  for (const q of ['?q=edison', '?category=biotech']) {
    const path = loc(l, '/archive') + q;
    const r = await get(path);
    if (r.status !== 200) { fail(path, `status ${r.status}`); continue; }
    if (!/noindex/.test(metaContent(r.text, 'robots') || '')) fail(path, 'filtered archive is indexable');
    const c = links(r.text).find((x) => attr(x, 'rel') === 'canonical');
    if (!c || new URL(attr(c, 'href')).pathname !== loc(l, '/archive')) fail(path, 'canonical is not the main archive');
  }
}

// crawlers must never be redirected by language
for (const l of ['es', 'fr', 'zh']) {
  const r = await get('/', { ...UA, 'accept-language': l });
  if (r.status !== 200) fail('/', `crawler with Accept-Language ${l} got ${r.status}`);
}
// unknown pages are real 404s
for (const pth of ['/nope', '/es/nope', '/fr/nope', '/zh/nope']) {
  const r = await get(pth);
  if (r.status !== 404) fail(pth, `expected 404, got ${r.status}`);
}

console.log(`Checked ${LOCALES.length * PAGES.length} pages in ${LOCALES.length} languages against ${BASE}`);
if (warn.length) console.log(`\n${warn.length} suggestion(s):\n  ` + warn.join('\n  '));
if (problems.length) {
  console.log(`\n${problems.length} PROBLEM(S):\n  ` + problems.join('\n  '));
  process.exit(1);
}
console.log('\nSEO check passed: no problems.');
