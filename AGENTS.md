# Project rules

- Import newly updated floor-plan images through Lovable Assets JSON pointers so replacements receive unique URLs and do not reuse cached files.
- Explicitly export route-local values shared by head metadata and split page components so TanStack route splitting can resolve them.
- Keep investment amounts and validity dates in a browser-safe data module with rule tests, so the displayed schedule has a single source of truth.