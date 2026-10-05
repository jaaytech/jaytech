import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'

const facts = [
  { term: 'Discipline', detail: 'Systems, software, applied AI' },
  { term: 'Approach', detail: 'Practical, secure, maintainable' },
  { term: 'Operating from', detail: 'Remote — engagements worldwide' },
  { term: 'Currently', detail: 'Building operational software and AI workflows' },
]

export function About() {
  return (
    <section id="about" tabIndex={-1} className="relative scroll-mt-16 px-6 py-28 md:px-10 md:py-44">
      <div className="mx-auto max-w-[75rem]">
        <SectionHeader code="SYS.01" label="About" />

        <div className="mt-16 grid gap-16 md:mt-24 md:grid-cols-12 md:gap-6">
          <Reveal className="md:col-span-8">
            <h2 className="text-pretty text-3xl font-medium leading-[1.15] tracking-[-0.03em] text-muted-foreground md:text-5xl lg:text-6xl">
              I build and operate the{' '}
              <span className="text-foreground">systems behind modern work</span>{' '}—
              reliable infrastructure, software that solves real problems, and{' '}
              <span className="text-foreground">AI that makes operations smarter</span>
              <span className="text-primary">.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="md:col-span-4 md:pt-3">
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Javier Alva, known as Jaytech, works across systems administration,
              software development and applied AI. The focus is practical: reliable
              infrastructure, useful internal tools, automation, and clear systems that
              solve real operational problems.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-20 grid border-t border-border sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
            {facts.map((fact) => (
              <div
                key={fact.term}
                className="group flex flex-col gap-3 border-b border-border py-7 transition-colors duration-500 sm:pr-8 lg:border-b-0"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-500 group-hover:text-gold">
                  {fact.term}
                </dt>
                <dd className="text-base text-foreground">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
