"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-2xl font-bold text-zinc-900">Your cart is empty</h1>
        <Link
          href="/"
          className="mt-4 rounded-lg bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12">
      <main className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-zinc-900">Your Cart</h1>

        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <h2 className="font-semibold text-zinc-900">
                  {item.product.name}
                </h2>
                <p className="text-zinc-600">
                  £{item.product.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="h-8 w-8 rounded border border-zinc-300 hover:bg-zinc-50"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="h-8 w-8 rounded border border-zinc-300 hover:bg-zinc-50"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-sm text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between border-t pt-6">
          <span className="text-xl font-semibold text-zinc-900">
            Total: £{totalPrice.toFixed(2)}
          </span>
          <button className="rounded-lg bg-zinc-900 px-6 py-3 text-white hover:bg-zinc-700">
            Checkout
          </button>
        </div>
      </main>
    </div>
  );
}