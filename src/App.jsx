import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Workshops from './components/Workshops'
import Schedule from './components/Schedule'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Workshops />
      <Schedule />
      <Features />
      <Gallery />
      <Testimonials />
      <CTA />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
