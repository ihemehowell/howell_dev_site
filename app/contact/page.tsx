'use client'

import { useState } from 'react'

export const Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  // ✅ State for inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) throw new Error('Failed to send message')

      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen px-6 pt-32 max-w-3xl mx-auto">
      <h1 className="text-5xl font-semibold">Start a Project</h1>

      <form className="mt-12 space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-4 rounded-lg bg-neutral-900 border border-white/10 focus:outline-none"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-neutral-900 border border-white/10 focus:outline-none"
          required
        />

        <textarea
          placeholder="Tell me about your project..."
          rows={6}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full p-4 rounded-lg bg-neutral-900 border border-white/10 focus:outline-none"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </form>
    </main>
  )
}
