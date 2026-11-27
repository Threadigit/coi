import { Fragment } from 'react';

/**
 * Tiny markup used inside translated strings:
 *   <em>word</em>  gold italic accent
 *   <i>word</i>    plain italic (e.g. a species name)
 *   |              an optional line break on wider screens
 */
export function rich(text: string, accentClass = 'text-primary italic pr-1') {
  const out: React.ReactNode[] = [];
  const re = /(<em>.*?<\/em>|<i>.*?<\/i>|\|)/g;
  text.split(re).forEach((part, i) => {
    if (!part) return;
    if (part === '|') {
      // On wide screens a line break; on narrow ones the words simply flow, so
      // keep a space between them (CJK full-width punctuation already has one).
      const prev = out.length ? String((out[out.length - 1] as { props?: { children?: unknown } })?.props?.children ?? '') : '';
      if (!/[：，。！？；]\s*$/.test(prev)) out.push(' ');
      out.push(<br key={i} className="hidden md:block" />);
    }
    else if (part.startsWith('<em>')) out.push(<span key={i} className={accentClass}>{part.slice(4, -5)}</span>);
    else if (part.startsWith('<i>')) out.push(<i key={i}>{part.slice(3, -4)}</i>);
    else out.push(<Fragment key={i}>{part}</Fragment>);
  });
  return out;
}

/** Plain text version (for metadata, aria labels and structured data). */
export function plain(text: string) {
  return text.replace(/<\/?(em|i)>/g, '').replace(/\|/g, ' ').replace(/\s+/g, ' ').trim();
}
