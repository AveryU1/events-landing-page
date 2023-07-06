import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { OurPartners } from './components/OurPartners'
import { WhatWeDo } from './components/WhatWeDo'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <WhatWeDo/>
      <OurPartners/>
      <Footer/>
    </main>
  )
}
