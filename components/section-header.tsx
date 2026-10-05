import { Reveal } from '@/components/reveal'

export function SectionHeader({ code, label }: { code: string; label: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-4 border-b border-border pb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="text-gold">{code}</span>
        <span aria-hidden="true" className="h-px w-8 bg-border" />
        <span>{label}</span>
      </div>
    </Reveal>
  )
}
