# Ardeo Product Catalogue — Conventions

## Product ID Scheme

Each product gets a unique **slug** and an **internal code**.

| Field | Format | Example |
|---|---|---|
| **Slug (URL key)** | `ardeo-{model-name-lowercase}` | `ardeo-caelus` |
| **Internal code** | `ARD-{CATEGORY}-{MODEL}` | `ARD-PEN-CAELUS` |
| **Public code** | Per marketing / SKU master | `CAELUS-P90-BLK` |

### Category codes

| Code | Category |
|---|---|
| PEN | Pendant / Suspension |
| WAL | Wall light |
| DNL | Downlight / Recessed |
| TRK | Track light |
| DEC | Decorative |
| OUT | Outdoor |
| TBL | Table lamp |
| FLR | Floor lamp |

### File names

Files are named as: `{slug}_{asset-type}_{descriptor}_{version}.{ext}`

Examples:
- `ardeo-caelus_render_hero_01.png`
- `ardeo-caelus_technical-drawing_dimensions_01.pdf`
- `ardeo-caelus_photo_installation_01.jpg`

---

## Asset Folder Structure

```
assets/
  {product-slug}/
    renders/              # Product renders, lifestyle renders
    technical/            # Technical drawings, CAD, IES files, beam angle diagrams
    photos/               # White-background shots, detail closeups, installation
    marketing/            # Catalogue pages, social content, presentations
    manuals/              # Installation manuals, wiring diagrams
```

---

## Asset Type Taxonomy

| Type | Description |
|---|---|
| `render` | Product render, lifestyle render, detail render |
| `technical-drawing` | Dimension sheet, line drawing, wiring diagram |
| `cad` | 3D model (.step, .stp, .dwg) |
| `photometric` | IES / LDT file |
| `photo` | Product shot, installation image, closeup |
| `manual` | Installation manual, specification sheet |
| `video` | Product animation, installation video |
| `marketing` | Catalogue PDF, social post, presentation |

---

## Product Page Sections (in order)

1. **Product identity** — name, family, category, description, codes, status
2. **SKUs & variants** — all SKUs with finish, size, wattage, CCT, CRI, beam angle, etc.
3. **Media assets** — renders, photos, videos, 3D files with links
4. **Technical resources** — drawings, CAD, IES, manuals, beam diagrams
5. **Design explanation** — design story, inspiration, materials, differentiators
6. **Usage & references** — projects, social posts, catalogue mentions
7. **Notes & internal comments** — missing assets, improvements, questions

---

## Status Values

- `active` — Currently in production / available
- `upcoming` — Launching soon
- `discontinued` — No longer produced (archive)
- `prototype` — In development / not yet launched
