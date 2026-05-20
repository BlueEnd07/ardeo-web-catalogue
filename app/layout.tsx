import type { Metadata } from "next";
import { Package } from "lucide-react";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardeo Product Catalogue",
  description: "Internal product resource hub for Ardeo lights",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
            <Package className="h-5 w-5 text-gray-600" />
            <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
              Ardeo Product Catalogue
            </Link>
            <span className="ml-auto text-xs text-gray-400">Internal</span>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
