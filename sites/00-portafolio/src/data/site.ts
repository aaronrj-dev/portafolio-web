/**
 * Contenido de la web personal. Editar aquí lo actualiza todo.
 */

export const site = {
  name: "Aaron Rodríguez",
  role: "Desarrollador web",
  headline: "Desarrollo webs rápidas, cuidadas y hechas para dar confianza.",
  sub: "Soy Aaron Rodríguez, desarrollador web. Ayudo a negocios y profesionales a tener una presencia online profesional: webs claras, elegantes y bien construidas por dentro, no solo por fuera.",
  email: "aaronrj.webdev@gmail.com",
  github: "https://github.com/aaronrj-dev",
  githubHandle: "github.com/aaronrj-dev",
  // Pon aquí tu URL real de LinkedIn cuando la tengas.
  linkedin: "https://www.linkedin.com/",
} as const;

export const about = [
  "Soy desarrollador con base técnica real. Vengo del desarrollo de software (backend con Java y Spring Boot, bases de datos, arquitectura en capas), y eso marca cómo trabajo: no me limito a que una web «se vea bien», me aseguro de que esté bien hecha por debajo — rápida, ordenada, mantenible y fácil de hacer crecer.",
  "Me tomo cada proyecto en serio. Soy meticuloso con los detalles, constante y directo en la comunicación. Prefiero entender bien lo que necesitas antes de escribir una sola línea, para entregarte exactamente lo que tu negocio pide.",
  "Actualmente amplío mi formación en desarrollo web, inteligencia artificial e inglés (nivel C1), con la vista puesta en trabajar con clientes dentro y fuera de España.",
];

export interface ServiceItem {
  title: string;
  text: string;
}
export const services: ServiceItem[] = [
  {
    title: "Webs para negocios locales",
    text: "Restaurantes, tiendas, profesionales. Una web clara que enseñe lo que ofreces y convierta visitas en clientes.",
  },
  {
    title: "Tiendas online",
    text: "Vende tus productos con una tienda limpia, fácil de usar y optimizada para móvil.",
  },
  {
    title: "Landing pages",
    text: "Páginas enfocadas en un objetivo: captar clientes, reservas o contactos.",
  },
  {
    title: "Mantenimiento y mejoras",
    text: "Me encargo de que tu web siga rápida, actualizada y funcionando, para que tú no tengas que preocuparte.",
  },
];

export const steps = [
  { n: "01", title: "Hablamos", text: "Entiendo tu negocio y qué necesitas." },
  { n: "02", title: "Diseño y construyo", text: "Te enseño avances; no desapareces sin saber nada." },
  { n: "03", title: "Publico y te lo entrego", text: "Tu web online, lista y explicada." },
  { n: "04", title: "Te acompaño", text: "Soporte y mejoras cuando lo necesites." },
];

export const stack = [
  "Java", "Spring Boot", "JavaScript", "HTML / CSS",
  "Astro", "Tailwind CSS", "Git", "Docker", "PostgreSQL", "MySQL",
];

export interface Project {
  title: string;
  type: string;
  blurb: string;
  image: string;
  alt: string;
  // TODO: sustituir "#" por la URL en vivo cuando despliegues cada demo.
  live: string;
  accent: string; // clase de color para el chip
}

const U = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=70`;

export const projects: Project[] = [
  {
    title: "Sal de Mar",
    type: "Restaurante",
    blurb: "Web de restaurante con carta, galería, reservas y ubicación. Cálida y apetecible.",
    image: U("1414235077428-338989a2e8c0"),
    alt: "Vista de la web del restaurante Sal de Mar",
    live: "#",
    accent: "bg-[#0b2b2f]",
  },
  {
    title: "Raíz Verde",
    type: "Tienda online",
    blurb: "E-commerce de cosmética natural con catálogo, carrito y checkout. Estilo boutique.",
    image: U("1608248543803-ba4f8c70ae0b"),
    alt: "Vista de la tienda online Raíz Verde",
    live: "#",
    accent: "bg-[#2f5540]",
  },
  {
    title: "Clara Ferré",
    type: "Marca personal",
    blurb: "Landing de una fotógrafa enfocada a captar clientes. Portfolio, servicios y contacto.",
    image: U("1519741497674-611481863552"),
    alt: "Vista de la landing de la fotógrafa Clara Ferré",
    live: "#",
    accent: "bg-[#8c6231]",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  detail: string;
}
// PLACEHOLDER — sustituir por reseñas reales de clientes cuando las tengas.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Aaron entendió a la primera lo que necesitábamos. La web quedó preciosa y va rapidísima. Muy atento en todo el proceso.",
    author: "— Testimonio de ejemplo",
    detail: "Sustituir por reseña real",
  },
  {
    quote:
      "Trabajar con él fue fácil y claro. Nos fue enseñando avances y entregó justo lo que pedíamos, sin sorpresas.",
    author: "— Testimonio de ejemplo",
    detail: "Sustituir por reseña real",
  },
  {
    quote:
      "Cuidó cada detalle. Se nota que además de diseño sabe de lo que hay por debajo. Repetiremos seguro.",
    author: "— Testimonio de ejemplo",
    detail: "Sustituir por reseña real",
  },
];
