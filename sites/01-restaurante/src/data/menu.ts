/** La carta. Estructurada por secciones para que el cliente la edite sin tocar diseño. */

export interface Dish {
  name: string;
  description: string;
  price: string;
  tags?: string[]; // p.ej. "Vegano", "Sin gluten", "Picante"
}

export interface MenuSection {
  id: string;
  title: string;
  note?: string;
  dishes: Dish[];
}

export const menu: MenuSection[] = [
  {
    id: "empezar",
    title: "Para empezar",
    note: "Para compartir en el centro de la mesa.",
    dishes: [
      {
        name: "Ostras de la bahía",
        description: "Con granizado de limón y hierbas del huerto.",
        price: "3,50 / ud.",
      },
      {
        name: "Esgarraet de la casa",
        description: "Pimiento asado a la brasa, bacalao y aceite de arbequina.",
        price: "9,50",
        tags: ["Sin gluten"],
      },
      {
        name: "Tomate de temporada",
        description: "Con ventresca, albahaca y sal en escamas.",
        price: "11,00",
        tags: ["Sin gluten"],
      },
      {
        name: "Croquetas de sepia en su tinta",
        description: "Cremosas por dentro, alioli suave.",
        price: "8,50",
      },
    ],
  },
  {
    id: "mar",
    title: "Del mar",
    note: "Según lo que traiga la lonja cada mañana.",
    dishes: [
      {
        name: "Gamba roja de Dénia a la sal",
        description: "Al peso del día. Nada más y nada menos.",
        price: "s/m",
        tags: ["Sin gluten"],
      },
      {
        name: "Pescado del día a la brasa",
        description: "Con verduras de temporada y all i oli de membrillo.",
        price: "22,00",
        tags: ["Sin gluten"],
      },
      {
        name: "Arroz del senyoret",
        description: "Marisco pelado, caldo de roca. Mínimo 2 personas.",
        price: "23,00 / persona",
      },
      {
        name: "Fideuà de calamar y alcachofa",
        description: "Socarrat crujiente, alioli aparte.",
        price: "19,50",
      },
    ],
  },
  {
    id: "huerta",
    title: "De la huerta",
    dishes: [
      {
        name: "Alcachofas a la brasa",
        description: "Con romesco de almendra y flor de sal.",
        price: "12,00",
        tags: ["Vegano", "Sin gluten"],
      },
      {
        name: "Coca de verduras escalivadas",
        description: "Masa madre fermentada 48 h.",
        price: "10,50",
        tags: ["Vegano"],
      },
    ],
  },
  {
    id: "dulce",
    title: "Para terminar",
    dishes: [
      {
        name: "Coca de llanda de naranja",
        description: "Con helado de horchata artesana.",
        price: "6,50",
      },
      {
        name: "Chocolate, aceite y sal",
        description: "Cremoso intenso con pan tostado.",
        price: "7,00",
        tags: ["Sin gluten"],
      },
    ],
  },
];
