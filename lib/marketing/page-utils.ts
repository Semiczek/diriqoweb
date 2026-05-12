import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {
  alternateLanguages,
  getMarketingContent,
  isLocale,
  locales,
  localizePath,
  type Locale,
  type PageHref,
  type PageKey,
} from './content'

export type LocalePageProps = {
  params: Promise<unknown>
}

export function generateLocaleStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function getLocaleFromParams(params: LocalePageProps['params']): Promise<Locale> {
  const { locale } = (await params) as { locale?: string }

  if (!isLocale(locale)) {
    notFound()
  }

  return locale
}

export async function createLocalizedMetadata(
  params: LocalePageProps['params'],
  page: PageKey,
  path: PageHref
): Promise<Metadata> {
  const locale = await getLocaleFromParams(params)
  const content = getMarketingContent(locale)
  const meta = content.meta[page]

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localizePath(locale, path),
      languages: alternateLanguages(path),
    },
  }
}
