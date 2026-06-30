"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12">

      <main className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <Link href={`/products/${product.id}`}>
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
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full rounded-lg bg-zinc-900 px-4 py-2 text-white transition hover:bg-zinc-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}