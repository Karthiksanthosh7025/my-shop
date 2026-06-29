import Image from "next/image";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12">
      <main className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        <div className="relative h-80 w-full overflow-hidden rounded-xl bg-zinc-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-zinc-900">{product.name}</h1>
          <p className="mt-2 text-2xl text-zinc-700">
            £{product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-zinc-600">{product.description}</p>
          <button className="mt-6 w-full rounded-lg bg-zinc-900 px-4 py-3 text-white transition hover:bg-zinc-700 sm:w-auto sm:px-8">
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}