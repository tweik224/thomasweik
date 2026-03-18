interface ContactRowProps {
  label: string
  value: string
  href: string
}

const colorMap: Record<string, string> = {
  Email: 'bg-sky-500',
  Phone: 'bg-[#12233a]',
  LinkedIn: 'bg-sky-700'
}

export function ContactRow({ label, value, href }: ContactRowProps) {
  return (
    <a
      href={href}
      target={label === 'LinkedIn' ? '_blank' : undefined}
      rel={label === 'LinkedIn' ? 'noreferrer' : undefined}
      className="pressable group flex items-center gap-5 rounded-3xl border border-white/60 bg-white px-4 py-4 transition-all hover:-translate-y-0.5 hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
      aria-label={`${label}: ${value}`}
    >
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-inner">
        <span className={`h-7 w-7 rounded-lg ${colorMap[label]}`} aria-hidden="true" />
      </span>
      <span className="text-2xl font-bold text-ink group-hover:text-sky-700">{value}</span>
    </a>
  )
}
