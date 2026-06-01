import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export const NAV_OFFSET = 76
const SCROLL_DURATION_MS = 1350

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4)
}

function animateScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY
  const distance = targetY - startY
  const startTime = performance.now()
  let frame = 0

  const step = (now: number) => {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    window.scrollTo(0, startY + distance * easeOutQuart(progress))
    if (progress < 1) {
      frame = requestAnimationFrame(step)
    }
  }

  frame = requestAnimationFrame(step)
  return () => cancelAnimationFrame(frame)
}

type SmoothScrollContextValue = {
  scrollToHash: (hash: string, delayMs?: number) => void
  activeHash: string
}

const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null)

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'gallery', 'why-rm', 'contact']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0.12, 0.35, 0.55] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollToHash = useCallback((hash: string, delayMs = 0) => {
    const run = () => {
      const id = hash.replace('#', '')
      const target = document.getElementById(id)
      if (!target) return

      const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduceMotion) {
        window.scrollTo({ top, behavior: 'auto' })
      } else {
        animateScrollTo(top, SCROLL_DURATION_MS)
      }

      setActiveHash(hash)
      history.replaceState(null, '', hash)
    }

    if (delayMs > 0) {
      window.setTimeout(run, delayMs)
    } else {
      run()
    }
  }, [])

  const value = useMemo(() => ({ scrollToHash, activeHash }), [scrollToHash, activeHash])

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>
}

export function useSmoothScroll() {
  const ctx = useContext(SmoothScrollContext)
  if (!ctx) {
    throw new Error('useSmoothScroll must be used within SmoothScrollProvider')
  }
  return ctx
}
