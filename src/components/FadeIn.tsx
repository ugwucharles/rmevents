import { useEffect, useRef, type ReactNode, type CSSProperties } from 'react'

type FadeInProps = {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export function FadeIn({ children, className = '', delay = 0, style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      el.classList.add('is-visible')
      return
    }

    el.style.transitionDelay = `${delay}s`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '-60px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`rm-fade-in ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}
