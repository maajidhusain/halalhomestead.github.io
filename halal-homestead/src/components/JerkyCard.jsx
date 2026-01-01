export default function JerkyCard({
  image,
  title,
  quote,
  nutrition,
  ingredients,
  contains,
}) {
  return (
    <div className="
      bg-white rounded-xl overflow-hidden
      shadow transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
    ">
      <img
        src={image}
        alt={title}
        className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>

        <p className="italic text-gray-600">
          “{quote}”
        </p>

        {/* Nutrition Facts */}
        <div className="border-2 border-black p-4 text-sm animate-fade-in">
          <h4 className="text-lg font-black border-b-4 border-black pb-1 mb-2">
            Nutrition Facts
          </h4>

          <div className="flex justify-between font-bold border-b py-1">
            <span>Calories</span>
            <span>{nutrition.calories}</span>
          </div>

          <div className="space-y-1 mt-2">
            {nutrition.rows.map((r, i) => (
              <div
                key={i}
                className={`flex justify-between ${
                  r.indent ? 'pl-4' : ''
                } ${r.bold ? 'font-bold' : ''}`}
              >
                <span>{r.label}</span>
                <span>{r.value}</span>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs border-t pt-2">
            * Percent Daily Values are based on a 2,000 calorie diet.
          </p>
        </div>

        {/* Ingredients */}
        <div className="text-sm">
          <p>
            <span className="font-semibold">Ingredients:</span> {ingredients}
          </p>
          <p className="mt-1 font-medium">
            Contains: {contains}
          </p>
        </div>
      </div>
    </div>
  )
}
