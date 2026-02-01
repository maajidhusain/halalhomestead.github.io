export default function OARPartnership() {
  return (
    <section
      id="oar"
      className="px-6 py-20 bg-gradient-to-b from-stone-50 to-white animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Partnership</p>
          <h2 className="text-5xl font-bold mb-4">Halal Homestead x <span className="text-green-700">O.A.R</span></h2>
          <p className="text-gray-600 text-lg">
            Supporting formerly incarcerated individuals rebuild their lives through community and opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* What This Partnership Does */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-700">What This Partnership Does</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Partnering with O.A.R allows Halal Homestead to support formerly incarcerated individuals re-enter society.
            </p>
            <p className="text-lg font-semibold text-gray-900 mb-2">We believe in you.</p>
            <p className="text-lg font-semibold text-gray-900">Stay strong!</p>
          </div>

          {/* What Is O.A.R */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-700">What Is O.A.R</h3>
            <p className="text-gray-700 italic text-lg leading-relaxed">
              "To rebuild lives and create a safer community with opportunities, alternatives, and resources for justice-involved individuals and their families"
            </p>
          </div>
        </div>

        {/* How You Can Help */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Donation Packages */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-700">Our Packages: What You Can Donate</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Individual Trail Mix Packs</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Soap Wafers/Sheets</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Toothbrushes</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Mini Toothpastes</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Mini Shampoos</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Mini Lotion Bottles</span>
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span>Mini Sanitizers</span>
              </li>
            </ul>
          </div>

          {/* How to Help */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-700">How You Can Help</h3>
            <p className="text-lg font-semibold mb-6 italic text-gray-700">"Shop With O.A.R in Mind"</p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700">Donate care package items</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700">Share our mission with others</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3 mt-1">✓</span>
                <span className="text-gray-700">Give feedback for the future!</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-center mb-12 text-green-700">Get in Contact With Us</h3>
          
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Email</p>
              <a href="mailto:halal_homestead@outlook.com" className="text-xl font-bold text-green-700 hover:text-green-600 transition-colors">
                halal_homestead@outlook.com
              </a>
            </div>
            <div className="text-center">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Phone</p>
              <a href="tel:7039325156" className="text-xl font-bold text-green-700 hover:text-green-600 transition-colors">
                (703) 932-5156
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold mb-2">Follow Us</p>
            <a href="https://instagram.com/halalhomestead" className="text-lg font-bold text-green-700 hover:text-green-600 transition-colors">
              Instagram: @halalhomestead
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-green-200 text-center">
            <p className="text-gray-700 font-semibold mb-2">Fill out our Google Form and create change now!</p>
            <p className="text-sm text-gray-600">Together, we're rebuilding lives and strengthening our community.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
