import { currentPoster } from '../data/config'
import './Poster.css'

export default function Poster() {
  const { image, title } = currentPoster

  return (
    <div className="poster-hero">
      <img
        src={`/images/${image}`}
        alt={title}
        className="poster-image"
      />
    </div>
  )
}
