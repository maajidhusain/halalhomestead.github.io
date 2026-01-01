import founder from '../assets/founder.jpg'

export default function Founder() {
  return (
    <section id="founder" className="px-6 py-20 overflow-visible">
      <div className="max-w-6xl mx-auto relative">

        {/* Mobile: image on top */}
        <div className="block md:hidden mb-6 text-center">
          <div className="inline-block w-28 h-28 rounded-full overflow-hidden shadow-lg">
            <img src={founder} alt="Founder" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Desktop: floating circle to the left */}
        <div className="hidden md:block">
          <div className="absolute left-0 top-1/4 -translate-x-1/2">
            <div className="w-36 h-36 rounded-full overflow-hidden shadow-2xl bg-white p-1 founder-img-anim">
              <img src={founder} alt="Founder" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>

        <div className="md:pl-40">
          <div className="max-w-3xl mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Our Story</p>
            <h2 className="text-5xl font-bold mb-4">Meet the <span className="text-red-700">Founder</span></h2>
            <p className="text-gray-600 text-lg">From a passion for halal and quality to building a brand that serves the community.</p>
          </div>

          <div className="prose max-w-none text-slate-800">
            <p>Hi! My name is Muhammad Zaahid Husain and I am a current Sophomore at Lightridge High School in the Northern Virginia area.</p>

            <p>When I realized that my local Muslim community hadn’t tried jerky because it wasn’t readily available and Halal, I decided to start selling Halal jerky as a youth initiative. After two years, the target market was demanding for more jerky from us.</p>

            <p>In April 2025, I won the Loudoun County Young Entrepreneur Academy’s (YEA!) investor pitch competition, receiving $1500 seed funding. Since then business has been blooming, and we have been creating new products to meet the demand.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
