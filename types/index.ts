export type ProductStatus = "active" | "upcoming" | "discontinued" | "prototype";

export interface ProductFrontmatter {
  slug: string;
  "internal-code": string;
  status: ProductStatus;
}

export interface Product {
  slug: string;
  internalCode: string;
  status: ProductStatus;
  name: string;
  description: string;
  family: string;
  category: string;
  tags: string[];
  content: string;
}

export type CategoryFilter =
  | "Pendant"
  | "Wall light"
  | "Downlight"
  | "Track light"
  | "Decorative"
  | "Outdoor"
  | "Table lamp"
  | "Floor lamp"
  | "All";
