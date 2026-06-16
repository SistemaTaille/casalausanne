import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import fachadaPrincipal from "@/assets/fachada-principal.jpg.asset.json";
import fachadaFrente from "@/assets/fachada-frente.jpg.asset.json";
import fachadaLateral from "@/assets/fachada-lateral.jpg.asset.json";
import fundosDia from "@/assets/fundos-dia.jpg.asset.json";
import living from "@/assets/living.jpg.asset.json";
import piscinaNoite from "@/assets/piscina-noite.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Laussane — Condomínio Serra Azul" },
      { name: "description", content: "Residência contemporânea de alto padrão no Condomínio Serra Azul. 292 m² construídos, 3 suítes, piscina, automação e piso aquecido." },
      { property: "og:title", content: "Casa Laussane — Condomínio Serra Azul" },
      { property: "og:description", content: "Residência contemporânea de alto padrão. 292 m² construídos, 3 suítes, piscina, automação." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: fachadaPrincipal.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: fachadaPrincipal.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const gallery = [
  { src: fachadaPrincipal.url, label: "Fachada Principal", caption: "Volumetria contemporânea com brises de madeira e vidros de chão ao teto" },
  { src: fundosDia.url, label: "Fachada Posterior", caption: "Integração com o jardim e área de piscina" },
  { src: living.url, label: "Living Pé-direito Duplo", caption: "Lareira em mármore e vidros de chão ao teto" },
  { src: fachadaFrente.url, label: "Acesso Principal", caption: "Pórtico em concreto e madeira" },
  { src: piscinaNoite.url, label: "Piscina — Anoitecer", caption: "Iluminação cênica e revestimento em pastilhas" },
  { src: fachadaLateral.url, label: "Volumetria", caption: "Geometria contemporânea com brises de madeira" },
];

const fichaTecnica = [
  { label: "Área Construída", value: "292", unit: "m²" },
  { label: "Área do Terreno", value: "600", unit: "m²" },
  { label: "Suítes", value: "03", unit: "" },
  { label: "Vagas", value: "02", unit: "" },
];

const diferenciais = [
  { titulo: "Piso Aquecido", desc: "Sistema de aquecimento hidrônico distribuído nos ambientes íntimos e sociais, garantindo conforto térmico em todas as estações." },
  { titulo: "Automação Integrada", desc: "Iluminação, climatização, áudio e segurança comandados por um único sistema, com cenários programados e controle remoto." },
  { titulo: "Piscina com Deck", desc: "Piscina revestida em pastilhas com iluminação cênica, deck em madeira e área de lazer integrada ao living." },
  { titulo: "Pé-direito Duplo", desc: "Living social com vidros de chão ao teto e lareira revestida em mármore — luz natural e proporção generosa." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md py-4 border-b border-border/60" : "py-8"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
          <a href="#topo" className="font-display text-xl tracking-tight">Casa Laussane</a>
          <nav className="hidden gap-10 md:flex">
            {[
              ["O Imóvel", "imovel"],
              ["Galeria", "galeria"],
              ["Diferenciais", "diferenciais"],
              ["Localização", "localizacao"],
              ["Contato", "contato"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="kicker text-foreground/70 transition hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <a href="#contato" className="kicker hidden border-b border-foreground pb-1 md:inline-block">
            Agendar Visita
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img src={fachadaPrincipal.url} alt="Casa Laussane — fachada principal" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <p className="kicker mb-6 text-white/85">Condomínio Serra Azul · Residência 01</p>
          <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.95] text-white">
            Casa<br />
            <em className="not-italic font-normal italic">Laussane</em>
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-md text-base font-light text-white/90 md:text-lg">
              Arquitetura contemporânea, materiais nobres e uma relação contínua com a paisagem da serra.
            </p>
            <a href="#imovel" className="kicker text-white/85 transition hover:text-white">
              Descer ↓
            </a>
          </div>
        </div>
      </section>

      {/* O Imóvel */}
      <section id="imovel" className="border-b border-border">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
          <div className="md:col-span-4">
            <p className="kicker text-muted-foreground">01 — O Imóvel</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight md:text-6xl">
              Uma residência pensada para quem busca <em className="italic">privacidade, conforto e desenho</em> em cada detalhe.
            </h2>
            <p className="mt-10 max-w-2xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              A Casa Laussane se ergue em meio à mata nativa do Condomínio Serra Azul. São 292 m² de construção
              distribuídos em dois pavimentos, com pé-direito duplo no living, três suítes amplas e integração
              total entre os ambientes sociais e a área externa com piscina.
            </p>

            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {fichaTecnica.map((item) => (
                <div key={item.label} className="border-t border-foreground pt-4">
                  <p className="kicker text-muted-foreground">{item.label}</p>
                  <p className="mt-3 font-display text-4xl md:text-5xl">
                    {item.value}
                    <span className="ml-1 text-xl text-muted-foreground">{item.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-20 flex items-end justify-between gap-8">
            <div>
              <p className="kicker text-muted-foreground">02 — Galeria</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">Os ambientes</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Imagens da apresentação em alta fidelidade — projeto Paulo Lopes Arquiteto.
            </p>
          </div>

          {/* Editorial grid */}
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <figure className="col-span-12 md:col-span-8">
              <div className="overflow-hidden">
                <img src={gallery[0].src} alt={gallery[0].label} className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="kicker text-muted-foreground">{gallery[0].label}</span>
                <span className="text-sm font-light italic text-muted-foreground">{gallery[0].caption}</span>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-4 md:pt-24">
              <div className="overflow-hidden">
                <img src={gallery[1].src} alt={gallery[1].label} className="aspect-[3/4] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4">
                <span className="kicker text-muted-foreground">{gallery[1].label}</span>
                <p className="mt-1 text-sm font-light italic text-muted-foreground">{gallery[1].caption}</p>
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-5 md:col-start-2">
              <div className="overflow-hidden">
                <img src={gallery[2].src} alt={gallery[2].label} className="aspect-[4/5] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4">
                <span className="kicker text-muted-foreground">{gallery[2].label}</span>
                <p className="mt-1 text-sm font-light italic text-muted-foreground">{gallery[2].caption}</p>
              </figcaption>
            </figure>
            <figure className="col-span-12 md:col-span-6 md:col-start-7 md:pt-32">
              <div className="overflow-hidden">
                <img src={gallery[3].src} alt={gallery[3].label} className="aspect-[4/3] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4">
                <span className="kicker text-muted-foreground">{gallery[3].label}</span>
                <p className="mt-1 text-sm font-light italic text-muted-foreground">{gallery[3].caption}</p>
              </figcaption>
            </figure>

            <figure className="col-span-12 md:col-span-10 md:col-start-2">
              <div className="overflow-hidden">
                <img src={gallery[4].src} alt={gallery[4].label} className="aspect-[16/9] w-full object-cover transition duration-1000 hover:scale-[1.02]" />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="kicker text-muted-foreground">{gallery[4].label}</span>
                <span className="text-sm font-light italic text-muted-foreground">{gallery[4].caption}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="border-b border-border">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
          <div className="md:col-span-4">
            <p className="kicker text-muted-foreground">03 — Diferenciais</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              O que faz a Laussane <em className="italic">única</em>.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid gap-px bg-border md:grid-cols-2">
              {diferenciais.map((d, i) => (
                <article key={d.titulo} className="bg-background p-8 md:p-10">
                  <span className="kicker text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl md:text-3xl">{d.titulo}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                    {d.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section id="localizacao" className="border-b border-border bg-secondary/40">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
          <div className="md:col-span-5">
            <p className="kicker text-muted-foreground">04 — Localização</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-6xl">
              Condomínio<br /><em className="italic">Serra Azul</em>
            </h2>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground">
              Condomínio fechado de alto padrão, com infraestrutura completa de lazer e segurança 24 horas,
              cercado por área verde preservada e clima ameno o ano inteiro.
            </p>
            <dl className="mt-12 space-y-5">
              {[
                ["Segurança", "Portaria e ronda 24h"],
                ["Lazer", "Clube, quadras e trilhas"],
                ["Entorno", "Reserva de mata nativa"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="kicker text-muted-foreground">{k}</dt>
                  <dd className="font-display text-lg">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="md:col-span-7">
            <div className="overflow-hidden">
              <img src={fachadaLateral.url} alt="Vista lateral da Casa Laussane no condomínio" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <p className="kicker text-background/60">05 — Contato</p>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-8xl">
            Conheça a Casa <em className="italic">Laussane</em> pessoalmente.
          </h2>
          <p className="mt-10 max-w-xl text-base font-light text-background/70 md:text-lg">
            Agende uma visita guiada ou solicite o material completo do imóvel com plantas,
            ficha de acabamentos e condições de venda.
          </p>

          <div className="mt-20 grid gap-12 border-t border-background/20 pt-16 md:grid-cols-3">
            <div>
              <p className="kicker text-background/50">WhatsApp</p>
              <a href="https://wa.me/5551999043287" target="_blank" rel="noopener noreferrer" className="mt-4 block font-display text-2xl transition hover:text-background/70 md:text-3xl">
                (51) 99904-3287
              </a>
            </div>
            <div>
              <p className="kicker text-background/50">E-mail</p>
              <a href="#" className="mt-4 block font-display text-2xl transition hover:text-background/70 md:text-3xl">
                contato@casalaussane.com
              </a>
            </div>
            <div>
              <p className="kicker text-background/50">Valor</p>
              <p className="mt-4 font-display text-2xl md:text-3xl">Sob consulta</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-8 text-xs text-background/50 md:flex-row md:items-center md:justify-between md:px-12">
            <p>© {new Date().getFullYear()} Casa Laussane · Condomínio Serra Azul</p>
            <p className="kicker">Projeto · Paulo Lopes Arquiteto</p>
          </div>
        </div>
      </section>
    </main>
  );
}
