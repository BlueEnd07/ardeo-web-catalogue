import type { Product } from "@/types";
import Link from "next/link";

const statusClasses: Record<string, string> = {
  active: "status-active",
  upcoming: "status-upcoming",
  discontinued: "status-discontinued",
  prototype: "status-prototype",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:border-gray-400 hover:shadow-md"
    >
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900">{product.name}</h3>
        <span className={statusClasses[product.status] ?? "status-active"}>
          {product.status}
        </span>
      </div>
      <p className="mb-2 text-xs text-gray-500">{product.category}</p>
      <p className="mb-3 line-clamp-2 text-xs text-gray-600">{product.description}</p>
      <div className="flex flex-wrap gap-1">
        {product.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-500"
          >
            {tag}
          </span>
        ))}
        {product.tags.length > 4 && (
          <span className="text-[10px] text-gray-400">+{product.tags.length - 4}</span>
        )}
      </div>
    </Link>
  );
}
