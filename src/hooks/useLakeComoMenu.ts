import gsap from 'gsap'
import { useEffect, useLayoutEffect, useRef, type RefObject } from 'react'

export function useLakeComoMenu(
  menuRef: RefObject<HTMLDivElement | null>,
  open: boolean,
  onClose: () => void,
) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useLayoutEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const ctx = gsap.context(() => {
      const bubble = menu.querySelector('.rm-menu__bubble')
      const items = gsap.utils.toArray<HTMLElement>('.rm-menu__items li')
      const half = Math.floor(items.length / 2)
      const topItems = items.slice(0, half)
      const bottomItems = items.slice(half)

      const tl = gsap.timeline({
        paused: true,
        defaults: { force3D: true },
        onReverseComplete: () => {
          gsap.set(menu, {
            display: 'none',
            visibility: 'hidden',
            pointerEvents: 'none',
          })
        },
      })

      tl.set(menu, { display: 'block', pointerEvents: 'auto' })
      tl.to(menu, { visibility: 'visible', opacity: 1, duration: 0.00001 }, 0)
      tl.from(
        menu,
        { x: '25%', duration: 0.5, ease: 'power1.inOut', rotationY: 0.01 },
        0.01,
      )

      if (bubble) {
        tl.from(
          bubble,
          {
            scale: 0,
            borderRadius: '100%',
            duration: 1.25,
            ease: 'power4.inOut',
            rotationY: 0.01,
          },
          0.01,
        )
      }

      if (topItems.length) {
        tl.from(
          topItems,
          {
            x: '50%',
            y: '50%',
            z: -150,
            opacity: 0,
            duration: 1,
            stagger: -0.1,
            ease: 'power4.out',
            rotationY: 0.01,
          },
          0.5,
        )
      }

      if (bottomItems.length) {
        tl.from(
          bottomItems,
          {
            x: '50%',
            y: '-50%',
            z: -150,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power4.out',
            rotationY: 0.01,
          },
          0.5,
        )
      }

      timelineRef.current = tl
    }, menu)

    return () => {
      ctx.revert()
      timelineRef.current = null
    }
  }, [menuRef])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      gsap.set(menu, {
        display: open ? 'block' : 'none',
        visibility: open ? 'visible' : 'hidden',
        opacity: open ? 1 : 0,
        x: 0,
        pointerEvents: open ? 'auto' : 'none',
      })
      return
    }

    const tl = timelineRef.current
    if (!tl) return

    if (open) {
      tl.timeScale(1).play(0)
    } else if (tl.progress() > 0 || tl.isActive()) {
      tl.timeScale(1.5).reverse()
    }
  }, [open, menuRef])

  useEffect(() => {
    if (!open) return

    const onBodyClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (document.getElementById('menu-button')?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      onClose()
    }

    const timer = window.setTimeout(() => {
      document.addEventListener('click', onBodyClick)
    }, 0)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('click', onBodyClick)
    }
  }, [open, menuRef, onClose])
}
