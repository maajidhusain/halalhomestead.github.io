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
      className="h-96"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front - Image & Quote */}
        <div
          className="absolute w-full h-full bg-white rounded-xl overflow-hidden shadow"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="p-6 flex flex-col justify-between h-40">
            <div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="italic text-gray-600 text-sm">"{quote}"</p>
            </div>
            <p className="text-xs text-gray-500 text-center">Hover to see details</p>
          </div>
        </div>

        {/* Back - Nutrition & Ingredients */}
        <div
          className="absolute w-full h-full bg-white rounded-xl overflow-y-auto shadow p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex-1">
            {/* Nutrition Facts */}
            <div className="border-2 border-black p-3 text-sm mb-4">
              <h4 className="text-sm font-black border-b-2 border-black pb-1 mb-2">
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
                    <span>{r.label}</span>
                    <span>{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div className="text-xs space-y-2">
              <p>
                <span className="font-semibold">Ingredients:</span> {ingredients}
              </p>
              <p className="font-medium">
                Contains: {contains}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">Hover away to close</p>
        </div>
      </div>
    </div>
  )
}
