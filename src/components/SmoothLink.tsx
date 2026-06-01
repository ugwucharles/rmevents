import { forwardRef, type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from 'react'
import { useSmoothScroll } from '../context/SmoothScrollContext'

type SmoothLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  children: ReactNode
  scrollDelayMs?: number
  onNavigate?: () => void
}

export const SmoothLink = forwardRef<HTMLAnchorElement, SmoothLinkProps>(function SmoothLink(
  { href, children, scrollDelayMs = 0, onClick, onNavigate, ...rest },
  ref,
) {
  const { scrollToHash } = useSmoothScroll()

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    onClick?.(e)
    if (!href.startsWith('#')) return

    e.preventDefault()
    onNavigate?.()
    scrollToHash(href, scrollDelayMs)
  }

  return (
    <a ref={ref} href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
})
