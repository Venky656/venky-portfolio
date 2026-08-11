const MARQUEE =
  'VENKAIAH SWAMY KALIKAYA ▞ DESIGN ▞ DEVELOPMENT ▞ BRANDING ▞ PROBLEM SOLVER ▞ LET&apos;S BUILD ▞ '

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-border">
      <div className="border-b border-border py-4">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <span className="px-4 font-mono text-sm font-bold tracking-[0.25em] text-primary/70">
            {MARQUEE.repeat(2)}
          </span>
          <span className="px-4 font-mono text-sm font-bold tracking-[0.25em] text-primary/70">
            {MARQUEE.repeat(2)}
          </span>
        </div>
      </div>
      <p className="py-6 text-center text-sm text-muted-foreground">
        Designed &amp; built by <span className="font-semibold text-foreground">Venkaiah Swamy Kalikaya</span> © 2026
      </p>
    </footer>
  )
}