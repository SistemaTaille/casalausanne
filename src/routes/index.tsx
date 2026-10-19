import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Lausanne — Residência no Serra Azul" },
      { name: "description", content: "Conheça a Casa Lausanne, suas imagens e plantas no Condomínio Serra Azul." },
      { property: "og:title", content: "Casa Lausanne — Residência no Serra Azul" },
      { property: "og:description", content: "Conheça a Casa Lausanne, suas imagens e plantas no Condomínio Serra Azul." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/lausanne" });
  },
});
