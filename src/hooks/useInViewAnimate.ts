import { RefObject, useEffect } from 'react'

interface UseInViewAnimateOptions {
  selector?: string
  rootMargin?: string
  threshold?: number
  once?: boolean
  reducedMotion?: boolean
}

export function useInViewAnimate(
  rootRef: RefObject<HTMLElement>,
  {
    selector = '[data-animate]',
    rootMargin = '0px 0px -10% 0px',
    threshold = 0.14,
    once = true,
    reducedMotion = false
  }: UseInViewAnimateOptions = {}
) {
  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector))
    if (elements.length === 0) return

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add('reveal-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove('reveal-visible')
          }
        })
      },
      { root: null, rootMargin, threshold }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [once, reducedMotion, rootMargin, rootRef, selector, threshold])
}

