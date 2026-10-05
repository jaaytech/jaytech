import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Expertise } from '@/components/expertise'
import { SelectedWork } from '@/components/selected-work'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <SelectedWork />
        <Contact />
      </main>
    </>
  )
}
