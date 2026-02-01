import React, { useEffect, useRef, useState } from 'react'

export default function Story() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState([false, false, false])
  const ref = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    // Animate heading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    // Animate cards with stagger
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target)
            setCardsVisible((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })

    return () => {
      if (ref.current) observer.unobserve(ref.current)
      cardRefs.current.forEach((card) => {
        if (card) cardObserver.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="story" className="py-24 px-6 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 700ms ease-out, transform 700ms ease-out'
          }}
        >
          <p className="text-sm font-semibold text-green-700 uppercase tracking-wide mb-4">Our Story</p>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            Born from a Love of <span className="text-red-600">Family</span> & <span className="text-green-700">Flavor</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Halal Homestead began as a passion project to provide this unique snack to the local Muslim communities, as it was not readily available in the DMV area. Over the past three years, the demand for their products has only grown.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '❤️',
              title: 'Made with Love',
              desc: 'Every piece is made with passion and attention to detail, just like homemade should be.'
            },
            {
              icon: '👥',
              title: 'Family Recipe',
              desc: 'Our recipes have been passed down and perfected, bringing authentic flavors to your table.'
            },
            {
              icon: '⭐',
              title: 'Premium Quality',
              desc: 'We source only the finest halal-certified beef to ensure exceptional taste and quality.'
            }
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center"
              style={{
                opacity: cardsVisible[index] ? 1 : 0,
                transform: cardsVisible[index] ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 600ms ease-out ${index * 150}ms, transform 600ms ease-out ${index * 150}ms`
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-lg mb-6 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
