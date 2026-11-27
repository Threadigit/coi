'use client';

import Link from 'next/link';
import type { ComponentProps } from 'react';
import { useLocale } from './context';
import { localizedPath } from './config';

/**
 * next/link that keeps the visitor in their language: internal paths such as
 * "/about" become "/es/about". External URLs, hashes and mailto links pass
 * through untouched.
 */
export default function LocalizedLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { lang } = useLocale();
  const target =
    typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
      ? localizedPath(lang, href)
      : href;
  return <Link href={target} {...props} />;
}
