import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const geist = localFont({
  src: './fonts/Geist-Variable.woff2',
  variable: '--font-geist',
  weight: '100 900',
  display: 'swap',
})
const geistMono = localFont({
  src: './fonts/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
})

const title = 'Javier Alva — Jaytech | Systems, Code, Intelligence'
const description =
  'Javier Alva (Jaytech) — Systems Administrator, Software Developer and AI Specialist building resilient infrastructure, precise software and applied intelligence.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Jaytech',
    title,
    description,
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050608',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only z-[60] bg-background font-mono text-sm text-foreground focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
