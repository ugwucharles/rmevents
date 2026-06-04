import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Hero } from './components/Hero'
import { CaseStudies } from './components/CaseStudies'
import { Services } from './components/Services'
import { WhyChoose } from './components/WhyChoose'
import { AboutUs } from './components/AboutUs'
import { Journal } from './components/Journal'
import { SmoothScrollProvider } from './context/SmoothScrollContext'

export default function App() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChoose />
        <AboutUs />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
