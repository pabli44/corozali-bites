import Poster from '../components/Poster'
import { brandTagline, currentPoster } from '../data/config'
import './Sections.css'

export default function Hero() {
  return (
    <section id="inicio" className="section hero-section" aria-labelledby="hero-title">
      <div className="hero-poster-wrapper">
        <Poster poster={currentPoster} />
      </div>
      <div className="hero-tagline">
        <h1 id="hero-title" className="hero-title">{brandTagline}</h1>
        <p className="hero-subtitle">Comida latina con alma caribeña, preparada cada día con ingredientes frescos.</p>
      </div>
    </section>
  )
}
