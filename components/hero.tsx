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
      data-reveal
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.25, delay: 0.45, ease: EASE }}
      className="relative mx-auto aspect-square w-full max-w-[210px] md:max-w-[264px]"
    >
      <svg viewBox="0 0 280 280" fill="none" className="size-full" focusable="false">
        <defs>
          <linearGradient id="markSilver" x1="70" y1="74" x2="140" y2="202" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset=".48" stopColor="#e2e7ef" />
            <stop offset="1" stopColor="#8895a9" />
          </linearGradient>
          <linearGradient id="markGold" x1="148" y1="82" x2="218" y2="206" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f1dfb5" />
            <stop offset=".46" stopColor="var(--gold)" />
            <stop offset="1" stopColor="#8b6935" />
          </linearGradient>
          <linearGradient id="markDatum">
            <stop stopColor="var(--primary)" stopOpacity="0" />
            <stop offset=".38" stopColor="var(--primary)" stopOpacity=".7" />
            <stop offset=".7" stopColor="var(--gold)" stopOpacity=".8" />
            <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g stroke="var(--foreground)" strokeOpacity=".12" strokeWidth=".7">
          <circle cx="140" cy="140" r="112" />
          <circle cx="140" cy="140" r="88" />
          <path d="M12 140H268M140 12V268M38 74H246M38 196H246" />
          <path d="M62 48V222M118 48V222M188 48V222" strokeDasharray="2 5" />
          <path d="M38 242L126 26M144 26L232 242" stroke="var(--gold)" />
          <circle cx="98" cy="151" r="45" />
        </g>
        <g stroke="var(--primary)" strokeOpacity=".38" strokeWidth=".8">
          <path d="M28 128V112M28 152V168M128 28H112M152 28H168" />
          <path d="M252 112V128M252 152V168M112 252H128M152 252H168" />
          <circle cx="140" cy="140" r="125" strokeDasharray="1 12" />
        </g>

        <path
          d="M62 74H140V149C140 178 124 196 98 196C74 196 57 182 53 161L75 155C77 168 86 175 98 175C111 175 118 165 118 149V96H62Z"
          fill="url(#markSilver)"
        />
        <path
          d="M173 74H188L232 196H208L199 169H156L146 196H123L173 74ZM163 149H192L178 108Z"
          fill="url(#markGold)"
          fillRule="evenodd"
        />
        <path d="M63 75H139M174 75H187L230 194" stroke="var(--foreground)" strokeOpacity=".55" strokeWidth=".7" />
        <path d="M28 206H252" stroke="url(#markDatum)" />
        <g stroke="var(--foreground)" strokeOpacity=".5" strokeWidth=".8">
          <path d="M246 140H258M252 134V146M134 28H146M140 22V34" />
        </g>
        <g fill="var(--gold)">
          <circle cx="62" cy="74" r="1.8" />
          <circle cx="188" cy="74" r="1.8" />
          <circle cx="140" cy="252" r="1.8" />
        </g>
      </svg>
    </motion.div>
  )
}

function TechGlobe() {
  return (
    <motion.div
      aria-hidden="true"
      data-reveal
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.8, delay: 0.6, ease: EASE }}
      className="pointer-events-none absolute -right-[20rem] top-1/2 hidden size-[720px] -translate-y-1/2 lg:block xl:-right-[18rem] 2xl:-right-[16rem]"
    >
      <svg viewBox="0 0 720 720" className="hero-globe relative size-full overflow-visible" fill="none" focusable="false">
        <defs>
          <radialGradient id="globeGlow" cx="58%" cy="38%" r="62%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
            <stop offset="58%" stopColor="var(--primary)" stopOpacity="0.07" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="globeEdge" x1="0%" y1="85%" x2="100%" y2="15%">
            <stop stopColor="var(--primary)" stopOpacity=".08" />
            <stop offset=".5" stopColor="#7daaff" stopOpacity=".65" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity=".2" />
          </linearGradient>
          <pattern id="dotField" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r=".8" fill="#8cabdd" />
          </pattern>
          <pattern id="landDots" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#aacaff" />
          </pattern>
          <clipPath id="globeClip">
            <circle cx="360" cy="344" r="250" />
          </clipPath>
          <radialGradient id="dotFade" cx="60%" cy="35%" r="65%">
            <stop stopColor="white" />
            <stop offset=".65" stopColor="white" stopOpacity=".7" />
            <stop offset="1" stopColor="white" stopOpacity=".1" />
          </radialGradient>
          <mask id="dotMask">
            <circle cx="360" cy="344" r="250" fill="url(#dotFade)" />
          </mask>
          <radialGradient id="nodeGlow">
            <stop stopColor="#a9ccff" stopOpacity=".65" />
            <stop offset=".25" stopColor="var(--primary)" stopOpacity=".3" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbitLight" x1="0%" y1="85%" x2="100%" y2="20%">
            <stop stopColor="var(--primary)" stopOpacity="0" />
            <stop offset=".5" stopColor="#89b5ff" stopOpacity=".6" />
            <stop offset="1" stopColor="var(--primary)" stopOpacity=".1" />
          </linearGradient>
        </defs>

        <circle cx="360" cy="344" r="320" fill="url(#globeGlow)" />
        <g stroke="var(--primary)" strokeWidth=".7">
          <circle cx="360" cy="344" r="280" strokeOpacity=".14" />
          <circle cx="360" cy="344" r="296" strokeOpacity=".3" strokeDasharray="1 13" />
          <path d="M104 213A288 288 0 0 1 545 124M600 504A288 288 0 0 1 280 620" strokeOpacity=".35" />
          <path d="M92 338H108M612 338H628M354 76V92M354 596V612" strokeOpacity=".5" />
        </g>
        <g clipPath="url(#globeClip)">
          <g mask="url(#dotMask)">
            <circle cx="360" cy="344" r="250" fill="url(#dotField)" opacity=".25" />
            <g fill="url(#landDots)" opacity=".8">
              <path d="M148 205L176 169L212 154L235 171L266 172L290 193L278 213L253 225L245 251L225 259L226 281L208 272L195 243L175 231L167 211Z" />
              <path d="M227 289L250 298L273 327L303 335L319 367L303 396L298 435L281 469L269 498L252 506L249 477L256 443L239 413L237 379L223 352L215 318Z" />
              <path d="M276 131L301 111L331 118L324 151L303 169L283 155Z" />
              <path d="M336 202L353 185L378 189L386 171L406 164L420 184L408 211L383 226L354 224L344 240L327 230Z" />
              <path d="M339 249L373 237L406 254L424 279L446 298L431 326L410 339L401 374L379 405L359 397L350 361L332 341L316 308L320 274Z" />
              <path d="M415 158L454 142L493 158L528 172L553 197L583 215L596 246L574 269L545 262L531 288L509 299L496 279L474 280L451 255L426 260L410 232L423 206L436 191Z" />
              <path d="M453 283L476 301L488 324L477 346L461 327ZM507 307L524 322L532 353L551 371L543 383L520 367L507 342Z" />
              <path d="M506 413L533 394L562 403L578 431L556 452L525 450L503 435ZM422 382L430 396L419 428L410 416Z" />
            </g>
          </g>
          <g stroke="#6595e8" strokeOpacity=".17" strokeWidth=".65" transform="rotate(-16 360 344)">
            <ellipse cx="360" cy="344" rx="65" ry="250" />
            <ellipse cx="360" cy="344" rx="145" ry="250" />
            <ellipse cx="360" cy="344" rx="215" ry="250" />
            <ellipse cx="360" cy="344" rx="250" ry="65" />
            <ellipse cx="360" cy="344" rx="250" ry="145" />
            <ellipse cx="360" cy="344" rx="250" ry="215" />
            <path d="M110 344H610M360 94V594" />
          </g>

          <g stroke="#83b4ff" strokeWidth=".8">
            <path d="M220 235L276 211L365 224L392 281L470 246L527 301L481 374L392 281L355 351L286 382L220 235L355 351L365 224M276 211L355 351L481 374L438 434L286 382L309 456" strokeOpacity=".26" />
            <path d="M220 235Q301 137 470 246M220 235Q182 352 286 382M365 224Q471 204 481 374M286 382Q381 469 481 374" strokeOpacity=".5" />
            <path d="M276 211L286 382M470 246L355 351L438 434M527 301L392 281" strokeOpacity=".2" strokeDasharray="2 5" />
          </g>
          {[
            [220, 235], [276, 211], [365, 224], [392, 281], [470, 246],
            [527, 301], [355, 351], [286, 382], [481, 374], [438, 434], [309, 456],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <circle cx={cx} cy={cy} r="20" fill="url(#nodeGlow)" />
              <circle cx={cx} cy={cy} r="5.5" stroke="#8bbcff" strokeOpacity=".4" strokeWidth=".7" />
              <circle cx={cx} cy={cy} r="1.8" fill="#d8e9ff" />
            </g>
          ))}
        </g>
        <circle cx="360" cy="344" r="250" stroke="url(#globeEdge)" />
        <g stroke="url(#orbitLight)" strokeWidth=".9">
          <ellipse cx="360" cy="344" rx="322" ry="107" transform="rotate(-32 360 344)" />
          <ellipse cx="360" cy="344" rx="310" ry="126" transform="rotate(24 360 344)" />
          <path d="M94 199C229 39 496 24 640 182" />
        </g>
        <g fill="var(--gold)">
          <circle cx="91" cy="455" r="2" />
          <circle cx="595" cy="187" r="2" />
        </g>

        <g stroke="var(--gold)" strokeOpacity=".55" strokeWidth=".8">
          <path d="M248 482H284L326 440V395M248 516H308L369 455V351M248 550H333L415 468V434" />
          <circle cx="326" cy="395" r="3" fill="var(--gold)" />
          <circle cx="369" cy="351" r="3" fill="var(--gold)" />
          <circle cx="415" cy="434" r="3" fill="var(--gold)" />
        </g>
        <g fill="var(--foreground)" fillOpacity=".8" fontFamily="var(--font-geist-mono)" fontSize="10" letterSpacing="1.8" textAnchor="end">
          <text x="232" y="486">INFRASTRUCTURE</text>
          <text x="232" y="520">SOFTWARE</text>
          <text x="232" y="554">AI</text>
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

      <div className="mx-auto flex w-full max-w-[1380px] flex-1 flex-col px-6 pb-9 pt-10 md:px-10 md:pt-16 xl:px-14">
        <FadeIn
          delay={0.15}
          className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:text-[11px]"
        >
          <span className="flex items-center gap-4">
            Personal Index
            <span className="hidden h-px w-20 bg-border md:block" />
          </span>
          <span className="hidden items-center gap-3 tracking-[0.18em] sm:flex md:gap-5">
            <span>Infrastructure</span>
            <span aria-hidden="true" className="text-gold/65">/</span>
            <span>Software</span>
            <span aria-hidden="true" className="text-gold/65">/</span>
            <span>AI</span>
          </span>
          <span className="flex items-center gap-4">
            MMXXVI
            <span className="hidden h-px w-12 bg-border md:block" />
          </span>
        </FadeIn>

        <div className="relative my-auto grid items-center gap-8 py-10 md:grid-cols-12 md:gap-7 md:py-16 lg:py-14">
          <TechGlobe />
          <div className="md:col-span-4 lg:col-span-3">
            <Monogram />
          </div>

          <div className="relative z-10 md:col-span-8 lg:col-span-7">
            <FadeIn delay={0.55}>
              <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.42em] md:mb-6 md:text-xs">
                <span aria-hidden="true" className="h-px w-7 bg-gold/65" />
                <span className="text-metallic">Jaytech</span>
              </p>
            </FadeIn>

            <motion.h1
              data-reveal
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.15, delay: 0.65, ease: EASE }}
              className="hero-name uppercase"
            >
              <span className="hero-name-given">Javier</span>{' '}
              <span className="hero-name-family">Alva</span>
            </motion.h1>

            <FadeIn delay={0.82}>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                <span>Systems Administrator</span>
                <span className="whitespace-nowrap">
                  <span aria-hidden="true" className="mr-3 text-gold">/</span>{' '}
                  Developer
                </span>
                <span className="whitespace-nowrap">
                  <span aria-hidden="true" className="mr-3 text-gold">/</span>{' '}
                  AI Specialist
                </span>
              </p>
            </FadeIn>
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-8 font-mono text-[10px] tracking-[0.22em] text-muted-foreground/35 xl:flex">
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
