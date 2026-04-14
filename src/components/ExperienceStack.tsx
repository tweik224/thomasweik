import { useState } from 'react'
import type { ExperienceItem } from '../data/profile'
import { Card } from './Card'

export interface ExperienceGroup {
  id: string
  label: string
  items: ExperienceItem[]
}

interface ExperienceStackProps {
  groups: ExperienceGroup[]
}

function ExperienceRole({ item, isLast }: { item: ExperienceItem; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const hasDetails = item.bullets.length > 0 || Boolean(item.gallery?.length)

  return (
    <article className="relative pl-8">
      <div
        aria-hidden="true"
        className={`absolute left-[10px] top-2 h-full w-px bg-sky-100 ${isLast ? 'hidden' : ''}`}
      />
      <span
        aria-hidden="true"
        className="absolute left-0 top-2 inline-flex h-5 w-5 rounded-full border-4 border-white bg-sky-500 shadow-sm"
      />
      <div className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-soft">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="pressable flex w-full flex-col gap-4 p-5 text-left transition-all hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="space-y-1">
              <h4 className="text-2xl font-bold leading-tight text-ink">{item.role}</h4>
              <p className="text-xl font-semibold text-sky-700">{item.company}</p>
              <p className="text-base text-body">
                {item.location} · {item.type}
              </p>
              <p className="text-base font-semibold text-body">{item.dates}</p>
            </div>

            <div
              className={`overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm transition-all duration-300 ${
                expanded ? 'h-40 w-full md:h-44 md:w-52' : 'h-16 w-16'
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.imageAlt ?? `${item.company} logo`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Image
                </div>
              )}
            </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-body/70">
                {expanded ? 'Click to collapse' : 'Click to expand'}
            </p>
            <span
              aria-hidden="true"
              className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-700 transition-transform duration-300 ${
                expanded ? 'rotate-180' : ''
              }`}
            >
              ▾
            </span>
          </div>
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${
            expanded ? 'grid-rows-[1fr] px-5 pb-5' : 'grid-rows-[0fr] px-5 pb-0'
          }`}
        >
          <div className="overflow-hidden">
            {hasDetails ? (
              <div className="space-y-4 pt-4">
                {item.bullets.length > 0 ? (
                  <ul className="list-disc space-y-1.5 pl-6 text-base leading-relaxed text-body">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ExperienceStack({ groups }: ExperienceStackProps) {
  return (
    <div className="space-y-8">
      {groups.map((group) => {
        const firstItem = group.items[0]
        return (
          <Card key={group.id} className="space-y-5">
            <div className="flex flex-col gap-4 border-b border-line/70 pb-5 md:flex-row md:items-start md:justify-between">
            <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-body/70">Company</p>
              <h3 className="text-3xl font-bold text-ink">{group.label}</h3>
              {firstItem?.companyUrl ? (
                <a
                    href={firstItem.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-base font-semibold text-sky-700 transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
                  >
                  Visit company site
                </a>
              ) : null}
            </div>
          </div>

            <div className="space-y-4">
              {group.items.map((item, index) => (
                <ExperienceRole
                  key={`${item.company}-${item.role}-${item.dates}`}
                  item={item}
                  isLast={index === group.items.length - 1}
                />
              ))}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
