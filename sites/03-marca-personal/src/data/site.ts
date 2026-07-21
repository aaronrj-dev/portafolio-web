/**
 * Contenido de la landing. Editar aquí re-personaliza la web para otro profesional.
 */
const U = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=72`;

export const site = {
  name: "Clara Ferré",
  role: "Fotógrafa de bodas y retrato",
  location: "Barcelona · disponible para viajar",
  // Propuesta de valor específica (lo específico convierte).
  headline: "Fotografía que se siente como el momento, no como una pose",
  sub: "Bodas, retrato y marca personal en Barcelona. Imágenes naturales, cálidas y honestas — de esas que dan ganas de imprimir.",
  email: "hola@claraferre.example.com",
  phone: "+34 600 00 00 00",
  whatsapp: "34600000000",
  social: {
    instagram: "https://instagram.com",
    behance: "https://behance.net",
  },
  images: {
    hero: U("1519741497674-611481863552", 1500), // pareja/boda
    about: U("1494790108377-be9c29b29330", 1000), // retrato de la fotógrafa
  },
} as const;

export interface Service {
  title: string;
  price: string;
  text: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Bodas",
    price: "desde 1.400 €",
    text: "Cobertura del día completo, sin postureo. Me muevo entre vosotros y capturo lo que pasa de verdad.",
    features: ["Reportaje de día completo", "Galería online privada", "300+ fotos editadas", "Entrega en 4 semanas"],
  },
  {
    title: "Retrato",
    price: "desde 220 €",
    text: "Sesiones individuales, familia o embarazo. Localización natural y una hora sin prisas.",
    features: ["Sesión de 60–90 min", "Localización a elegir", "30+ fotos editadas", "Entrega en 1 semana"],
  },
  {
    title: "Marca personal",
    price: "desde 350 €",
    text: "Para profesionales y pequeñas marcas. Fotos que cuentan quién eres y a qué te dedicas.",
    features: ["Sesión en tu espacio", "Enfoque editorial", "Uso comercial incluido", "Banco de imágenes"],
  },
];

export interface Shot {
  image: string;
  alt: string;
  tag: "Bodas" | "Retrato" | "Marca";
  wide?: boolean;
}

export const portfolio: Shot[] = [
  { image: U("1519741497674-611481863552"), alt: "Pareja abrazada durante su boda", tag: "Bodas", wide: true },
  { image: U("1511285560929-80b456fea0bc"), alt: "Ceremonia de boda al aire libre", tag: "Bodas" },
  { image: U("1500648767791-00dcc994a43e"), alt: "Retrato de hombre con luz natural", tag: "Retrato" },
  { image: U("1524504388940-b1c1722653e1"), alt: "Retrato de mujer sonriendo", tag: "Retrato" },
  { image: U("1552058544-f2b08422138a"), alt: "Retrato editorial de perfil", tag: "Marca" },
  { image: U("1487412720507-e7ab37603c6f"), alt: "Detalle de manos con anillos de boda", tag: "Bodas" },
  { image: U("1529626455594-4ff0802cfb7e"), alt: "Retrato de mujer para marca personal", tag: "Marca", wide: true },
  { image: U("1516726817505-f5ed825624d8"), alt: "Pareja paseando al atardecer", tag: "Bodas" },
];

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Clara consiguió que nos olvidáramos de la cámara. Las fotos de nuestra boda son exactamente cómo se sintió el día.",
    author: "Laura y Marc",
    detail: "Boda · Masía Empordà",
  },
  {
    quote:
      "Necesitaba fotos para mi web y salí encantada. Profesional, rápida y con un ojo increíble para la luz.",
    author: "Nadia Roig",
    detail: "Marca personal · coach",
  },
  {
    quote:
      "La sesión de familia fue divertidísima y el resultado, para enmarcar. Repetiremos sin duda.",
    author: "Familia Puig",
    detail: "Retrato · exterior",
  },
];

export const steps = [
  { n: "01", title: "Hablamos", text: "Me cuentas qué necesitas y te propongo una idea y un presupuesto claro." },
  { n: "02", title: "El día", text: "Nos vemos y disparo. Tú a lo tuyo; yo capturo sin interrumpir." },
  { n: "03", title: "Entrega", text: "Recibes una galería online privada, lista para descargar y compartir." },
];

export const faqs = [
  { q: "¿Cuánto tardas en entregar las fotos?", a: "Retrato en una semana; bodas en unas cuatro. Siempre te aviso si hay algún cambio." },
  { q: "¿Viajas fuera de Barcelona?", a: "Sí, viajo por toda España y también al extranjero. Los desplazamientos largos se presupuestan aparte." },
  { q: "¿Qué pasa si llueve el día de la sesión?", a: "Buscamos plan B o reprogramamos sin coste. La lluvia a veces da las mejores fotos." },
  { q: "¿Puedo pedir un álbum impreso?", a: "Claro. Trabajo con un laboratorio profesional y te enseño opciones de álbum y copias." },
];
