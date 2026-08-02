import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://diriqo.com'),
  title: {
    default: 'Diriqo - Konečně jednoduché řízení zakázek',
    template: '%s | Diriqo',
  },
  description:
    'Jednoduchý systém pro zakázky, pracovníky, fotky, hodiny, zákazníky a přehled nákladů.',
  icons: {
    icon: '/diriqo-logo-icon.png',
    apple: '/diriqo-logo-icon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
