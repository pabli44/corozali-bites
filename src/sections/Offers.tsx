import Poster from '../components/Poster'
import { currentPoster, previousPosters } from '../data/config'
import './Sections.css'

export default function Offers() {
  return (
    <section id="ofertas" className="section offers-section" aria-labelledby="offers-title">
      <div className="section-inner">
        <h2 id="offers-title" className="section-title">Ofertas semanales</h2>
        <p className="section-lead">
          Cada semana armamos una promoción especial. Esta es la actual y las que ya disfrutaron nuestros clientes.
        </p>

        <div className="offer-current">
          <h3 className="offer-current-title">{currentPoster.weekLabel}</h3>
          <div className="offer-current-poster">
            <Poster poster={currentPoster} />
          </div>
          <p className="offer-current-description">{currentPoster.description}</p>
        </div>

        <h3 className="offers-archive-title">Posters anteriores</h3>
        <div className="offers-archive">
          {previousPosters.map((poster) => (
            <article key={poster.title} className="offer-card">
              <div className="offer-card-poster">
                <Poster poster={poster} />
              </div>
              <div className="offer-card-body">
                <p className="offer-card-label">{poster.weekLabel}</p>
                <h4 className="offer-card-title">{poster.title}</h4>
                <p className="offer-card-description">{poster.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
