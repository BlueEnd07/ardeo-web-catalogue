"use client";

import type { CategoryFilter, ProductStatus } from "@/types";

const statuses: (ProductStatus | "All")[] = ["All", "active", "upcoming", "discontinued", "prototype"];

export default function ProductFilters({
  categories,
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
}: {
  categories: string[];
  selectedCategory: string;
  selectedStatus: string;
  onCategoryChange: (cat: string) => void;
  onStatusChange: (status: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
      >
        <option value="All">All categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-gray-500 focus:outline-none"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s === "All" ? "All statuses" : s.charAt(0).toUpperCase() + s.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
