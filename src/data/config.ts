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
  hours: string[]
  phone: string
  email: string
  mapsUrl: string
}

// =============================================================================
// SAMPLE CONTENT NOTICE
// The data below is realistic placeholder copy for AdSense policy review.
// Replace names, prices, hours, address, phone, email, URLs and story details
// with real business information before submitting the site to AdSense.
// =============================================================================

export const currentPoster: WeeklyPoster = {
  image: 'poster.jpg',
  title: '¡Oferta del domingo!',
  description: 'Cambiamos el poster cada semana — reemplazá la imagen en public/images/',
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
    id: 'entradas',
    title: 'Entradas',
    items: [
      {
        id: 'empanadas-carne',
        name: 'Empanadas de carne (3 unidades)',
        description: 'Masa casera rellena de carne molida sazonada con olivos, pasas y el sofrito de la casa.',
        price: '$5.50',
      },
      {
        id: 'alcapurrias',
        name: 'Alcapurrias (2 unidades)',
        description: 'Masa de plátano y yautía rellena de picadillo, fritas al momento hasta quedar doradas.',
        price: '$4.75',
      },
      {
        id: 'tostones-mojo',
        name: 'Tostones con mojo',
        description: 'Tostones crujientes servidos con mojo de ajo, aceite de oliva y un toque de limón.',
        price: '$4.00',
      },
    ],
  },
  {
    id: 'platos-fuertes',
    title: 'Platos fuertes',
    items: [
      {
        id: 'mofongo-pollo',
        name: 'Mofongo relleno de pollo',
        description: 'Plátano verde frito y majado con ajo, chicharrón y caldo, relleno de pollo guisado jugoso.',
        price: '$12.00',
      },
      {
        id: 'arroz-pernil',
        name: 'Arroz con gandules y pernil',
        description: 'Arroz con gandules al estilo boricua acompañado de pernil horneado durante horas hasta deshebrarse.',
        price: '$13.50',
      },
      {
        id: 'pollo-guisado',
        name: 'Pollo guisado con arroz blanco',
        description: 'Pollo en salsa de tomate, pimientos, cebolla y hierbas, servido con arroz blanco y habichuelas.',
        price: '$11.00',
      },
      {
        id: 'bistec-encebollado',
        name: 'Bistec encebollado',
        description: 'Bistec en salsa de cebolla caramelizada con arroz blanco, habichuelas rosadas y maduros fritos.',
        price: '$13.00',
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
        price: '$3.50',
      },
      {
        id: 'malta-india',
        name: 'Malta India',
        description: 'La malta puertorriqueña clásica, bien fría.',
        price: '$2.50',
      },
      {
        id: 'refresco-coco',
        name: 'Refresco de coco',
        description: 'Agua de coco natural con un toque de jengibre y limón.',
        price: '$4.00',
      },
      {
        id: 'cafe-puertorriqueno',
        name: 'Café puertorriqueño',
        description: 'Café molido y preparado al momento, endulzado a tu gusto.',
        price: '$2.75',
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
        price: '$3.75',
      },
      {
        id: 'flan-queso',
        name: 'Flan de queso',
        description: 'Flan cremoso de queso con caramelo casero.',
        price: '$4.00',
      },
      {
        id: 'besitos-coco',
        name: 'Besitos de coco (3 unidades)',
        description: 'Dulces de coco horneados doraditos por fuera y suaves por dentro.',
        price: '$3.50',
      },
      {
        id: 'dulce-leche',
        name: 'Dulce de leche cortada',
        description: 'Dulce tradicional de leche cuajada con especias, servido en porción individual.',
        price: '$3.75',
      },
    ],
  },
]

export const previousPosters: WeeklyPoster[] = [
  {
    image: 'posterOld.svg',
    title: 'Combo familiar de empanadas',
    description: 'Docena de empanadas + 2 jugos naturales por $18.00.',
    weekLabel: 'Semana del 20 al 26 de octubre',
  },
  {
    image: 'posterOld.svg',
    title: 'Domingo de mofongo',
    description: 'Mofongo relleno con 20 % de descuento todos los domingos.',
    weekLabel: 'Semana del 13 al 19 de octubre',
  },
  {
    image: 'posterOld.svg',
    title: 'Postre gratis con tu almuerzo',
    description: 'Lleva cualquier plato fuerte y llévate un tembleque de cortesía.',
    weekLabel: 'Semana del 6 al 12 de octubre',
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
  address: 'Calle Principal #123, Corozal, Puerto Rico',
  hours: [
    'Miércoles a viernes: 11:00 a. m. – 8:00 p. m.',
    'Sábados y domingos: 10:00 a. m. – 9:00 p. m.',
    'Lunes y martes: cerrado',
  ],
  phone: '(787) 555-0123',
  email: 'hola@corozalibites.com',
  mapsUrl: 'https://maps.google.com/?q=Corozal,+Puerto+Rico',
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/corozalibites',
    label: 'Síguenos en Instagram',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/corozalibites',
    label: 'Encuéntranos en Facebook',
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/17875550123',
    label: 'Escríbenos por WhatsApp',
  },
]
