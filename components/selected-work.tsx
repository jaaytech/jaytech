import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const projects = [
  {
    name: 'FleetRequest',
    category: 'Operations Platform',
    year: '2026',
    description:
      'Mobile-first internal workflow for coordinating fleet move requests with focused operational views and short-lived data retention.',
    stack: ['Next.js', 'TypeScript', 'Upstash Redis', 'Vercel'],
  },
  {
    name: 'Customer Notes',
    category: 'Internal Business Tool',
    year: '2026',
    description:
      'Secure customer notes workspace with authenticated access, row-level data controls, audit history and responsive mobile workflows.',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'RLS'],
  },
  {
    name: 'Off-Market Deals',
    category: 'Web Application',
    year: '2026',
    description:
      'Responsive real-estate acquisition experience for presenting off-market opportunities and collecting structured seller leads.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Vercel'],
  },
  {
    name: 'PePerfume',
    category: 'Brand & Catalog',
    year: '2026',
    description:
      'Spanish-language mobile-first catalog and brand experience for a local mobile perfume business.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  },
]

export function SelectedWork() {
  return (
    <section id="work" className="relative scroll-mt-16 px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[75rem]">
        <SectionHeader code="SYS.03" label="Selected Work" />

        <div className="mt-16 flex flex-col gap-6 md:mt-24 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <h2 className="max-w-3xl text-balance text-4xl font-medium tracking-[-0.04em] text-foreground md:text-7xl">
              Built to run. Designed to last.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
              A selection of systems and products across operations, software and applied AI.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-border md:mt-24">
          {projects.map((project, index) => (
            <li key={project.name} className="group relative border-b border-border">
              <Reveal delay={index * 0.08}>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-700 ease-out group-hover:scale-x-100"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--primary)_7%,transparent),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative grid grid-cols-12 items-center gap-x-4 gap-y-3 py-8 md:py-10">
                  <span className="col-span-12 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-500 group-hover:text-gold md:col-span-2">
                    {project.year}
                  </span>

                  <h3 className="col-span-12 text-4xl font-medium tracking-[-0.04em] text-foreground transition-transform duration-700 ease-out group-hover:translate-x-3 md:col-span-5 md:text-6xl">
                    {project.name}
                  </h3>

                  <span className="col-span-12 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-4">
                    {project.category}
                  </span>

                  <div className="col-span-12 grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out [@media(hover:hover)]:grid-rows-[0fr] group-hover:grid-rows-[1fr] md:col-start-3 md:col-end-12">
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-5 pt-6 md:flex-row md:items-end md:justify-between md:gap-12">
                        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
