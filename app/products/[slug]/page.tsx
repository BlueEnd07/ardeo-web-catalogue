import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getProductBySlug, getAllProducts } from "@/lib/products";
import type { ProductStatus } from "@/types";

const statusBadge: Record<ProductStatus, string> = {
  active: "status-active",
  upcoming: "status-upcoming",
  discontinued: "status-discontinued",
  prototype: "status-prototype",
};

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div>
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-800"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to all products
      </Link>

      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <span className={statusBadge[product.status] ?? "status-active"}>
            {product.status}
          </span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>Code: {product.internalCode}</span>
          <span>Family: {product.family}</span>
          <span>Category: {product.category}</span>
        </div>
      </div>

      <div className="prose prose-sm max-w-none prose-headings:mt-6 prose-headings:font-semibold prose-td:border prose-td:border-gray-300 prose-td:px-3 prose-td:py-2 prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:px-3 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-table:w-full prose-table:border-collapse prose-tr:even:bg-gray-50">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {product.content}
        </ReactMarkdown>
      </div>

      <footer className="mt-10 border-t border-gray-200 pt-4 text-center text-[10px] text-gray-400">
        Ardeo Product Catalogue — Internal
      </footer>
    </div>
  );
}
