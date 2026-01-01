import pitch1 from '../assets/yea-pitch.jpg'
import pitch2 from '../assets/yea-pitch2.jpeg'
import pitch3 from '../assets/yeapitch3.jpeg'

export default function YeaPitch() {
  return (
    <section
      id="yea"
      className="px-6 py-20 bg-white animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Recognition</p>
          <h2 className="text-5xl font-bold mb-4">Loudoun Chamber's <span className="text-blue-600">YEA!</span> 2025</h2>
          <p className="text-gray-600 text-lg">
            In April 2025, Muhammad won the Young Entrepreneur Academy pitch
            competition, earning $1,500 in seed funding and recognition among
            Loudoun's top young founders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={pitch1} alt="YEA Pitch Competition" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={pitch2} alt="YEA Award Recognition" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img src={pitch3} alt="YEA Celebration" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Award Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-3xl font-bold text-blue-600">$1,500</p>
              <p className="text-gray-600">Seed Funding</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">1st</p>
              <p className="text-gray-600">Place Winner</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-indigo-600">April 2025</p>
              <p className="text-gray-600">Competition Date</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
