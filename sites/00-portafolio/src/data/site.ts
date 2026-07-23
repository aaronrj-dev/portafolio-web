/**
 * Contenido de la web personal. Editar aquí lo actualiza todo.
 */

export const site = {
  name: "Aaron Rodríguez",
  role: "Desarrollador de Software",
  headline: "Desarrollador de Software — Web, Multiplataforma e IA",
  sub: "Construyo aplicaciones web y multiplataforma y trabajo con IA (LLMs, RAG, automatización). Busco nuevas oportunidades para seguir creciendo como desarrollador dentro de un equipo.",
  email: "aaronrj.webdev@gmail.com",
  github: "https://github.com/aaronrj-dev",
  githubHandle: "github.com/aaronrj-dev",
  linkedin: "https://www.linkedin.com/in/aaronrj-dev",
  cv: "/cv-aaron-rodriguez.pdf", // se abre en el navegador (no se descarga)
} as const;

export const about = [
  "Soy desarrollador de software con base técnica real. Vengo del backend (Java y Spring Boot, bases de datos, arquitectura en capas) y me muevo con soltura también en frontend y en IA aplicada. Me importa que el código esté bien hecho por debajo: rápido, ordenado, mantenible y fácil de hacer crecer.",
  "En el último año he trabajado a fondo con inteligencia artificial: integraciones con LLMs, sistemas RAG y automatizaciones. Me gusta entender las cosas de principio a fin, no solo usarlas — por eso monto los proyectos yo mismo para aprender de verdad.",
  "Soy meticuloso, constante y me comunico de forma directa. Busco incorporarme a un equipo donde poder aportar, seguir aprendiendo y crecer como desarrollador. Sigo formándome en desarrollo, IA e inglés (nivel C1).",
];

// Habilidades agrupadas (más útil para un reclutador que una lista plana).
export interface SkillGroup {
  grupo: string;
  items: string[];
}
export const skills: SkillGroup[] = [
  { grupo: "Lenguajes", items: ["Java", "JavaScript", "Python", "SQL", "HTML / CSS"] },
  { grupo: "Backend", items: ["Spring Boot", "FastAPI", "APIs REST", "Arquitectura en capas"] },
  { grupo: "Frontend", items: ["Astro", "Tailwind CSS", "Diseño responsive"] },
  { grupo: "IA aplicada", items: ["LLMs", "RAG", "Ollama", "ChromaDB", "Automatización"] },
  { grupo: "Bases de datos", items: ["PostgreSQL", "MySQL"] },
  { grupo: "Herramientas / DevOps", items: ["Git", "Docker", "CI/CD"] },
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
    blurb: "Web estática con Astro + Tailwind: rendimiento alto, responsive y SEO. Maquetación cuidada y accesible.",
    image: "/projects/sal-de-mar.jpg",
    alt: "Captura de la web del restaurante Sal de Mar",
    live: "https://sal-de-mar.vercel.app",
    accent: "bg-[#0b2b2f]",
  },
  {
    title: "Raíz Verde",
    type: "Tienda online",
    blurb: "E-commerce con carrito y checkout en JavaScript puro (Astro + Tailwind). Gestión de estado y flujo de compra completo.",
    image: "/projects/raiz-verde.jpg",
    alt: "Captura de la tienda online Raíz Verde",
    live: "https://raiz-verde-zeta.vercel.app",
    accent: "bg-[#2f5540]",
  },
  {
    title: "Clara Ferré",
    type: "Marca personal",
    blurb: "Landing con galería filtrable por categorías e interacción en JavaScript (Astro + Tailwind). Diseño orientado a conversión.",
    image: "/projects/clara-ferre.jpg",
    alt: "Captura de la landing de la fotógrafa Clara Ferré",
    live: "https://clara-ferre.vercel.app",
    accent: "bg-[#8c6231]",
  },
  {
    title: "Asistente RAG",
    type: "IA · RAG local",
    blurb: "RAG 100% local: Python, FastAPI, ChromaDB y Ollama. Embeddings, búsqueda vectorial y generación citada — IA aplicada de principio a fin.",
    image: "/projects/rag-asistente.svg",
    alt: "Interfaz del asistente RAG con documentos y respuestas citadas",
    live: "https://github.com/aaronrj-dev/rag-asistente",
    accent: "bg-[#4f46e5]",
    code: true,
  },
];
