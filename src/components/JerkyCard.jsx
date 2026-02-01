import { useState } from 'react'

export default function JerkyCard({
  image,
  title,
  quote,
  nutrition,
  ingredients,
  contains,
}) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
      className="cursor-pointer"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: isFlipped ? '500px' : '380px',
        }}
      >
        {/* Front - Image & Quote */}
        <div
          className="absolute w-full bg-white rounded-xl overflow-hidden shadow flex flex-col"
          style={{ backfaceVisibility: 'hidden', minHeight: '380px' }}
        >
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-4 md:p-6 flex flex-col justify-between h-40">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{title}</h3>
              <p className="italic text-gray-600 text-xs md:text-sm">"{quote}"</p>
            </div>
            <p className="text-xs text-gray-500 text-center hidden md:block">Hover to see details</p>
            <p className="text-xs text-gray-500 text-center md:hidden">Tap to see details</p>
          </div>
        </div>

        {/* Back - Nutrition & Ingredients */}
        <div
          className="absolute w-full bg-white rounded-xl shadow p-3 sm:p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', minHeight: '500px' }}
        >
          <div className="flex-1 overflow-y-auto">
            {/* Nutrition Facts */}
            <div className="border-2 border-black p-2 md:p-3 text-sm mb-3">
              <h4 className="text-xs md:text-sm font-black border-b-2 border-black pb-1 mb-2">
                Nutrition Facts
              </h4>

              <div className="flex justify-between font-bold border-b py-1 text-xs">
                <span>Calories</span>
                <span>{nutrition.calories}</span>
              </div>

              <div className="space-y-1 mt-2">
                {nutrition.rows.map((r, i) => (
                  <div
                    key={i}
                    className={`flex justify-between text-xs ${
                      r.indent ? 'pl-4' : ''
                    } ${r.bold ? 'font-bold' : ''}`}
                  >
                    <span className="flex-shrink-0">{r.label}</span>
                    <span className="flex-shrink-0 ml-2">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="text-xs space-y-2 mb-3">
              <p className="break-words">
                <span className="font-semibold">Ingredients:</span> {ingredients}
              </p>
              <p className="font-medium break-words">
                Contains: {contains}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-auto hidden md:block">Hover away to close</p>
          <p className="text-xs text-gray-500 text-center mt-auto md:hidden">Tap to close</p>
        </div>
      </div>
    </div>
  )
}
