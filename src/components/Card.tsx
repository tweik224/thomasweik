import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <article
      className={`rounded-4xl border border-line bg-white p-5 shadow-soft transition-all duration-300 md:p-6 ${className}`}
      {...rest}
    >
      {children}
    </article>
  )
}
