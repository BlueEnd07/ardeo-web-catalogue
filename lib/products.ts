import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Product, ProductFrontmatter } from "@/types";

const productsDir = path.join(process.cwd(), "products");

function extractNameAndDescription(markdown: string): { name: string; description: string } {
  const lines = markdown.split("\n");
  let name = "";
  let description = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("# ") && !name) {
      name = line.replace("# ", "").trim();
    }
    if (line.startsWith("> ") && !description) {
      description = line.replace("> ", "").trim();
    }
    if (name && description) break;
  }

  return { name, description };
}

function parseTableValue(content: string, label: string): string {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`\\|\\s*\\*\\*${escaped}\\*\\*\\s*\\|\\s*(.+?)\\s*\\|`);
  const match = content.match(regex);
  return match ? match[1].trim() : "";
}

export function getAllProducts(): Product[] {
  if (!fs.existsSync(productsDir)) return [];

  const files = fs.readdirSync(productsDir).filter((f) => f.endsWith(".md"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(productsDir, file), "utf-8");
      const { data, content } = matter(raw);
      const fm = data as unknown as ProductFrontmatter;
      const { name, description } = extractNameAndDescription(content);

      const family = parseTableValue(content, "Family / Collection") || "Uncategorized";
      const category = parseTableValue(content, "Category") || "Other";
      const tagsStr = parseTableValue(content, "Tags");
      const tags = tagsStr
        ? tagsStr.split(",").map((t) => t.trim().toLowerCase())
        : [];

      return {
        slug: fm.slug,
        internalCode: fm["internal-code"],
        status: fm.status,
        name,
        description,
        family,
        category,
        tags,
        content,
      };
    })
    .filter((p) => p.name);
}

export function getProductBySlug(slug: string): Product | null {
  return getAllProducts().find((p) => p.slug === slug) ?? null;
}

export function getAllCategories(): string[] {
  const products = getAllProducts();
  const cats = new Set(products.map((p) => p.category));
  return Array.from(cats).sort();
}
