export default function Contact() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-600 mb-8">
        Interested in ordering, partnerships, or learning more about Halal Homestead?
      </p>

      <form
        className="space-y-6 max-w-xl mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          className="
            w-full bg-emerald-600 text-white font-semibold
            py-3 rounded-lg
            hover:bg-emerald-700
            transition-colors
          "
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
