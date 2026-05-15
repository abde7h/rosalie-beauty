export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  category: string;
  badge: "Bestseller" | "New" | null;
  description: string;
  ingredients: string;
  size: string;
  /** Color de fondo bajo la foto (carga / fallback) */
  bgColor: string;
  /** Ruta pública de la imagen editorial (next/image) */
  image: string;
  usage: string;
  benefits: string[];
  inStock: boolean;
}

export interface CartItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  size: string;
  bgColor: string;
  image: string;
}

export interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  isHydrated: boolean;
}
