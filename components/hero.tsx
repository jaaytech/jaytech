'use client'

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { ArrowDown } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

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
      data-reveal
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

function Monogram() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.25, delay: 0.45, ease: EASE }}
      className="relative mx-auto aspect-square w-full max-w-[250px] md:mx-0"
    >
      <div className="absolute inset-[12%] rounded-full border border-foreground/15" />
      <div className="absolute inset-[25%] rounded-full border border-primary/15" />
      <div className="absolute left-1/2 top-[6%] h-[88%] w-px -translate-x-1/2 bg-foreground/12" />
      <div className="absolute left-[6%] top-1/2 h-px w-[88%] -translate-y-1/2 bg-foreground/12" />
      <div className="absolute inset-x-[17%] bottom-[24%] h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--gold),transparent)] opacity-90 shadow-[0_0_18px_color-mix(in_oklab,var(--primary)_45%,transparent)]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="translate-x-[0.08em] text-[clamp(7rem,13vw,10.5rem)] font-semibold leading-none tracking-[-0.16em] text-foreground">
          J
        </span>
        <span className="-ml-[0.04em] translate-y-[0.04em] text-[clamp(7rem,13vw,10.5rem)] font-light leading-none tracking-[-0.14em] text-metallic">
          A
        </span>
      </div>

      <div className="absolute right-[9%] top-1/2 size-5 -translate-y-1/2">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-foreground/45" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foreground/45" />
      </div>
    </motion.div>
  )
}

function TechGlobe() {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.8, delay: 0.6, ease: EASE }}
      className="pointer-events-none absolute -right-[22rem] top-[7rem] hidden size-[760px] lg:block xl:-right-[18rem] 2xl:-right-[13rem]"
    >
      <div className="absolute inset-[8%] rounded-full bg-primary/8 blur-3xl" />
      <svg viewBox="0 0 720 720" className="hero-globe relative size-full overflow-visible">
        <defs>
          <radialGradient id="globeGlow" cx="35%" cy="42%" r="68%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
            <stop offset="58%" stopColor="var(--primary)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="globeEdge" x1="0%" y1="15%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.08" />
            <stop offset="58%" stopColor="var(--primary)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.18" />
          </linearGradient>
          <pattern id="dotField" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.15" fill="var(--foreground)" fillOpacity="0.42" />
          </pattern>
          <clipPath id="globeClip">
            <circle cx="360" cy="360" r="270" />
          </clipPath>
          <radialGradient id="dotFade" cx="45%" cy="45%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dotMask">
            <circle cx="360" cy="360" r="270" fill="url(#dotFade)" />
          </mask>
        </defs>

        <circle cx="360" cy="360" r="270" fill="url(#globeGlow)" />
        <circle cx="360" cy="360" r="270" fill="url(#dotField)" mask="url(#dotMask)" opacity="0.55" />
        <circle cx="360" cy="360" r="270" fill="none" stroke="url(#globeEdge)" strokeWidth="1.5" />

        <g clipPath="url(#globeClip)" fill="none" stroke="var(--primary)" strokeOpacity="0.18" strokeWidth="1">
          <ellipse cx="360" cy="360" rx="270" ry="92" />
          <ellipse cx="360" cy="360" rx="270" ry="168" />
          <ellipse cx="360" cy="360" rx="102" ry="270" />
          <ellipse cx="360" cy="360" rx="188" ry="270" />
          <path d="M100 332 C230 265 490 265 620 332" />
          <path d="M105 410 C250 475 480 475 615 410" />
        </g>

        <g fill="var(--gold)">
          <circle cx="244" cy="251" r="3.2" />
          <circle cx="320" cy="340" r="3.2" />
          <circle cx="286" cy="441" r="3.2" />
        </g>
        <g fill="none" stroke="var(--gold)" strokeOpacity="0.62" strokeWidth="1.2">
          <path d="M244 251 H145" />
          <path d="M320 340 H170" />
          <path d="M286 441 H198" />
        </g>
        <g
          fill="var(--foreground)"
          fillOpacity="0.72"
          fontFamily="var(--font-geist-mono)"
          fontSize="11"
          letterSpacing="2.2"
        >
          <text x="34" y="246">INFRASTRUCTURE</text>
          <text x="74" y="335">SOFTWARE</text>
          <text x="150" y="436">AI</text>
        </g>

        <g fill="none" stroke="var(--primary)" strokeOpacity="0.2" strokeWidth="1">
          <path d="M85 178 C218 42 467 25 635 147" />
          <path d="M45 224 C198 42 514 18 684 200" />
        </g>
      </svg>
    </motion.div>
  )
}

export function Hero() {
  const reducedMotion = useReducedMotion()
  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)
  const x = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.6 })
  const y = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.6 })
  const mask = useMotionTemplate`radial-gradient(280px circle at ${x}px ${y}px, black, transparent 76%)`

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== 'mouse') return
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
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 -z-20 [mask-image:radial-gradient(ellipse_95%_85%_at_52%_38%,black,transparent)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="bg-grid-bright pointer-events-none absolute inset-0 -z-20 hidden md:block motion-reduce:!hidden"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-16 -z-20 h-[600px] bg-[radial-gradient(ellipse_42%_55%_at_54%_0%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent_74%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 -z-10 size-[480px] rounded-full border border-primary/10 opacity-50 lg:hidden"
      />

      <TechGlobe />

      <div className="mx-auto flex w-full max-w-[1380px] flex-1 flex-col px-6 pb-9 pt-10 md:px-10 md:pt-16 xl:px-14">
        <FadeIn
          delay={0.15}
          className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:text-[11px]"
        >
          <span className="flex items-center gap-4">
            Personal Index
            <span className="hidden h-px w-20 bg-border md:block" />
          </span>
          <span className="hidden sm:inline">Infrastructure / Software / AI</span>
          <span className="flex items-center gap-4">
            MMXXVI
            <span className="hidden h-px w-12 bg-border md:block" />
          </span>
        </FadeIn>

        <div className="relative my-auto grid items-center gap-10 py-14 md:grid-cols-12 md:gap-8 lg:py-10">
          <div className="md:col-span-4 lg:col-span-3">
            <Monogram />
          </div>

          <div className="relative z-10 md:col-span-8 lg:col-span-7">
            <FadeIn delay={0.55}>
              <p className="text-metallic mb-4 font-mono text-sm uppercase tracking-[0.52em] md:text-base">
                Jaytech
              </p>
            </FadeIn>

            <motion.h1
              data-reveal
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.65, ease: EASE }}
              className="text-[clamp(3.35rem,8.3vw,7.6rem)] uppercase leading-[0.92] tracking-[-0.055em]"
            >
              <span className="font-semibold text-foreground">Javier</span>{' '}
              <span className="font-light text-foreground/72">Alva</span>
            </motion.h1>

            <FadeIn delay={0.82}>
              <p className="mt-5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-muted-foreground sm:text-xs">
                Systems Administrator <span className="text-gold">·</span> Developer{' '}
                <span className="text-gold">·</span> AI Specialist
              </p>
            </FadeIn>
          </div>

          <div className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-1/2 flex-col gap-8 font-mono text-[10px] tracking-[0.22em] text-muted-foreground/35 xl:flex">
            <span className="border-l border-gold pl-4 text-foreground">01</span>
            <span className="border-l border-border pl-4">02</span>
            <span className="border-l border-border pl-4">03</span>
            <span className="border-l border-border pl-4">04</span>
          </div>
        </div>

        <div className="relative z-10 border-t border-border pt-7">
          <FadeIn delay={0.95}>
            <p className="max-w-5xl text-balance text-[clamp(2.6rem,6.2vw,6rem)] font-light leading-[0.95] tracking-[-0.055em] text-foreground">
              Systems. Code. <span className="text-primary">Intelligence.</span>
            </p>
          </FadeIn>

          <FadeIn delay={1.08} className="mt-6 flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground sm:text-[11px]">
              Building reliable infrastructure for a smarter tomorrow.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={1.2} className="mt-12 flex items-end justify-between gap-6">
          <a
            href="#about"
            className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            <span className="flex size-10 items-center justify-center border border-border transition-colors duration-500 group-hover:border-primary">
              <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
            </span>
            Scroll
          </a>

          <span className="hidden font-mono text-[10px] uppercase tracking-[0.26em] text-muted-foreground sm:inline md:text-[11px]">
            Est. operations — Global / Remote
          </span>
        </FadeIn>
      </div>
    </section>
  )
}
