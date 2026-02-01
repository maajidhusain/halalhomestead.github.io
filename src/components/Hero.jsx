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
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        marginRight: 'calc(50% - 50vw)',
        backgroundColor: '#1f2937'
      }}
      aria-label="Halal Homestead hero"
    >
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `scale(${vars.bgScale})`,
          transition: 'transform 120ms linear',
          zIndex: 0
        }}
      />

      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, rgba(0,0,0,${0.2 + vars.overlayA / 2}), rgba(0,0,0,${vars.overlayA}))`, transition: 'background 120ms linear', zIndex: 1 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center py-24 h-full" style={{ transform: `translateY(${vars.contentY}px) scale(${vars.contentScale})`, transition: 'transform 120ms linear' }}>
        <p className="text-sm font-semibold text-gray-300 mb-4">Sold At In-Person Events</p>
        
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg mb-4">
            Authentic <span className="text-amber-400">Halal</span> Jerky for the <span className="text-amber-400">DMV</span>
          </h1>
          
          <p className="mt-4 text-lg text-gray-100">Premium beef, traditional recipies, and 100% Halal. The protein snack you've been waiting for.</p>
          
          <div className="mt-8 flex gap-4 justify-center">
            <a href="#story" className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1">See What We Offer</a>
            <a href="#products" className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-all">Explore Flavors</a>
          </div>

          <div className="mt-12 flex gap-12 text-sm justify-center">
            <div>
              <div className="text-2xl font-bold text-amber-400">100%</div>
              <div className="text-gray-300">Halal</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">3+</div>
              <div className="text-gray-300">Unique Flavors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber-400">DMV</div>
              <div className="text-gray-300">Local Events</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
