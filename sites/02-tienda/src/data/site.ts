/**
 * Configuración central de la tienda. Cambiar estos valores re-personaliza la web.
 */
export const site = {
  name: "Raíz Verde",
  tagline: "Cosmética natural, hecha a mano",
  description:
    "Raíz Verde elabora cosmética natural en pequeños lotes: fórmulas cortas, ingredientes botánicos y envases que cuidan el planeta.",
  email: "hola@raizverde.example.com",
  phone: "+34 600 00 00 00",
  whatsapp: "34600000000",
  currency: "€",
  freeShippingFrom: 35, // envío gratis a partir de (€)
  social: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const nav = [
  { label: "Tienda", href: "/tienda" },
  { label: "Rostro", href: "/tienda#rostro" },
  { label: "Cuerpo", href: "/tienda#cuerpo" },
  { label: "Nosotros", href: "/#nosotros" },
] as const;
