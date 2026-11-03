export interface WeeklyPoster {
  /** File name inside public/images/ (e.g. "poster-2026-08-02.jpg") */
  image: string
  /** Optional: offer title */
  title: string
  /** Optional: brief description */
  description: string
}

export const currentPoster: WeeklyPoster = {
  image: 'poster.jpg',
  title: '¡Oferta del domingo!',
  description: 'Cambiamos el poster cada semana — reemplazá la imagen en public/images/',
}

