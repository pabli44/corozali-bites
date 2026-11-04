export interface WeeklyPoster {
  /** File name inside public/images/ (e.g. "poster-2026-08-02.jpg") */
  image: string
  /** Optional: offer title */
  title: string
  /** Optional: brief description */
  description: string
  /** Label shown above the poster (e.g. "Esta semana" or date range) */
  weekLabel: string
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
}

export interface MenuCategory {
  id: string
  title: string
  items: MenuItem[]
}

export interface Testimonial {
  id: string
  name: string
  quote: string
  role?: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  mapsUrl: string
}

// =============================================================================
// REAL BUSINESS DATA NOTICE
// Prices, phone and Instagram reflect the real posters from Corozali.
// Exact street address and email are still placeholders pending confirmation.
// =============================================================================

export const currentPoster: WeeklyPoster = {
  image: 'ofertas/oferta-sancocho-costilla-carne-salada.jpg',
  title: 'Sancocho de costilla y carne salada',
  description: '$22.000 con domicilio incluido. Acompañado de porción de arroz.',
  weekLabel: 'Esta semana',
}

export const brandTagline = 'Sabor caribeño hecho en casa'

export const aboutStory: string[] = [
  'Corozali Bites nació en 2023 en una cocina familiar de Corozal, con la idea de llevar el sabor cálido del Caribe a cada mesa. Empezamos vendiendo empanadas los fines de semana y, poco a poco, la esquina se llenó de vecinos que volvían por el arroz con gandules, el mofongo y los jugos naturales.',
  'Cada receta la cuidamos como el primer día: el sofrito se sofríe a fuego lento, la masa de las empanadas se hace a mano y los postres siguen las recetas de la abuela. No usamos atajos porque creemos que la comida más honesta es la que se siente como en casa.',
  'Hoy atendemos de miércoles a domingo, pedimos con anticipación cuando el día se pone ocupado, y siempre guardamos una porción de amarillo para quien llega sonriendo.',
]

export const menuCategories: MenuCategory[] = [
  {
    id: 'especialidades-domingo',
    title: 'Especialidades del domingo',
    items: [
      {
        id: 'mote-de-queso',
        name: 'Mote de queso',
        description: 'Mote de queso tradicional acompañado de porción de arroz y tajadas maduras.',
        price: '$22.000',
      },
      {
        id: 'sancocho-costilla-carne-salada',
        name: 'Sancocho de costilla y carne salada',
        description: 'Sancocho de costilla y carne salada acompañado de porción de arroz.',
        price: '$22.000',
      },
      {
        id: 'sancocho-punta-gorda',
        name: 'Sancocho de punta gorda',
        description: 'Sancocho de punta gorda con arroz de ajo y ají dulce.',
        price: '$22.000',
      },
      {
        id: 'arroz-con-pollo',
        name: 'Arroz con pollo',
        description: 'Arroz con pollo acompañado de pan.',
        price: '$22.000',
      },
      {
        id: 'sopas-de-mondongo',
        name: 'Sopas de mondongo',
        description: 'Sopas de mondongo acompañadas de porción de arroz.',
        price: '$22.000',
      },
      {
        id: 'pasteles',
        name: 'Pasteles',
        description: 'Pasteles de pollo, cerdo y mixtos.',
        price: '$25.000',
      },
      {
        id: 'arroz-apastelado',
        name: 'Arroz apastelado',
        description: 'Arroz de cerdo con plátano amarillo.',
        price: '$22.000',
      },
    ],
  },
  {
    id: 'bebidas',
    title: 'Bebidas',
    items: [
      {
        id: 'jugos-naturales',
        name: 'Jugos naturales del día',
        description: 'Maracuyá, parcha o tamarindo preparados con fruta fresca, sin jarabes artificiales.',
        price: '$6.000',
      },
      {
        id: 'refresco-coco',
        name: 'Refresco de coco',
        description: 'Agua de coco natural con un toque de jengibre y limón.',
        price: '$5.000',
      },
      {
        id: 'cafe',
        name: 'Café',
        description: 'Café molido y preparado al momento, endulzado a tu gusto.',
        price: '$4.000',
      },
    ],
  },
  {
    id: 'postres',
    title: 'Postres',
    items: [
      {
        id: 'tembleque',
        name: 'Tembleque',
        description: 'Postre de coco cuajado con canela espolvoreada, suave y refrescante.',
        price: '$5.000',
      },
      {
        id: 'flan-queso',
        name: 'Flan de queso',
        description: 'Flan cremoso de queso con caramelo casero.',
        price: '$6.000',
      },
      {
        id: 'besitos-coco',
        name: 'Besitos de coco (3 unidades)',
        description: 'Dulces de coco horneados doraditos por fuera y suaves por dentro.',
        price: '$5.000',
      },
    ],
  },
]

export const previousPosters: WeeklyPoster[] = [
  {
    image: 'ofertas/oferta-mote-de-queso.jpg',
    title: 'Mote de queso',
    description: 'Mote de queso acompañado de porción de arroz y tajadas maduras. $22.000 con domicilio incluido.',
    weekLabel: 'Semana del 20 al 26 de octubre',
  },
  {
    image: 'ofertas/oferta-arroz-con-pollo.jpg',
    title: 'Arroz con pollo',
    description: 'Arroz con pollo acompañado de pan. $22.000 con domicilio incluido.',
    weekLabel: 'Semana del 27 de octubre al 2 de noviembre',
  },
  {
    image: 'ofertas/oferta-sancocho-punta-gorda.jpg',
    title: 'Sancocho de punta gorda',
    description: 'Sancocho de punta gorda con arroz de ajo y ají dulce. $22.000 con domicilio incluido.',
    weekLabel: 'Semana del 3 al 9 de noviembre',
  },
  {
    image: 'ofertas/oferta-sopas-de-mondongo.jpg',
    title: 'Sopas de mondongo',
    description: 'Sopas de mondongo acompañadas de porción de arroz. $22.000 con domicilio incluido.',
    weekLabel: 'Semana del 10 al 16 de noviembre',
  },
  {
    image: 'ofertas/oferta-pasteles.jpg',
    title: 'Pasteles',
    description: 'Pasteles de pollo, cerdo y mixtos. $25.000 con domicilio incluido.',
    weekLabel: 'Semana del 17 al 23 de noviembre',
  },
  {
    image: 'ofertas/oferta-arroz-apastelado.jpg',
    title: 'Arroz apastelado',
    description: 'Arroz apastelao de cerdo con plátano amarillo. $22.000 con domicilio incluido.',
    weekLabel: 'Semana del 24 al 30 de noviembre',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'maria-g',
    name: 'María G.',
    role: 'clienta habitual',
    quote: 'Las empanadas de Corozali Bites me devuelven a la cocina de mi abuela. Se nota que hacen todo con cariño.',
  },
  {
    id: 'luis-r',
    name: 'Luis R.',
    role: 'pedido para reuniones',
    quote: 'Pedimos el pernil para una reunión familiar y no sobró nada. La carne estaba jugosa y el arroz con gandules, perfecto.',
  },
  {
    id: 'ana-p',
    name: 'Ana P.',
    role: 'fan del mofongo',
    quote: 'El mofongo es el más crujiente que he probado en la ciudad. Ya es mi almuerzo de los sábados.',
  },
  {
    id: 'carlos-m',
    name: 'Carlos M.',
    role: 'vecino de Corozal',
    quote: 'Atención cálida, porciones generosas y precio justo. Se siente como comer en familia.',
  },
]

export const contactInfo: ContactInfo = {
  address: 'Cartagena- Bolivar',
  phone: '3012631318',
  email: 'hola@corozalibites.com (email de ejemplo — reemplazar por el real)',
  mapsUrl: 'https://maps.google.com/?q=Cartagena,+Bolivar,+Colombia',
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/corozali/',
    label: 'Síguenos en Instagram',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/573012631318',
    label: 'Escríbenos por WhatsApp',
  },
]
