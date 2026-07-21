/**
 * Catálogo de productos. Fuente única de la tienda: fichas, rejilla y carrito
 * leen de aquí. Para un cliente real se sustituye por sus productos (o un CMS).
 */

const U = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export type Category = "rostro" | "cuerpo" | "cabello";

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: "rostro", label: "Rostro", blurb: "Sérums, cremas y limpiadoras." },
  { id: "cuerpo", label: "Cuerpo", blurb: "Aceites, jabones y bálsamos." },
  { id: "cabello", label: "Cabello", blurb: "Cuidado capilar botánico." },
];

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  /** Precio anterior (para mostrar oferta). Opcional. */
  compareAt?: number;
  short: string;
  description: string;
  ingredients: string;
  size: string;
  image: string;
  gallery?: string[];
  badge?: string; // p.ej. "Best seller", "Novedad"
  rating: number; // 0–5
  reviews: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "serum-facial-rosa-mosqueta",
    name: "Sérum facial de rosa mosqueta",
    category: "rostro",
    price: 28,
    compareAt: 34,
    short: "Regenerante y luminoso para uso nocturno.",
    description:
      "Un sérum ligero de aceite de rosa mosqueta virgen prensado en frío, vitamina E y un toque de romero. Ayuda a unificar el tono y a recuperar la luminosidad mientras duermes. Se absorbe sin dejar sensación grasa.",
    ingredients:
      "Rosa canina fruit oil, tocopherol, rosmarinus officinalis leaf extract.",
    size: "30 ml",
    image: U("1620916566398-39f1143ab7be"),
    gallery: [U("1620916566398-39f1143ab7be"), U("1608248543803-ba4f8c70ae0b")],
    badge: "Best seller",
    rating: 4.9,
    reviews: 128,
    featured: true,
  },
  {
    slug: "crema-hidratante-calendula",
    name: "Crema hidratante de caléndula",
    category: "rostro",
    price: 24,
    short: "Calma y nutre pieles sensibles.",
    description:
      "Textura en crema que se funde en la piel. Caléndula ecológica y manteca de karité para calmar la sequedad y reforzar la barrera cutánea. Apta para pieles reactivas.",
    ingredients:
      "Calendula officinalis extract, butyrospermum parkii, aloe barbadensis.",
    size: "50 ml",
    image: U("1556228720-195a672e8a03"),
    rating: 4.8,
    reviews: 74,
    featured: true,
  },
  {
    slug: "aceite-corporal-almendra",
    name: "Aceite corporal de almendra",
    category: "cuerpo",
    price: 22,
    short: "Nutrición diaria de la cabeza a los pies.",
    description:
      "Aceite seco de almendra dulce y jojoba con un aroma sutil a azahar. Ideal tras la ducha para una piel elástica y suave. No mancha la ropa.",
    ingredients:
      "Prunus amygdalus dulcis oil, simmondsia chinensis oil, natural fragrance.",
    size: "100 ml",
    image: U("1601049541289-9b1b7bbbfe19"),
    rating: 4.7,
    reviews: 56,
    featured: true,
  },
  {
    slug: "jabon-artesano-carbon",
    name: "Jabón artesano de carbón",
    category: "cuerpo",
    price: 9,
    short: "Limpieza purificante para piel mixta.",
    description:
      "Elaborado por saponificación en frío con carbón activado y aceite de oliva. Purifica sin resecar. Cada pastilla se corta y cura a mano durante seis semanas.",
    ingredients: "Olea europaea oil, cocos nucifera oil, charcoal powder.",
    size: "110 g",
    image: U("1600857544200-b2f666a9a2ec"),
    badge: "Hecho a mano",
    rating: 4.9,
    reviews: 210,
    featured: true,
  },
  {
    slug: "balsamo-labial-menta",
    name: "Bálsamo labial de menta",
    category: "cuerpo",
    price: 7,
    short: "Reparador con un frescor suave.",
    description:
      "Cera de abeja, aceite de coco y menta piperita para labios suaves todo el día. Envase de aluminio recargable.",
    ingredients: "Cera alba, cocos nucifera oil, mentha piperita oil.",
    size: "15 ml",
    image: U("1608248597279-f99d160bfcbc"),
    rating: 4.6,
    reviews: 38,
  },
  {
    slug: "champu-solido-romero",
    name: "Champú sólido de romero",
    category: "cabello",
    price: 12,
    short: "Fortalece y da brillo. Cero plástico.",
    description:
      "Una pastilla equivale a dos botellas de champú. Romero y ortiga para un cuero cabelludo sano y un cabello con cuerpo. Sin sulfatos agresivos.",
    ingredients: "Sodium coco-sulfate, rosmarinus officinalis oil, urtica dioica.",
    size: "80 g",
    image: U("1585232004423-244e0e6904e3"),
    badge: "Novedad",
    rating: 4.8,
    reviews: 45,
  },
  {
    slug: "mascarilla-arcilla-verde",
    name: "Mascarilla de arcilla verde",
    category: "rostro",
    price: 18,
    short: "Detox semanal para poros limpios.",
    description:
      "Arcilla verde francesa y té matcha. Absorbe el exceso de grasa y afina la textura de la piel en 10 minutos. Mézclala con agua o hidrolato.",
    ingredients: "Illite (green clay), camellia sinensis powder, kaolin.",
    size: "60 g",
    image: U("1612817288484-6f916006741a"),
    rating: 4.7,
    reviews: 61,
  },
  {
    slug: "aceite-barba-cedro",
    name: "Aceite de barba de cedro",
    category: "cabello",
    price: 16,
    short: "Suaviza, hidrata y disciplina.",
    description:
      "Jojoba y argán con aroma amaderado de cedro y vetiver. Domestica la barba y cuida la piel de debajo. Unas gotas bastan.",
    ingredients: "Simmondsia chinensis oil, argania spinosa oil, cedrus atlantica oil.",
    size: "30 ml",
    image: U("1621607512214-68297480165e"),
    rating: 4.8,
    reviews: 52,
  },
];

// Imágenes de producto: ilustraciones de marca generadas en /products/[slug].svg.
// (Para un cliente real, sustituir por fotografía profesional — ver README.)
for (const p of products) {
  p.image = `/products/${p.slug}.svg`;
  p.gallery = undefined;
}

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

export const formatPrice = (n: number, currency = "€") =>
  `${n.toFixed(2).replace(".", ",")} ${currency}`;
