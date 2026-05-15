import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";
import { ProductDetail } from "@/components/ProductDetail";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) {
    return { title: "Producto no encontrado · Rosalie Beauty" };
  }
  return {
    title: `${product.name} · Rosalie Beauty`,
    description: product.subtitle,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}
