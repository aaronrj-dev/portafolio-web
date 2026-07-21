/**
 * Imágenes y reseñas.
 * Las imágenes son de Unsplash (demo). Para un cliente real se sustituyen por su
 * propia fotografía profesional: basta cambiar las URLs aquí.
 */

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const hero = {
  image: U("1414235077428-338989a2e8c0", 2000),
  alt: "Mesa de restaurante junto al mar al atardecer",
};

export const aboutImage = {
  image: U("1467003909585-2f8a72700288", 1100),
  alt: "Pescado fresco recién llegado de la lonja",
};

export interface GalleryItem {
  image: string;
  alt: string;
}

export const gallery: GalleryItem[] = [
  { image: U("1504674900247-0877df9cc836"), alt: "Plato de pescado a la brasa emplatado" },
  { image: U("1533777324565-a040eb52facd"), alt: "Marisco fresco sobre hielo" },
  { image: U("1476718406336-bb5a9690ee2a"), alt: "Arroz marinero en paella" },
  { image: U("1517248135467-4c7edcad34c4"), alt: "Sala del restaurante con luz cálida" },
  { image: U("1559339352-11d035aa65de"), alt: "Detalle de la cocina, brasa encendida" },
  { image: U("1414235077428-338989a2e8c0"), alt: "Mesa preparada junto a la ventana" },
];

export interface Review {
  quote: string;
  author: string;
  detail: string;
}

export const reviews: Review[] = [
  {
    quote:
      "El pescado a la brasa es de los mejores que he probado en Valencia. Producto impecable y trato cercano.",
    author: "Marta G.",
    detail: "Google · ★★★★★",
  },
  {
    quote:
      "Un sitio con alma. La carta es corta pero todo tiene sentido. Volveremos seguro.",
    author: "Andrés P.",
    detail: "TripAdvisor · ★★★★★",
  },
  {
    quote:
      "Reservamos para una celebración y salió redondo. Atención de diez y arroz espectacular.",
    author: "Lucía R.",
    detail: "Google · ★★★★★",
  },
];
