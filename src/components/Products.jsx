import JerkyCard from './JerkyCard'
import mango from '../assets/mango-habanero.jpg'
import hawaiian from '../assets/hawaiian-jerky.jpg'
import maple from '../assets/smokey-maple.jpg'

export default function Products() {
  return (
    <section
      id="products"
      className="px-6 py-20 bg-white animate-fade-in animate-duration-800"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Our Flavors</p>
        <h2 className="text-5xl font-bold mb-4">
          Discover Your <span className="text-red-700">Perfect</span> Flavor
        </h2>
        <p className="text-gray-600 text-lg">
          From classic to bold, each flavor is crafted to perfection using premium halal beef.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <JerkyCard
          image={mango}
          title="Mango Habanero Jerky"
          quote="It hits the spot every time whether you’re looking for the fruity mango or the hot habanero."
          nutrition={{
            calories: 90,
            rows: [
              { label: 'Total Fat', value: '2.5g (3%)' },
              { label: 'Sodium', value: '380mg (17%)' },
              { label: 'Carbs', value: '5g (2%)' },
              { label: 'Sugars', value: '4g (3g added)' },
              { label: 'Protein', value: '12g' },
            ],
          }}
          ingredients="Beef, mango purée, soy sauce, Worcestershire, honey, habanero, lime juice, spices."
          contains="Soy"
        />

        <JerkyCard
          image={hawaiian}
          title="Hawaiian Jerky"
          quote="Transporting you to Hawaii with the flavor of pineapple and teriyaki!"
          nutrition={{
            calories: 105,
            rows: [
              { label: 'Total Fat', value: '2.5g (3%)' },
              { label: 'Sodium', value: '420mg (18%)' },
              { label: 'Carbs', value: '8g (3%)' },
              { label: 'Sugars', value: '7g (6g added)' },
              { label: 'Protein', value: '10g' },
            ],
          }}
          ingredients="Beef, pineapple juice, soy sauce, teriyaki sauce, brown sugar."
          contains="Soy, Wheat"
        />

        <JerkyCard
          image={maple}
          title="Smokey Maple Jerky"
          quote="Sitting by our campfire eating this smokey-sweet delight is a core memory."
          nutrition={{
            calories: 95,
            rows: [
              { label: 'Total Fat', value: '2.5g (3%)' },
              { label: 'Sodium', value: '360mg (16%)' },
              { label: 'Carbs', value: '6g (2%)' },
              { label: 'Sugars', value: '5g (4g added)' },
              { label: 'Protein', value: '11g' },
            ],
          }}
          ingredients="Beef, maple syrup, soy sauce, liquid smoke, spices."
          contains="Soy"
        />
      </div>
    </section>
  )
}
