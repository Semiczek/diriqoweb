import type { Metadata } from 'next'

import { DiriqoDemoApp } from '@/components/demo/DiriqoDemoApp'
import { DemoMarketingShell } from '@/components/demo/DemoMarketingShell'

type DemoRoutePageProps = {
  params: Promise<{
    segments?: string[]
  }>
}

export const metadata: Metadata = {
  title: 'Diriqo demo - read-only ukázka aplikace',
  description: 'Veřejné klikací demo Diriqo s ukázkovými daty bez přihlášení a bez ukládání změn.',
}

export default async function DemoRoutePage({ params }: DemoRoutePageProps) {
  const { segments = [] } = await params

  return (
    <DemoMarketingShell>
      <DiriqoDemoApp initialPath={segments} />
    </DemoMarketingShell>
  )
}
