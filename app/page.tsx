import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-zinc-900">My Shop</h1>
        <p className="mt-2 text-zinc-600">Simple things, well made.</p>
      </header>

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-40 w-full overflow-hidden rounded-lg bg-zinc-100">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mt-4 text-lg font-semibold text-zinc-900">
              {product.name}
            </h2>
            <p className="mt-1 text-zinc-600">£{product.price.toFixed(2)}</p>
            <button className="mt-4 w-full rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700">
              Add to Cart
            </button>
          </Link>
        ))}
      </main>
    </div>
  );
}