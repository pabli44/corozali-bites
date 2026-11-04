import AdSense from './components/AdSense'
import SkipLink from './components/SkipLink'
import Hero from './sections/Hero'
import About from './sections/About'
import Menu from './sections/Menu'
import Offers from './sections/Offers'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Social from './sections/Social'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <SkipLink />
      <main id="main-content" className="main-content" role="main">
        <Hero />
        <About />
        <section className="content-ad" aria-label="Publicidad">
          <div className="content-ad-inner">
            <AdSense client="ca-pub-1893344905381073" slot="8808330165" />
          </div>
        </section>
        <Menu />
        <Offers />
        <Testimonials />
        <Contact />
        <Social />
      </main>
    </div>
  )
}

export default App
