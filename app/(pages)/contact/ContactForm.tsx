'use client'

import { useState } from 'react'

// Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT (Vercel → Environment Variables) to a
// Formspree endpoint configured to deliver to info@kashouston.org (or any URL
// that accepts a JSON POST and returns a 2xx). Until set, the form shows an
// honest "email us" message instead of silently dropping submissions.
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT
const CONTACT_EMAIL = 'info@kashouston.org'

type FormState = { name: string; email: string; subject: string; message: string }
const INITIAL: FormState = { name: '', email: '', subject: '', message: '' }

const labelCls = 'text-sm font-semibold text-[#1a1a1a]/70'
const inputCls =
  'px-3.5 py-2.5 border-2 border-[#1a1a1a]/10 rounded-xl text-[15px] text-[#1a1a1a] bg-white outline-none focus:border-[#FB4E6D] transition-colors'

export default function ContactForm() {
  const [f, setF] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((p) => ({ ...p, [k]: v }))

  function validate() {
    const e: Record<string, boolean> = {}
    if (!f.name.trim()) e.name = true
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = true
    if (!f.message.trim()) e.message = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    if (!ENDPOINT) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...f,
          subject: f.subject.trim() || 'Korean Festival Houston — Contact Form',
          _subject: `Contact form — ${f.name}`,
        }),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white border border-[#1a1a1a]/8 shadow-sm text-center px-8 py-14">
        <div className="text-5xl mb-4">💌</div>
        <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a] mb-2">
          Message Sent!
        </h2>
        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide max-w-md mx-auto">
          Thanks for reaching out to Korean Festival Houston. We’ll get back to you
          as soon as we can.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-white rounded-2xl border border-[#1a1a1a]/8 shadow-sm p-6 md:p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5">
          <span className={labelCls}>Name <span className="text-[#FB4E6D]">*</span></span>
          <input className={inputCls} placeholder="Your name" value={f.name} onChange={(e) => update('name', e.target.value)} />
          {errors.name && <span className="text-[13px] text-[#FB4E6D]">Please enter your name.</span>}
        </label>
        <label className="flex flex-col gap-1.5">
          <span className={labelCls}>Email <span className="text-[#FB4E6D]">*</span></span>
          <input type="email" className={inputCls} placeholder="you@email.com" value={f.email} onChange={(e) => update('email', e.target.value)} />
          {errors.email && <span className="text-[13px] text-[#FB4E6D]">Please enter a valid email.</span>}
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Subject</span>
        <input className={inputCls} placeholder="What’s this about?" value={f.subject} onChange={(e) => update('subject', e.target.value)} />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className={labelCls}>Message <span className="text-[#FB4E6D]">*</span></span>
        <textarea className={`${inputCls} min-h-[140px] resize-y`} placeholder="How can we help?" value={f.message} onChange={(e) => update('message', e.target.value)} />
        {errors.message && <span className="text-[13px] text-[#FB4E6D]">Please enter a message.</span>}
      </label>

      {status === 'error' && (
        <p className="text-sm text-[#FB4E6D]">
          {ENDPOINT
            ? `Something went wrong. Please try again, or email ${CONTACT_EMAIL} directly.`
            : `This form isn’t connected yet — please email ${CONTACT_EMAIL} directly and we’ll get back to you!`}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#FB4E6D] text-white text-[13px] font-bold tracking-[0.12em] uppercase py-4 rounded-full hover:bg-[#e23d5c] transition-colors disabled:bg-[#ccc]"
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
