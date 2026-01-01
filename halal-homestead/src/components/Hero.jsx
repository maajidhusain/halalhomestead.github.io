import React, { useEffect, useRef, useState } from 'react'
import bg from '../assets/homepage-winner.png'
import product from '../assets/product-pic.jpg'

export default function Hero() {
  const ref = useRef(null)
  const [vars, setVars] = useState({ bgScale: 1.2, overlayA: 0.3, contentY: 0, contentScale: 1, productScale: 1 })

  useEffect(() => {
    let rafId = null

    function update() {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = Math.min(Math.max(-rect.top / vh, 0), 1)

      const bgScale = 1.2 + progress * 0.15
      const overlayA = 0.3 + progress * 0.4
      const contentY = -progress * 40
      const contentScale = 1 - progress * 0.02
      const productScale = 1 + progress * 0.08

      setVars({ bgScale, overlayA, contentY, contentScale, productScale })
    }

    function handler() {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(update)
    }

    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      ref={ref}
      className="h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: `${vars.bgScale * 100}%`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        transition: 'background-size 120ms linear'
      }}
      aria-label="Halal Homestead hero"
    >
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,${0.2 + vars.overlayA / 2}), rgba(0,0,0,${vars.overlayA}))`, transition: 'background 120ms linear' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center gap-8 py-24 h-full" style={{ transform: `translateY(${vars.contentY}px) scale(${vars.contentScale})`, transition: 'transform 120ms linear' }}>
        <div className="flex-1 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">Bold Taste — Fully Halal.</h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">Small-batch jerky crafted responsibly — big flavor, honest ingredients.</p>
          <div className="mt-8">
            <a href="#products" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:-translate-y-0.5">Shop Jerky</a>
          </div>
        </div>

        <div className="flex-none">
          <div className="relative">
            <div className="absolute -left-8 -top-8 w-36 h-36 rounded-[50%] bg-pink-400/30 blur-3xl" />
            <div className="absolute -right-6 bottom-0 w-44 h-44 rounded-[50%] bg-emerald-300/30 blur-3xl" />

            <div className="rounded-3xl p-4 bg-white/90 shadow-2xl transform rotate-6 hover:rotate-0 transition">
              <img src={product} alt="Halal Homestead product" className="w-56 h-56 object-cover rounded-full" style={{ transform: `scale(${vars.productScale})`, transition: 'transform 120ms linear' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
