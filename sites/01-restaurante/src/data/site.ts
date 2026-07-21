/**
 * Configuración central del sitio.
 * Todo el contenido editable vive aquí: cambiar estos valores re-personaliza la web
 * sin tocar el marcado. (Base para la skill "generar-web-local".)
 */

export const site = {
  name: "Sal de Mar",
  tagline: "Cocina de mar, honesta y de temporada",
  description:
    "Sal de Mar es un bistró marinero en el barrio del Cabanyal, Valencia. Producto del día de la lonja, brasa y una carta corta que cambia con la mar.",
  // Dato de contacto de ejemplo del portafolio (sustituir por el del cliente real).
  email: "hola@saldemar.example.com",
  phone: "+34 963 00 00 00",
  phoneHref: "+34963000000",
  whatsapp: "34600000000", // formato internacional sin "+", para el enlace wa.me
  address: {
    street: "Carrer de la Reina, 120",
    city: "46011 València",
    maps: "https://www.google.com/maps/search/?api=1&query=Cabanyal+Valencia",
    // URL de incrustación del mapa (Google Maps → Compartir → Insertar un mapa)
    embed:
      "https://www.google.com/maps?q=Cabanyal,+Valencia&output=embed",
  },
  hours: [
    { d: "Martes a jueves", h: "13:00 – 16:00 · 20:00 – 23:00" },
    { d: "Viernes y sábado", h: "13:00 – 16:30 · 20:00 – 23:30" },
    { d: "Domingo", h: "13:00 – 16:30" },
    { d: "Lunes", h: "Cerrado" },
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
} as const;

export const nav = [
  { label: "Carta", href: "#carta" },
  { label: "Galería", href: "#galeria" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
] as const;
