import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getMessages } from '@/i18n/messages';
import { episodeData } from '@/lib/episode-data';
import { plain } from '@/i18n/rich';
import type { Locale } from '@/i18n/config';

export const OG_SIZE = { width: 1200, height: 630 };

type Font = { name: string; data: ArrayBuffer | Buffer; weight: 400 | 700; style: 'normal' | 'italic' };

const asset = (name: string) => readFile(join(process.cwd(), 'src/app/_assets', name));

/**
 * Fonts for the card. Latin languages use the bundled Noto Serif. Chinese needs
 * a CJK face; to keep it small we ask Google Fonts for just the characters on
 * this card. If that is unreachable we fall back to Latin so the build and the
 * image still succeed (the Chinese glyphs would then be missing, never a crash).
 */
async function fonts(lang: Locale, text: string): Promise<{ fonts: Font[]; family: string; italic: boolean }> {
  const [bold, italic] = await Promise.all([asset('NotoSerif-Bold.ttf'), asset('NotoSerif-Italic.ttf')]);
  const latin: Font[] = [
    { name: 'Noto Serif', data: bold, weight: 700, style: 'normal' },
    { name: 'Noto Serif', data: italic, weight: 400, style: 'italic' },
  ];
  if (lang !== 'zh') return { fonts: latin, family: 'Noto Serif', italic: true };
  try {
    const get = async (weight: 400 | 700) => {
      const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@${weight}&text=${encodeURIComponent(text)}`)).text();
      const url = css.match(/src:\s*url\(([^)]+)\)/)?.[1];
      if (!url) throw new Error('no font url');
      return fetch(url).then((r) => r.arrayBuffer());
    };
    const [b, r] = await Promise.all([get(700), get(400)]);
    return {
      fonts: [
        { name: 'Noto Serif SC', data: b, weight: 700, style: 'normal' },
        { name: 'Noto Serif SC', data: r, weight: 400, style: 'normal' },
        ...latin,
      ],
      family: 'Noto Serif SC, Noto Serif',
      italic: false,
    };
  } catch {
    return { fonts: latin, family: 'Noto Serif', italic: true };
  }
}

/** The site-wide card: logo, name and tagline in the visitor's language. */
export async function renderSiteOg(lang: Locale) {
  const m = getMessages(lang);
  const tagline = m.meta.ogImageAlt.replace(/^Chronicles of Innovation,?\s*/i, '').replace(/^[，, ]+/, '');
  const f = await fonts(lang, `${tagline}Chronicles of Innovation`);
  const logoData = await readFile(join(process.cwd(), 'public/coi_logo_transparent.png'));
  const logo = `data:image/png;base64,${logoData.toString('base64')}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          backgroundColor: '#0f1419',
          backgroundImage: 'radial-gradient(circle at 50% 32%, rgba(251,203,126,0.10), rgba(15,20,25,0) 60%)',
          fontFamily: f.family, padding: '0 80px',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt="" width={188} height={188} style={{ marginBottom: 20 }} />
        <div style={{ display: 'flex', color: '#dee3ea', fontSize: 62, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', textAlign: 'center' }}>
          Chronicles of Innovation
        </div>
        <div style={{ width: 120, height: 2, backgroundColor: '#4f4538', margin: '26px 0' }} />
        <div style={{ display: 'flex', color: '#fbcb7e', fontSize: 30, fontStyle: f.italic ? 'italic' : 'normal', textAlign: 'center', maxWidth: 900, lineHeight: 1.4 }}>
          {tagline.charAt(0).toUpperCase() + tagline.slice(1)}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: f.fonts }
  );
}

/** An episode card: hero still, episode label, title and tag line, all localized. */
export async function renderEpisodeOg(lang: Locale, slug: string) {
  const d = episodeData[slug];
  const m = getMessages(lang);
  const e = (m.episodes as Record<string, { title: string; episodeLabel: string; range: string; chips: string[] }>)[slug];
  const [leadRaw, accentRaw = ''] = e.title.split('|');
  const lead = plain(leadRaw).replace(/\s*[:：]$/, '');
  const accent = plain(accentRaw);
  const tag = `${e.chips[1]} · ${e.chips[0]}`;
  const meta = `${e.episodeLabel} · ${e.range}`;
  const f = await fonts(lang, `${lead}${accent}${tag}${meta}Chronicles of Innovation`);
  const bgData = await readFile(join(process.cwd(), 'public', d.heroImage));
  const bg = `data:image/jpeg;base64,${bgData.toString('base64')}`;
  const leadSize = [...lead].length > 26 ? 62 : [...lead].length > 20 ? 72 : 82;
  const accentSize = [...accent].length > 40 ? 40 : 48;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', backgroundColor: '#0f1419', fontFamily: f.family }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={bg} alt="" width={1200} height={630} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.42 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f1419 16%, rgba(15,20,25,0.7) 55%, rgba(15,20,25,0.3) 100%)' }} />
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', padding: '0 64px 58px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 22 }}>
            <div style={{ color: '#fbcb7e', fontSize: 22, letterSpacing: 6, textTransform: 'uppercase' }}>Chronicles of Innovation</div>
            <div style={{ width: 40, height: 2, backgroundColor: '#4f4538' }} />
            <div style={{ color: '#92ccff', fontSize: 20, letterSpacing: 3 }}>{meta}</div>
          </div>
          <div style={{ display: 'flex', color: '#dee3ea', fontSize: leadSize, lineHeight: 1.08, fontWeight: 700 }}>{lead}</div>
          <div style={{ display: 'flex', color: '#fbcb7e', fontSize: accentSize, lineHeight: 1.15, fontStyle: f.italic ? 'italic' : 'normal', marginTop: 8 }}>{accent}</div>
          <div style={{ display: 'flex', marginTop: 28, color: '#d2c4b3', fontSize: 22, letterSpacing: 2 }}>{tag}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: f.fonts }
  );
}
