import { socialLinks } from '../data/config'
import './Sections.css'

export default function Social() {
  return (
    <section id="redes" className="section social-section" aria-labelledby="social-title">
      <div className="section-inner">
        <h2 id="social-title" className="section-title">Síguenos</h2>
        <p className="section-lead">
          Descubre nuevas ofertas, detrás de cámaras de la cocina y el día a día de Corozali Bites.
        </p>
        <nav className="social-links" aria-label="Redes sociales">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              className="social-link"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.platform}
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
