import Link from 'next/link'

// Temporary scaffold for pages whose content isn't built yet.
// Swap the <PagePlaceholder /> call in any page.tsx for real content when ready.
export default function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="bg-[#faf8f5] min-h-[60vh] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-[#c9a96e]" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl font-semibold text-[#1a1a1a] leading-tight mb-6">
          {title}
        </h1>
        <div className="w-12 h-px bg-[#c9a96e] mb-8" />
        <p className="text-[#1a1a1a]/55 text-[15px] leading-relaxed tracking-wide max-w-2xl mb-10">
          {description ??
            'This page is coming soon — we’re finalizing details for the 2026 festival. Check back shortly.'}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#c9a96e] hover:gap-5 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  )
}
