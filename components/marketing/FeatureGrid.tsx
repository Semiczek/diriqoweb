import type { FeatureCardItem } from '@/lib/marketing/content'
import { FeatureCard } from './FeatureCard'

type FeatureGridProps = {
  items: FeatureCardItem[]
}

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <FeatureCard key={item.title} title={item.title} text={item.text} delay={index * 50} iconIndex={index} />
      ))}
    </div>
  )
}
