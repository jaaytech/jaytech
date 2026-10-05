import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const channels = [
  { label: 'GitHub', href: 'https://github.com/jaaytech' },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-16 overflow-hidden px-6 pb-16 pt-28 md:px-10 md:pt-44"
    >
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-48 -z-10 h-[520px] bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,color-mix(in_oklab,var(--primary)_30%,transparent),transparent_70%)]"
      />

      <div className="mx-auto max-w-[75rem]">
        <SectionHeader code="SYS.04" label="Contact" />

        <Reveal>
          <h2 className="mt-16 text-balance text-[clamp(3rem,10vw,9rem)] font-semibold leading-[0.9] tracking-[-0.055em] text-foreground md:mt-24">
            {"Let's build"}
            <br />
            <span className="text-muted-foreground">{"what's next"}</span>
            <span className="text-primary">.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 md:mt-24 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-7">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Direct line
            </p>
            <a
              href="mailto:hello@jaytech.dev"
              className="group relative inline-flex items-center gap-4 text-2xl font-medium tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl"
            >
              hello@jaytech.dev
              <ArrowUpRight className="size-6 text-muted-foreground transition-all duration-500 group-hover:rotate-45 group-hover:text-gold md:size-8" />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-px w-full bg-border"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-out group-hover:scale-x-100"
              />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Elsewhere
            </p>
            <ul className="flex flex-col border-t border-border">
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-border">
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 text-base text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    <span className="transition-transform duration-500 group-hover:translate-x-2">
                      {channel.label}
                    </span>
                    <ArrowUpRight className="size-4 transition-all duration-500 group-hover:rotate-45 group-hover:text-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <footer className="mt-28 flex flex-col gap-4 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:mt-40 md:flex-row md:items-center md:justify-between">
          <span>{'© 2026 Javier Alva'}</span>
          <span className="text-metallic">Jaytech</span>
          <span>Systems. Code. Intelligence.</span>
        </footer>
      </div>
    </section>
  )
}
