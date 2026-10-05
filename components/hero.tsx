'use client'

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react'
import { ArrowDown } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

function MaskLine({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <motion.span
        className="block"
        initial={{ y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  )
}

function FadeIn({
  children,
  delay,
  className,
}: {
  children: React.ReactNode
  delay: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const x = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.6 })
  const y = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.6 })
  const mask = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, black, transparent 75%)`

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        mouseX.set(-1000)
        mouseY.set(-1000)
      }}
      className="relative isolate flex min-h-svh flex-col overflow-hidden pt-16"
    >
      {/* Grid texture, faded toward the edges */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black,transparent)]"
      />
      {/* Cursor-revealed electric grid */}
      <motion.div
        aria-hidden="true"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="bg-grid-bright pointer-events-none absolute inset-0 -z-10 hidden md:block"
      />
      {/* Overhead electric blue key light */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-[560px] bg-[radial-gradient(ellipse_45%_55%_at_50%_0%,color-mix(in_oklab,var(--primary)_32%,transparent),transparent_75%)]"
      />
      {/* Horizon beam */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: EASE }}
        className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-px bg-[linear-gradient(90deg,transparent,var(--primary)_50%,transparent)]"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between gap-16 px-6 pb-10 pt-12 md:px-10 md:pt-20">
        <FadeIn
          delay={0.2}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span>Personal Index</span>
          <span className="hidden sm:inline">Infrastructure / Software / AI</span>
          <span>MMXXVI</span>
        </FadeIn>

        <div className="flex flex-col gap-10">
          <h1 className="text-[clamp(4.25rem,24vw,15.5rem)] md:text-[clamp(4.25rem,17vw,15.5rem)] font-semibold uppercase leading-[0.82] tracking-[-0.055em] text-foreground">
            <MaskLine delay={0.35}>Javier</MaskLine>
            <MaskLine delay={0.5}>
              <span className="flex items-end justify-between gap-6">
                <span>Alva</span>
                <span className="text-metallic mb-[0.12em] hidden font-mono text-[clamp(0.9rem,1.4vw,1.25rem)] font-normal tracking-[0.5em] md:inline">
                  Jaytech
                </span>
              </span>
            </MaskLine>
          </h1>

          <div className="grid gap-8 border-t border-border pt-8 md:grid-cols-12 md:gap-6">
            <FadeIn delay={0.9} className="md:col-span-5">
              <p className="text-metallic mb-4 font-mono text-sm tracking-[0.5em] md:hidden">JAYTECH</p>
              <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.2em] text-muted-foreground">
                Systems Administrator <span className="text-gold">·</span> Developer{' '}
                <span className="text-gold">·</span> AI Specialist
              </p>
            </FadeIn>

            <FadeIn delay={1.05} className="md:col-span-7 md:text-right">
              <p className="text-balance text-3xl font-medium tracking-[-0.03em] text-foreground md:text-5xl">
                Systems<span className="text-primary">.</span> Code
                <span className="text-primary">.</span>{' '}
                <span className="text-muted-foreground">Intelligence</span>
                <span className="text-primary">.</span>
              </p>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={1.3} className="flex items-center justify-between">
          <a
            href="#about"
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <span className="flex size-9 items-center justify-center border border-border transition-colors duration-500 group-hover:border-primary">
              <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
            Scroll
          </a>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:inline">
            Est. operations — Global / Remote
          </span>
        </FadeIn>
      </div>
    </section>
  )
}
