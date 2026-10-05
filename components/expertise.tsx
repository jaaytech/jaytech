import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const disciplines = [
  {
    code: 'SYS',
    title: 'Systems',
    summary:
      'Reliable day-to-day infrastructure, administration and troubleshooting across modern business environments.',
    capabilities: [
      'Windows systems & administration',
      'Networking & troubleshooting',
      'Cloud & web infrastructure',
      'Monitoring & operations',
    ],
  },
  {
    code: 'DEV',
    title: 'Development',
    summary:
      'Software that solves real problems — typed, maintainable, and connected to the workflows people actually use.',
    capabilities: [
      'Next.js & TypeScript',
      'APIs & databases',
      'Internal tools',
      'Workflow automation',
    ],
  },
  {
    code: 'AI',
    title: 'AI',
    summary:
      'Applied AI integrated into useful products and workflows, with an emphasis on practical automation and human control.',
    capabilities: [
      'LLM integration',
      'AI-assisted systems',
      'Agents & automation',
      'Intelligent workflows',
    ],
  },
]

export function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-16 px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[75rem]">
        <SectionHeader code="SYS.02" label="Expertise" />

        <Reveal>
          <h2 className="mt-16 max-w-4xl text-balance text-4xl font-medium tracking-[-0.04em] text-foreground md:mt-24 md:text-7xl">
            Three disciplines. One operating standard.
          </h2>
        </Reveal>

        <div className="mt-16 grid border-y border-border md:mt-24 md:grid-cols-3">
          {disciplines.map((item, index) => (
            <Reveal
              key={item.code}
              delay={index * 0.12}
              className="border-border not-last:border-b md:not-last:border-r md:not-last:border-b-0"
            >
              <article
                className={`group relative flex h-full flex-col gap-10 overflow-hidden py-10 md:py-14 ${
                  index === 0 ? 'md:pr-10' : index === disciplines.length - 1 ? 'md:pl-10' : 'md:px-10'
                }`}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  <span className="transition-colors duration-500 group-hover:text-gold">
                    {item.code}
                  </span>
                  <span className="h-px w-10 bg-border transition-all duration-700 group-hover:w-16 group-hover:bg-primary" />
                </div>

                <div className="relative flex flex-col gap-5">
                  <h3 className="text-3xl font-medium tracking-[-0.03em] text-foreground md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">{item.summary}</p>
                </div>

                <ul className="relative mt-auto flex flex-col border-t border-border">
                  {item.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center gap-3 border-b border-border py-3.5 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-300 last:border-b-0 group-hover:text-foreground/80"
                    >
                      <span aria-hidden="true" className="size-1 bg-gold/70" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
