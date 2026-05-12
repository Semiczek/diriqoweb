import type { Metadata } from 'next'

import { DiriqoDemoApp } from '@/components/demo/DiriqoDemoApp'
import { DemoMarketingShell } from '@/components/demo/DemoMarketingShell'

export const metadata: Metadata = {
  title: 'Diriqo demo - read-only ukázka aplikace',
  description: 'Veřejné klikací demo Diriqo s ukázkovými daty bez přihlášení a bez ukládání změn.',
}

export default function DemoPage() {
  return (
    <DemoMarketingShell>
      <DiriqoDemoApp initialPath={['dashboard']} />
    </DemoMarketingShell>
  )
}
