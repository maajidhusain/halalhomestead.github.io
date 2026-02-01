import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import Products from './components/Products'
import Founder from './components/Founder'
import YeaPitch from './components/YeaPitch'
import OARPartnership from './components/OARPartnership'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-stone-50">
      <Header />

      <Hero />

      <Story />

      <main className="space-y-24">
        <section id="products" className="px-6 max-w-7xl mx-auto">
          <Products />
        </section>

        <section id="founder" className="px-6 max-w-6xl mx-auto">
          <Founder />
        </section>

        <YeaPitch />

        <OARPartnership />

        <section id="contact" className="px-6 max-w-4xl mx-auto pb-24">
          <Contact />
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 py-8 border-t">
        © {new Date().getFullYear()} Halal Homestead. All rights reserved.
      </footer>
    </div>
  )
}
