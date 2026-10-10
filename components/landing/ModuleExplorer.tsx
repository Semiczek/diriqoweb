'use client'
import { useState } from 'react'
import type { LandingCopy } from '@/lib/landing/copy'
import { Icon } from './Icon'
import s from './landing.module.css'

const icons = ['jobs','people','person','calculator','calendar','wallet','box','document','sparkle','sparkle','car','pos']
export function ModuleExplorer({ copy }: { copy: LandingCopy }) {
 const [selected, setSelected] = useState(0)
 const all = [...copy.coreItems, ...copy.modules]
 return <div className={s.moduleExplorer}>
  <div className={s.moduleGroups}>
   {[copy.coreItems, copy.modules].map((items, group) => <div key={group}>
    <div className={s.groupHeading}><span className={s.groupNumber}>{group === 0 ? '01' : '02'}</span><h3>{group === 0 ? copy.core : copy.extensions}</h3><span>{group === 0 ? copy.coreTag : copy.modulesTag}</span></div>
    <div className={s.moduleGrid}>{items.map(([label], i) => {
     const index = group * 6 + i
     return <button key={label} type="button" className={s.moduleCard} aria-pressed={selected === index} aria-controls="module-description" onClick={() => setSelected(index)}>
      <Icon name={icons[index]}/><span>{label}</span><Icon name="diagonal" width="15" height="15"/>
     </button>
    })}</div>
   </div>)}
  </div>
  <aside className={s.moduleDetail} id="module-description" aria-live="polite" aria-atomic="true">
   <span className={s.status}><span />{copy.planned}</span>
   <div className={s.detailSymbol}><Icon name={icons[selected]} width="56" height="56"/></div>
   <span className={s.detailKicker}>{selected < 6 ? copy.core : copy.extensions}</span>
   <h3>{all[selected][0]}</h3><p>{all[selected][1]}</p>
   <div className={s.detailFooter}><span className={s.miniBrand}>diriqo</span><span>{copy.moduleHint}</span></div>
  </aside>
 </div>
}
