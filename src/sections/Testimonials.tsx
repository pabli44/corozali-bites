import { testimonials } from '../data/config'
import './Sections.css'

export default function Testimonials() {
  return (
    <section id="testimonios" className="section testimonials-section" aria-labelledby="testimonials-title">
      <div className="section-inner">
        <h2 id="testimonials-title" className="section-title">Testimonios</h2>
        <p className="section-lead">Lo que dicen nuestros comensales sobre la experiencia en Corozali Bites.</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="testimonial-card">
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <footer className="testimonial-footer">
                <span className="testimonial-name">{testimonial.name}</span>
                {testimonial.role && <span className="testimonial-role">{testimonial.role}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
