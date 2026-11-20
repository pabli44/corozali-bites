import AdSense from './components/AdSense'
import CookieBanner from './components/CookieBanner'
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
      <CookieBanner />
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
        <footer className="site-footer">
          <p>© 2026 Corozali Bites</p>
          <nav aria-label="Información legal">
            <a href="/privacidad.html">Política de privacidad</a>
            <span aria-hidden="true">·</span>
            <a href="/terminos.html">Términos y condiciones</a>
            <span aria-hidden="true">·</span>
            <a href="/privacidad.html#cookies">Cookies</a>
          </nav>
        </footer>
      </main>
    </div>
  )
}

export default App
