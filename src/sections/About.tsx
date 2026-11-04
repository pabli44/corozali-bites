import { aboutStory } from '../data/config'
import './Sections.css'

export default function About() {
  return (
    <section id="nosotros" className="section about-section" aria-labelledby="about-title">
      <div className="section-inner">
        <h2 id="about-title" className="section-title">Nosotros</h2>
        <div className="about-text">
          {aboutStory.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
