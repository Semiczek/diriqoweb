import type { SVGProps } from 'react'

const paths: Record<string, string> = {
 arrow: 'M5 12h14m-6-6 6 6-6 6', diagonal: 'M6 18 18 6M6 6h12v12',
 box: 'm3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7M12 11v10',
 people: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8-7a4 4 0 0 1 0 7.75',
 jobs: 'M9 7V4h6v3M3 7h18v13H3V7Zm0 5 9 3 9-3m-9 1v4',
 person: 'M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
 document: 'M14 2H5v20h14V7l-5-5Zm0 0v6h5M8 12h8m-8 4h6',
 calendar: 'M3 5h18v16H3V5Zm0 5h18M7 2v6m10-6v6M7 14h2m4 0h2m-8 4h2',
 calculator: 'M5 2h14v20H5V2Zm3 4h8M8 10h1m6 0h1m-8 4h1m6 0h1m-8 4h1m6 0h1',
 wallet: 'M3 6V4h16v3M3 7h18v14H3V7Zm12 5h6v5h-6v-5Zm2 2h1',
 sparkle: 'm12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3ZM3 2v4M1 4h4',
 car: 'm5 7 2-4h10l2 4M3 8h18v10H3V8Zm2 10v3m14-3v3M6 12h2m8 0h2',
 pos: 'M4 3h16v12H4V3Zm8 12v5m-5 1h10M7 7h5m-5 4h8',
 globe: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM3 12h18M12 3a18 18 0 0 1 0 18 18 18 0 0 1 0-18Z',
 check: 'm5 12 4 4L19 6', plus: 'M12 5v14M5 12h14', play: 'm8 4 12 8-12 8V4Z',
 pause: 'M8 4v16M16 4v16', close: 'm6 6 12 12M6 18 18 6', menu: 'M4 7h16M4 12h16M4 17h16',
}
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: string }) {
 return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name] || paths.sparkle}/></svg>
}
