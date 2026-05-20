# Ardeo Product Catalogue

Internal product resource hub for Ardeo lights — a searchable, structured catalogue connecting product data, SKUs, renders, drawings, technical specs, and usage references.

## Structure

```
├── CONVENTIONS.md           # Naming conventions, ID scheme, asset taxonomy
├── templates/
│   └── product-template.md  # Reusable product page template
├── products/                # Product pages (Markdown)
│   ├── ardeo-caelus.md      # Sample: pendant light
│   ├── ardeo-nympha.md      # Sample: wall light
│   └── ardeo-orbis.md       # Sample: recessed downlight
└── assets/                  # Organized asset folders per product
    └── {product}/
        ├── renders/
        ├── technical/
        ├── photos/
        ├── marketing/
        └── manuals/
```

## Status

MVP / internal — 3 sample product pages created to validate schema and page structure.
