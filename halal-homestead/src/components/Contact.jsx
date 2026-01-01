import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Contact Us
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Interested in ordering, partnerships, or learning more about Halal Homestead?
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <p className="text-4xl mb-3">📞</p>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Phone</p>
          <a href="tel:+17039325156" className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
            (703) 932-5156
          </a>
        </div>
        <div className="text-center">
          <p className="text-4xl mb-3">✉️</p>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Email</p>
          <a href="mailto:halal_homestead@outlook.com" className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors break-all">
            halal_homestead@outlook.com
          </a>
        </div>
        <div className="text-center">
          <p className="text-4xl mb-3">🔗</p>
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Follow Us</p>
          <div className="flex justify-center gap-4">
            <a href="https://instagram.com/halal_homestead" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
              Instagram
            </a>
            <span className="text-gray-300">•</span>
            <a href="https://linkedin.com/in/muhammad-zaahid-husain" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-slate-900 hover:text-emerald-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <form
        className="space-y-6 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="you@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-emerald-300"
            placeholder="Your message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            w-full bg-emerald-600 text-white font-semibold
            py-3 rounded-lg
            hover:bg-emerald-700
            transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 text-green-800 rounded-lg text-center">
            Message sent successfully! We'll get back to you soon.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 text-red-800 rounded-lg text-center">
            There was an error sending your message. Please try again.
          </div>
        )}
      </form>
    </div>
  )
}
