import { sidebarAd } from '../data/config'
import './AdBanner.css'

export default function AdBanner() {
  const { image, link, alt } = sidebarAd

  return (
    <aside className="ad-float">
      <p className="ad-label">Publicidad</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="ad-link"
      >
        <img src={image} alt={alt} className="ad-image" />
      </a>
    </aside>
  )
}
