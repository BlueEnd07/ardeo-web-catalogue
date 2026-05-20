import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-sm text-gray-500">Product not found</p>
      <Link href="/" className="mt-2 text-xs text-gray-400 underline hover:text-gray-700">
        Back to all products
      </Link>
    </div>
  );
}
