import { currentPoster, type WeeklyPoster } from '../data/config'
import './Poster.css'

interface PosterProps {
  poster?: WeeklyPoster
}

export default function Poster({ poster = currentPoster }: PosterProps) {
  const { image, title } = poster

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
