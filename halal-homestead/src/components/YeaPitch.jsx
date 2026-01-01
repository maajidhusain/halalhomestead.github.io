import pitch from '../assets/yea-pitch.jpg'

export default function YeaPitch() {
  return (
    <section
      id="yea"
      className="px-6 py-20 bg-gray-100 grid md:grid-cols-2 gap-10 items-center animate-slide-in-right"
    >
      <div>
        <h2 className="text-3xl font-bold mb-4">Loudoun Chamber’s YEA! 2025</h2>
        <p>
          In April 2025, Muhammad won the Young Entrepreneur Academy pitch
          competition, earning $1,500 in seed funding and recognition among
          Loudoun’s top young founders.
        </p>
      </div>

      <img src={pitch} className="rounded-xl shadow-lg" />
    </section>
  )
}
