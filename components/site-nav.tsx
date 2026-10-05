'use client'

import { useRef, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setMenuOpen(false)
          menuButton.current?.focus()
        }
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/70 backdrop-blur-md"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10"
      >
        <a href="#top" onClick={() => setMenuOpen(false)} className="group flex items-center gap-3">
          <span className="flex size-7 items-center justify-center border border-border font-mono text-[11px] tracking-tight text-foreground transition-colors duration-500 group-hover:border-gold/60">
            JA
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground">
            Jaytech
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-500 ease-out group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-h-11 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground md:hidden"
          >
            Menu
          </button>
          <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-50 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-gold" />
            </span>
            Online
          </div>
        </div>
        <ul
          id="mobile-navigation"
          hidden={!menuOpen}
          className="absolute inset-x-0 top-16 border-b border-border bg-background px-6 py-2 md:hidden"
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => {
                  setMenuOpen(false)
                  document.querySelector<HTMLElement>(link.href)?.focus({ preventScroll: true })
                }}
                className="block py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
