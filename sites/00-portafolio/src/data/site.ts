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
  linkedin: "https://www.linkedin.com/in/aaronrj-dev",
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
  "Astro", "Tailwind CSS", "PostgreSQL", "MySQL",
  "IA / LLMs", "RAG", "Automatización", "Git", "CI/CD", "Docker",
];

export interface Project {
  title: string;
  type: string;
  blurb: string;
  image: string;
  alt: string;
  live: string;              // URL en vivo, o repo de GitHub si es proyecto de código
  accent: string;            // clase de color para el chip
  code?: boolean;            // true = proyecto de código (enlaza a GitHub, no "en vivo")
}

// Las imágenes son capturas reales de cada web en vivo (public/projects/*.jpg).
export const projects: Project[] = [
  {
    title: "Sal de Mar",
    type: "Restaurante",
    blurb: "Web de restaurante con carta, galería, reservas y ubicación. Cálida y apetecible.",
    image: "/projects/sal-de-mar.jpg",
    alt: "Captura de la web del restaurante Sal de Mar",
    live: "https://sal-de-mar.vercel.app",
    accent: "bg-[#0b2b2f]",
  },
  {
    title: "Raíz Verde",
    type: "Tienda online",
    blurb: "E-commerce de cosmética natural con catálogo, carrito y checkout. Estilo boutique.",
    image: "/projects/raiz-verde.jpg",
    alt: "Captura de la tienda online Raíz Verde",
    live: "https://raiz-verde-zeta.vercel.app",
    accent: "bg-[#2f5540]",
  },
  {
    title: "Clara Ferré",
    type: "Marca personal",
    blurb: "Landing de una fotógrafa enfocada a captar clientes. Portfolio, servicios y contacto.",
    image: "/projects/clara-ferre.jpg",
    alt: "Captura de la landing de la fotógrafa Clara Ferré",
    live: "https://clara-ferre.vercel.app",
    accent: "bg-[#8c6231]",
  },
  {
    title: "Asistente RAG",
    type: "IA · RAG local",
    blurb: "Asistente que responde sobre tus documentos con IA 100% local (Ollama + ChromaDB) y cita las fuentes. Python + FastAPI.",
    image: "/projects/rag-asistente.svg",
    alt: "Interfaz del asistente RAG con documentos y respuestas citadas",
    live: "https://github.com/aaronrj-dev/rag-asistente",
    accent: "bg-[#4f46e5]",
    code: true,
  },
];
