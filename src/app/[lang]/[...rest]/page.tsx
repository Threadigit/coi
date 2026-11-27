import { notFound } from 'next/navigation';

// Any unknown URL under a language lands here so it renders the localized 404.
export default function CatchAll() {
  notFound();
}
