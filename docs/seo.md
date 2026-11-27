# SEO across languages and countries

## What the site does for you

- **One page per language**: `/` (English), `/es`, `/fr`, `/zh`, each fully translated, with its own
  title, description, keywords, headings, structured data and social image.
- **hreflang** on every page: each language, plus the countries we target (for example `es-MX`,
  `fr-SN`, `en-NG`, `zh-CN`), plus `x-default` (English). Countries are listed in
  `localeMeta[...].regions` in `src/i18n/config.ts`.
- **Canonical URLs** are self-referential and all built from one address, `SITE_URL`
  in `src/lib/site.ts`.
- **Sitemap** (`/sitemap.xml`): every page in every language with its alternates, plus **video**
  entries for each documentary (title, description, thumbnail, duration, player) and **image**
  entries. Dates only change when content changes.
- **Crawlers are never redirected by language.** Humans on an unprefixed URL are sent to their
  language (saved choice, then browser, then country); Google, Bing, Baidu, Yandex, DuckDuckGo,
  Apple and social preview bots always get the page they asked for.
- **Search and filter views** in the archive are `noindex` and canonicalise to the main archive.
- **Structured data**: Organization (with contact languages), WebSite, series, episodes
  (VideoObject with chapters), breadcrumbs, and WebPage for the legal pages.
- **Social cards** are generated per language (including Chinese) with alt text.
- `robots.txt` allows everything except `/api/`.

## Check it any time

```bash
npm run build && npm start        # one terminal
npm run seo:check                 # another; add a URL to check a live site
npm run seo:check -- https://www.chroniclesofinnovation.com
```

It fails (non-zero exit) on any real problem: missing or duplicate titles and descriptions,
wrong canonicals, broken hreflang pairs, links that leave the language, broken social images,
invalid sitemap XML, an indexable search page, a crawler being redirected, and more.

## Things only you can do (the code can't)

1. **Make the domain redirect permanent.** Today `chroniclesofinnovation.com` sends visitors to
   `www.chroniclesofinnovation.com` with a temporary (307) redirect. In the hosting dashboard
   set it to permanent (308/301). All canonicals now use the `www` address; if you ever make the
   bare domain primary instead, set `NEXT_PUBLIC_SITE_URL` to it.
2. **Verify the site in each search engine**, then submit `https://www.chroniclesofinnovation.com/sitemap.xml`:
   - Google Search Console (add a Domain property)
   - Bing Webmaster Tools (can import from Google)
   - Baidu Webmaster (for China) and Yandex Webmaster (optional)

   Each gives a verification code. Put it in the hosting environment settings and redeploy:
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION`,
   `NEXT_PUBLIC_BAIDU_SITE_VERIFICATION`, `NEXT_PUBLIC_YANDEX_VERIFICATION`.
3. **Translate the YouTube side too.** In YouTube Studio, for each video add translated
   *title and description* (Settings, Translations) and captions in Spanish, French and Chinese.
   Put the localized page link first in each description, for example
   `https://www.chroniclesofinnovation.com/es/episode/penicillin`. YouTube is the largest
   discovery channel for documentaries, and this links it to the right language page.
4. **Dubbed uploads**: when you have them, add the IDs in `src/lib/episode-data.ts`
   (`videoIds`) so each language plays its own video (see `docs/i18n.md`).
5. **Local links and mentions** in each market (education sites, history blogs, local
   media) matter more than any tag. Link to the language page that fits the audience.
6. **China**: Baidu ranks sites with a Chinese ICP licence much higher, and Google is not
   reachable there. Without an ICP licence expect limited visibility on Baidu; the Chinese
   page still serves Chinese speakers elsewhere (Singapore, Malaysia, overseas communities).

## When you add an episode or language

Add the episode to `src/lib/episode-data.ts` and `src/lib/episodes.ts` and its text (including
`metaTitle`, `pageDescription` and `keywords`) to every file in `src/i18n/messages/`; the sitemap,
hreflang, structured data and social cards pick it up automatically. Then run `npm run seo:check`.
For a new language, also add its countries to `regions` and `REGIONS` in the checker.
