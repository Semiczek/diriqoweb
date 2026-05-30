'use client'

import { useEffect } from 'react'

import { getDemoDictionary } from '@/lib/demo/demo-localization'
import type { Locale } from '@/lib/marketing/content'

const translatedAttributes = ['placeholder', 'aria-label', 'title', 'alt']
const ignoredTags = new Set(['SCRIPT', 'STYLE', 'TEXTAREA'])
const exactOnlySources = new Set(['Ne', 'Po', 'Před', 'den', 'měsíc', 'směna', 'zásah', 'paušál'])

type DemoLocalizerProps = {
  locale: Locale
}

export function DemoLocalizer({ locale }: DemoLocalizerProps) {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('[data-demo-localized-root]')
    if (!root) return

    const dictionary = getDemoDictionary(locale)
    const replacements = Object.entries(dictionary).sort((a, b) => b[0].length - a[0].length)

    const replaceExactText = (value: string, source: string, target: string) => {
      const start = value.search(/\S/)
      if (start === -1) return value

      const end = value.search(/\s*$/)
      const text = value.slice(start, end)
      if (text !== source) return value

      return `${value.slice(0, start)}${target}${value.slice(end)}`
    }

    const translate = (value: string) => {
      if (!value || replacements.length === 0) return value

      let nextValue = value
      for (const [source, target] of replacements) {
        if (exactOnlySources.has(source)) {
          nextValue = replaceExactText(nextValue, source, target)
          continue
        }

        nextValue = nextValue.split(source).join(target)
      }
      return nextValue
    }

    const localizeLinks = (currentRoot: HTMLElement) => {
      currentRoot.querySelectorAll<HTMLAnchorElement>('a[href^="/demo"]').forEach((link) => {
        const href = link.getAttribute('href')
        if (!href || href.startsWith(`/${locale}/demo`)) return
        link.setAttribute('href', `/${locale}${href}`)
      })
    }

    const localizeAttributes = (currentRoot: HTMLElement) => {
      translatedAttributes.forEach((attribute) => {
        currentRoot.querySelectorAll<HTMLElement>(`[${attribute}]`).forEach((element) => {
          const currentValue = element.getAttribute(attribute)
          if (!currentValue) return
          const translatedValue = translate(currentValue)
          if (translatedValue !== currentValue) {
            element.setAttribute(attribute, translatedValue)
          }
        })
      })
    }

    const localizeTextNodes = (currentRoot: HTMLElement) => {
      const walker = document.createTreeWalker(currentRoot, NodeFilter.SHOW_TEXT, {
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
      document.querySelectorAll<HTMLElement>('[data-demo-localized-root]').forEach((currentRoot) => {
        localizeTextNodes(currentRoot)
        localizeAttributes(currentRoot)
        localizeLinks(currentRoot)
      })
    }

    run()

    const observer = new MutationObserver(() => {
      run()
    })

    observer.observe(root, {
      childList: true,
      characterData: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [locale])

  return null
}
