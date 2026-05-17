import Image from 'next/image'

import type { MarketingContent } from '@/lib/marketing/content'

type PhoneScreen = 'admin' | 'requests' | 'rewards' | 'absence' | 'calendar'

type MobileAppMockupProps = {
  className?: string
  content: MarketingContent
  priority?: boolean
  screen?: PhoneScreen
}

const phoneScreens: Record<PhoneScreen, { src: string; alt: string }> = {
  admin: {
    src: '/product/phone/08-po-zamitnuti-zalohy-public2.png',
    alt: 'Diriqo mobile admin overview',
  },
  requests: {
    src: '/product/phone/02-domu-admin-zadosti-public2.png',
    alt: 'Diriqo mobile request approval',
  },
  rewards: {
    src: '/product/phone/03-odmeny-zalohy-public2.png',
    alt: 'Diriqo mobile rewards and advance request',
  },
  absence: {
    src: '/product/phone/04-nepritomnost-public2.png',
    alt: 'Diriqo mobile absence request',
  },
  calendar: {
    src: '/product/phone/07-kalendar-novy-public2.png',
    alt: 'Diriqo mobile calendar',
  },
}

export function MobileAppMockup({
  className = '',
  content,
  priority = false,
  screen = 'rewards',
}: MobileAppMockupProps) {
  const phoneScreen = phoneScreens[screen]

  return (
    <div
      className={[
        'mx-auto w-full max-w-[250px] rounded-[30px] border border-white/[0.16] bg-slate-950 p-2 shadow-[0_28px_70px_rgba(2,6,23,0.42),0_0_34px_rgba(6,182,212,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-cyan-950/40',
        className,
      ].join(' ')}
    >
      <div className="relative overflow-hidden rounded-[24px] bg-[#f5f0ff]" style={{ aspectRatio: '390 / 844' }}>
        <Image
          src={phoneScreen.src}
          alt={`${phoneScreen.alt} - Diriqo ${content.locale.toUpperCase()}`}
          width={390}
          height={844}
          priority={priority}
          className="block h-full w-full select-none object-cover"
          draggable={false}
          sizes="(min-width: 1024px) 13vw, (min-width: 640px) 22vw, 62vw"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent)]"
        />
      </div>
    </div>
  )
}
