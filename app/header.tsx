"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="flex items-center justify-between border-b bg-white px-6 py-4">
      <Link href="/" className="text-xl font-bold text-zinc-900">
        My Shop
      </Link>
      <Link
        href="/cart"
        className="relative rounded-lg border border-zinc-300 px-4 py-2 text-zinc-900 hover:bg-zinc-50"
      >
        Cart
        {totalItems > 0 && (
          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 text-xs text-white">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}