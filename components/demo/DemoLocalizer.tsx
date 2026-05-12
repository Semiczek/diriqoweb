'use client'

import { useEffect } from 'react'

import { getDemoDictionary } from '@/lib/demo/demo-localization'
import type { Locale } from '@/lib/marketing/content'

const translatedAttributes = ['placeholder', 'aria-label', 'title', 'alt']
const ignoredTags = new Set(['SCRIPT', 'STYLE', 'TEXTAREA'])

type DemoLocalizerProps = {
  locale: Locale
}

export function DemoLocalizer({ locale }: DemoLocalizerProps) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-demo-localized-root]')
    if (!root) return

    const dictionary = getDemoDictionary(locale)
    const replacements = Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length)

    const translate = (value: string) => {
      if (!value || replacements.length === 0) return value

      let nextValue = value
      for (const [source, target] of replacements) {
        nextValue = nextValue.split(source).join(target)
      }
      return nextValue
    }

    const localizeLinks = () => {
      root.querySelectorAll<HTMLAnchorElement>('a[href^="/demo"]').forEach((link) => {
        const href = link.getAttribute('href')
        if (!href || href.startsWith(`/${locale}/demo`)) return
        link.setAttribute('href', `/${locale}${href}`)
      })
    }

    const localizeAttributes = () => {
      translatedAttributes.forEach((attribute) => {
        root.querySelectorAll<HTMLElement>(`[${attribute}]`).forEach((element) => {
          const currentValue = element.getAttribute(attribute)
          if (!currentValue) return
          const translatedValue = translate(currentValue)
          if (translatedValue !== currentValue) {
            element.setAttribute(attribute, translatedValue)
          }
        })
      })
    }

    const localizeTextNodes = () => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          const parent = node.parentElement
          if (!parent || ignoredTags.has(parent.tagName)) {
            return NodeFilter.FILTER_REJECT
          }
          if (!node.nodeValue?.trim()) {
            return NodeFilter.FILTER_REJECT
          }
          return NodeFilter.FILTER_ACCEPT
        },
      })

      const nodes: Text[] = []
      while (walker.nextNode()) {
        nodes.push(walker.currentNode as Text)
      }

      nodes.forEach((node) => {
        const currentValue = node.nodeValue ?? ''
        const translatedValue = translate(currentValue)
        if (translatedValue !== currentValue) {
          node.nodeValue = translatedValue
        }
      })
    }

    const run = () => {
      localizeTextNodes()
      localizeAttributes()
      localizeLinks()
    }

    run()

    const observer = new MutationObserver(() => {
      run()
    })

    observer.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    })

    return () => observer.disconnect()
  }, [locale])

  return null
}
