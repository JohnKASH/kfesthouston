import Link from 'next/link'

// Global 404 — must live at app/not-found.tsx to catch all unmatched routes.
export default function NotFound() {
  return (
    <section className="bg-[#1a1a1a] min-h-[70vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-8 h-px bg-[#c9a96e]" />
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#c9a96e] font-['Montserrat']">
            Error 404
          </span>
          <div className="w-8 h-px bg-[#c9a96e]" />
        </div>

        <h1 className="font-['Cormorant_Garamond'] text-7xl md:text-8xl font-semibold text-white leading-none mb-5">
          Page <em className="not-italic text-[#c9a96e]">Not Found</em>
        </h1>

        <p className="text-white/55 text-sm leading-relaxed tracking-wide max-w-md mx-auto mb-10">
          The page you’re looking for doesn’t exist or may have moved. Let’s get
          you back to the festival.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-[#c9a96e] text-[#1a1a1a] text-[11px] font-bold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#e2c080] transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/schedule"
            className="border border-white/30 text-white text-[11px] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all"
          >
            View Schedule
          </Link>
        </div>
      </div>
    </section>
  )
}
