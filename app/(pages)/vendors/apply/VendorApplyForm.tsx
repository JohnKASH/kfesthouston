'use client'

import { useState } from 'react'

// Submission endpoint — set NEXT_PUBLIC_VENDOR_FORM_ENDPOINT in your environment
// (Vercel → Project Settings → Environment Variables). Works with a Formspree
// endpoint (https://formspree.io/f/xxxx) or any URL that accepts a JSON POST and
// returns a 2xx response. See the page notes for Google Apps Script setup.
const ENDPOINT = process.env.NEXT_PUBLIC_VENDOR_FORM_ENDPOINT

const VENDOR_TYPES = [
  { value: 'Food / Dessert', icon: '🍜', name: 'Food / Dessert', price: ['1 Day: $750', '2 Days: $1,000', '+ 25% revenue share'] },
  { value: 'Merchandise', icon: '🛍️', name: 'Merchandise', price: ['1 Day: $1,500', '2 Days: $2,000'] },
  { value: 'Non-Profit', icon: '🤝', name: 'Non-Profit', price: ['1 Day: $500', '2 Days: $750', '501(c)(3) required'] },
  { value: 'Corporate / Promo', icon: '🏢', name: 'Corporate / Promo', price: ['Contact us for fee details'] },
]

type FormState = {
  businessName: string
  ownerName: string
  address: string
  email: string
  phone: string
  vendorType: string
  items: string
  availability: string
  singleDay: string
  sponsorship: string
  ack1: boolean
  ack2: boolean
  ack3: boolean
}

const INITIAL: FormState = {
  businessName: '', ownerName: '', address: '', email: '', phone: '',
  vendorType: '', items: '', availability: '', singleDay: '', sponsorship: '',
  ack1: false, ack2: false, ack3: false,
}

const labelCls = 'text-sm font-semibold text-[#1a1a1a]/70'
const inputCls =
  'px-3.5 py-2.5 border-2 border-[#1a1a1a]/10 rounded-xl text-[15px] text-[#1a1a1a] bg-white outline-none focus:border-[#10C9AC] transition-colors'

export default function VendorApplyForm() {
  const [f, setF] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setF((p) => ({ ...p, [k]: v }))

  function validate() {
    const e: Record<string, boolean> = {}
    ;(['businessName', 'ownerName', 'address', 'phone', 'items'] as const).forEach((k) => {
      if (!f[k].trim()) e[k] = true
    })
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = true
    if (!f.vendorType) e.vendorType = true
    if (!f.availability) e.availability = true
    if (f.availability === 'One day only' && !f.singleDay) e.singleDay = true
    if (!(f.ack1 && f.ack2 && f.ack3)) e.acks = true
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    if (!validate()) return
    if (!ENDPOINT) {
      // Not connected to a submission service yet.
      setStatus('error')
      return
    }
    setStatus('submitting')
    const payload = {
      ...f,
      singleDay: f.availability === 'One day only' ? f.singleDay : 'N/A',
      sponsorship: f.sponsorship || 'Not answered',
      ack1: 'Acknowledged',
      ack2: 'Acknowledged',
      ack3: 'Acknowledged',
      _subject: `Vendor Application — ${f.businessName}`,
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-white border border-[#1a1a1a]/8 shadow-sm text-center px-8 py-14">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#1a1a1a] mb-2">
          Application Received!
        </h2>
        <p className="text-[#1a1a1a]/60 text-sm leading-relaxed tracking-wide max-w-md mx-auto">
          Thank you for applying to be a vendor at Korean Festival Houston 2026. A
          K-Fest Vendor Representative will contact you to confirm your acceptance.
          Please note that submission of this form does not guarantee acceptance.
        </p>
      </div>
    )
  }

  const sectionCls = 'bg-white rounded-2xl border border-[#1a1a1a]/8 border-l-4 shadow-sm p-6 md:p-7'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <p className="text-[13px] text-[#1a1a1a]/45">
        Fields marked with <span className="text-[#FB4E6D]">*</span> are required.
      </p>

      {/* SECTION 1 — Business Information */}
      <div className={sectionCls} style={{ borderLeftColor: '#FB4E6D' }}>
        <SectionTitle num={1} color="#FB4E6D">Business Information</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Business Name" required error={errors.businessName}>
            <input className={inputCls} placeholder="Your business name" value={f.businessName} onChange={(e) => update('businessName', e.target.value)} />
          </Field>
          <Field label="Owner / Representative Name" required error={errors.ownerName}>
            <input className={inputCls} placeholder="Full name" value={f.ownerName} onChange={(e) => update('ownerName', e.target.value)} />
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Business Address" required error={errors.address}>
            <input className={inputCls} placeholder="Street address, city, state, ZIP" value={f.address} onChange={(e) => update('address', e.target.value)} />
          </Field>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Field label="Email Address" required error={errors.email}>
            <input type="email" className={inputCls} placeholder="you@yourbusiness.com" value={f.email} onChange={(e) => update('email', e.target.value)} />
          </Field>
          <Field label="Phone Number" required error={errors.phone}>
            <input type="tel" className={inputCls} placeholder="(555) 555-5555" value={f.phone} onChange={(e) => update('phone', e.target.value)} />
          </Field>
        </div>
      </div>

      {/* SECTION 2 — Vendor Type */}
      <div className={sectionCls} style={{ borderLeftColor: '#8B6FFB' }}>
        <SectionTitle num={2} color="#8B6FFB">Vendor Type <span className="text-[#FB4E6D] text-sm">*</span></SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {VENDOR_TYPES.map((vt) => {
            const selected = f.vendorType === vt.value
            return (
              <button
                type="button"
                key={vt.value}
                onClick={() => update('vendorType', vt.value)}
                className={`text-center rounded-xl border-2 p-4 transition-all ${selected ? 'border-[#10C9AC] bg-[#10C9AC]/[0.06]' : 'border-[#1a1a1a]/10 bg-white hover:border-[#1a1a1a]/20'}`}
              >
                <span className="text-2xl block mb-1.5">{vt.icon}</span>
                <span className={`block text-sm font-bold ${selected ? 'text-[#0a7d68]' : 'text-[#1a1a1a]'}`}>{vt.name}</span>
                <span className="block text-[11px] text-[#1a1a1a]/50 mt-1 leading-snug">
                  {vt.price.map((p, i) => (<span key={i} className="block">{p}</span>))}
                </span>
              </button>
            )
          })}
        </div>
        {errors.vendorType && <ErrorText>Please select a vendor type.</ErrorText>}
        {f.vendorType === 'Corporate / Promo' && (
          <div className="mt-4 rounded-xl bg-[#1FAEDB]/[0.08] border border-[#1FAEDB]/25 px-4 py-3 text-sm text-[#1a1a1a]/70 leading-relaxed">
            Corporate &amp; Promotional vendors — please also reach out to{' '}
            <a href="mailto:sponsors@kashouston.org" className="text-[#1FAEDB] font-semibold">sponsors@kashouston.org</a>{' '}
            to discuss fee details. You’re still welcome to submit this form and we’ll follow up!
          </div>
        )}
      </div>

      {/* SECTION 3 — Items */}
      <div className={sectionCls} style={{ borderLeftColor: '#10C9AC' }}>
        <SectionTitle num={3} color="#10C9AC">Items for Sale / Offered</SectionTitle>
        <Field label="Describe the items or services you’ll be offering" required error={errors.items}>
          <textarea className={`${inputCls} min-h-[90px] resize-y`} placeholder="e.g. Korean BBQ, tteokbokki, boba — or handmade jewelry, K-beauty products, etc." value={f.items} onChange={(e) => update('items', e.target.value)} />
        </Field>
      </div>

      {/* SECTION 4 — Availability */}
      <div className={sectionCls} style={{ borderLeftColor: '#1FAEDB' }}>
        <SectionTitle num={4} color="#1FAEDB">Availability</SectionTitle>
        <p className="text-sm text-[#1a1a1a]/60 leading-relaxed mb-4">
          Korean Festival Houston takes place <strong>Saturday, October 10</strong> and{' '}
          <strong>Sunday, October 11, 2026</strong>. Vendors who can participate both days are given preference.
        </p>
        <span className={`${labelCls} block mb-2`}>Can you attend both days? <span className="text-[#FB4E6D]">*</span></span>
        <div className="flex flex-wrap gap-2.5">
          {['Both days', 'One day only'].map((opt) => {
            const selected = f.availability === opt
            return (
              <button type="button" key={opt} onClick={() => update('availability', opt)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all ${selected ? 'border-[#8B6FFB] bg-[#8B6FFB]/[0.08] text-[#6A4FE0]' : 'border-[#1a1a1a]/10 text-[#1a1a1a]/60 hover:border-[#1a1a1a]/20'}`}>
                {opt === 'Both days' ? '✅ Both days (preferred)' : '📅 One day only'}
              </button>
            )
          })}
        </div>
        {errors.availability && <ErrorText>Please select your availability.</ErrorText>}
        {f.availability === 'One day only' && (
          <div className="mt-4">
            <span className={`${labelCls} block mb-2`}>Which day? <span className="text-[#FB4E6D]">*</span></span>
            <div className="flex flex-wrap gap-2.5">
              {['Saturday, Oct 10', 'Sunday, Oct 11'].map((d) => {
                const selected = f.singleDay === d
                return (
                  <button type="button" key={d} onClick={() => update('singleDay', d)}
                    className={`rounded-full border-2 px-5 py-2 text-sm font-semibold transition-all ${selected ? 'border-[#1FAEDB] bg-[#1FAEDB]/[0.08] text-[#1582a6]' : 'border-[#1a1a1a]/10 text-[#1a1a1a]/60 hover:border-[#1a1a1a]/20'}`}>
                    {d}
                  </button>
                )
              })}
            </div>
            {errors.singleDay && <ErrorText>Please choose which day.</ErrorText>}
          </div>
        )}
      </div>

      {/* SECTION 5 — Sponsorship */}
      <div className={sectionCls} style={{ borderLeftColor: '#FBBF24' }}>
        <SectionTitle num={5} color="#FBBF24" dark>Sponsorship Interest</SectionTitle>
        <p className="text-sm text-[#1a1a1a]/60 mb-4">
          Interested in learning about sponsorship opportunities with Korean Festival Houston?
        </p>
        <div className="flex flex-wrap gap-2.5">
          {['Yes, tell me more', 'No thanks'].map((opt) => {
            const selected = f.sponsorship === opt
            return (
              <button type="button" key={opt} onClick={() => update('sponsorship', opt)}
                className={`rounded-full border-2 px-5 py-2.5 text-sm font-semibold transition-all ${selected ? 'border-[#FBBF24] bg-[#FBBF24]/[0.12] text-[#a06800]' : 'border-[#1a1a1a]/10 text-[#1a1a1a]/60 hover:border-[#1a1a1a]/20'}`}>
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      {/* SECTION 6 — Acknowledgements */}
      <div className={sectionCls} style={{ borderLeftColor: '#1a1a1a' }}>
        <SectionTitle num={6} color="#1a1a1a">Acknowledgements <span className="text-[#FB4E6D] text-sm">*</span></SectionTitle>
        <div className="space-y-3">
          {([
            ['ack1', <>I acknowledge that submission of this form <strong>does not guarantee acceptance</strong> as a Korean Festival Vendor for 2026.</>],
            ['ack2', <>I understand a <strong>KFest Vendor Representative will contact me</strong> to confirm my acceptance.</>],
            ['ack3', <>I understand that <strong>all vendor fees are non-refundable</strong>.</>],
          ] as const).map(([key, text]) => (
            <label key={key} className="flex gap-3 items-start cursor-pointer">
              <input type="checkbox" className="w-5 h-5 mt-0.5 shrink-0 accent-[#FB4E6D] cursor-pointer" checked={f[key]} onChange={(e) => update(key, e.target.checked)} />
              <span className="text-sm text-[#1a1a1a]/70 leading-relaxed">{text}</span>
            </label>
          ))}
        </div>
        {errors.acks && <ErrorText>Please check all acknowledgements to proceed.</ErrorText>}
      </div>

      {/* Submit */}
      <div className="text-center pt-2">
        {status === 'error' && (
          <p className="text-sm text-[#FB4E6D] mb-4">
            {ENDPOINT
              ? 'Something went wrong. Please try again, or email vendors@kashouston.org directly.'
              : 'This form isn’t connected to a submission service yet. Please email vendors@kashouston.org and we’ll get you set up!'}
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="bg-[#FB4E6D] text-white text-[15px] font-bold tracking-wide px-12 py-4 rounded-full shadow-lg shadow-[#FB4E6D]/30 hover:bg-[#e23d5c] hover:-translate-y-0.5 transition-all disabled:bg-[#ccc] disabled:shadow-none disabled:translate-y-0"
        >
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
        </button>
        <p className="text-[13px] text-[#1a1a1a]/45 mt-3">
          Questions? Email{' '}
          <a href="mailto:vendors@kashouston.org" className="text-[#1FAEDB] font-semibold">vendors@kashouston.org</a>
        </p>
      </div>
    </form>
  )
}

// ─── small helpers ────────────────────────────────────────────────────────────
function SectionTitle({ num, color, dark, children }: { num: number; color: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold shrink-0" style={{ backgroundColor: color, color: dark ? '#1a1a1a' : '#fff' }}>
        {num}
      </span>
      <h3 className="font-bold text-[#1a1a1a] text-[17px]">{children}</h3>
    </div>
  )
}

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: boolean; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelCls}>
        {label} {required && <span className="text-[#FB4E6D]">*</span>}
      </span>
      {children}
      {error && <ErrorText>This field is required.</ErrorText>}
    </label>
  )
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="text-[13px] text-[#FB4E6D] mt-1 block">{children}</span>
}
