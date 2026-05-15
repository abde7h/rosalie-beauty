import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "exfoliante-corporal",
    name: "Exfoliante Corporal",
    subtitle: "Con extracto botánico de café y azúcar de caña",
    price: 38.0,
    category: "Cuerpo",
    badge: "Bestseller",
    description:
      "Una fórmula exfoliante de doble acción que elimina células muertas y nutre la piel en profundidad. Con café verde orgánico, azúcar de caña y aceite de argán, revela una piel suave, luminosa y renovada desde la primera aplicación.",
    ingredients: "Café Verde · Azúcar de Caña · Aceite de Argán",
    size: "200ml",
    bgColor: "#E8DDD4",
    image: "/products/exfoliante-corporal.png",
    usage:
      "Aplica sobre piel húmeda con movimientos circulares. Enjuaga con agua tibia. Usar 2-3 veces por semana.",
    benefits: [
      "Elimina células muertas",
      "Activa la circulación",
      "Nutre en profundidad",
    ],
    inStock: true,
  },
  {
    id: "crema-hidratante-corporal",
    name: "Crema Hidratante Corporal",
    subtitle: "Hidratación 24h con ácido hialurónico y manteca de karité",
    price: 44.0,
    category: "Cuerpo",
    badge: "New",
    description:
      "Una crema de textura sedosa que proporciona hidratación intensiva durante 24 horas. Su fórmula enriquecida con ácido hialurónico vegetal, manteca de karité y extracto de aloe vera restaura la barrera cutánea y aporta una suavidad duradera.",
    ingredients: "Ácido Hialurónico · Manteca de Karité · Aloe Vera",
    size: "150ml",
    bgColor: "#D4DDE8",
    image: "/products/crema-hidratante-corporal.png",
    usage:
      "Aplica sobre piel limpia y seca con suaves masajes hasta absorción completa. Mañana y noche.",
    benefits: [
      "Hidratación 24h",
      "Refuerza la barrera cutánea",
      "Textura no grasa",
    ],
    inStock: true,
  },
  {
    id: "aceite-corporal",
    name: "Aceite Corporal",
    subtitle: "Nutrición profunda con aceite de rosa mosqueta y jojoba",
    price: 52.0,
    category: "Cuerpo",
    badge: null,
    description:
      "Un aceite corporal de lujo formulado con los aceites vegetales más nobles. La combinación de rosa mosqueta, jojoba y vitamina E proporciona una nutrición profunda, mejora la elasticidad y aporta un luminoso efecto satin a la piel.",
    ingredients: "Rosa Mosqueta · Jojoba · Vitamina E",
    size: "100ml",
    bgColor: "#E8E4D4",
    image: "/products/aceite-corporal.png",
    usage:
      "Aplica sobre piel húmeda tras la ducha para maximizar la absorción. Perfecto para masajes.",
    benefits: [
      "Mejora elasticidad",
      "Efecto satin luminoso",
      "100% aceites naturales",
    ],
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function formatPrice(amount: number): string {
  return `€${amount.toFixed(2).replace(".", ",")}`;
}
