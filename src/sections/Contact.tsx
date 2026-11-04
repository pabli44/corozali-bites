import { contactInfo } from '../data/config'
import './Sections.css'

export default function Contact() {
  return (
    <section id="contacto" className="section contact-section" aria-labelledby="contact-title">
      <div className="section-inner">
        <h2 id="contact-title" className="section-title">Contacto y ubicación</h2>
        <div className="contact-grid">
          <address className="contact-card">
            <h3 className="contact-card-title">Dirección</h3>
            <p>{contactInfo.address}</p>
            <a
              className="contact-link"
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </a>
          </address>

          <div className="contact-card">
            <h3 className="contact-card-title">Horarios</h3>
            <ul className="contact-hours">
              {contactInfo.hours.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>

          <div className="contact-card">
            <h3 className="contact-card-title">Reservas y pedidos</h3>
            <p>
              Teléfono:{ ' ' }
              <a className="contact-link" href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              Correo:{ ' ' }
              <a className="contact-link" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
