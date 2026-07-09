import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";
import { ImageCarousel } from "@/components/ImageCarousel";

const fachadaPrincipal = { url: "/assets/fachada-principal.jpg" };
const fachadaFrente = { url: "/assets/fachada-frente.jpg" };
const fachadaLateral = { url: "/assets/fachada-lateral.jpg" };
const fundosDia = { url: "/assets/fundos-dia.jpg" };
const living = { url: "/assets/living.jpg" };
const piscinaNoite = { url: "/assets/piscina-noite.jpg" };

const int0070 = { url: "/assets/interior-0070.jpg" };
const int0074 = { url: "/assets/interior-0074.jpg" };
const int0075 = { url: "/assets/interior-0075.jpg" };
const int0078 = { url: "/assets/interior-0078.jpg" };
const int0079 = { url: "/assets/interior-0079.jpg" };
const int0084 = { url: "/assets/interior-0084.jpg" };
const int0085 = { url: "/assets/interior-0085.jpg" };
const int0086 = { url: "/assets/interior-0086.jpg" };
const int0087 = { url: "/assets/interior-0087.jpg" };
const int0089 = { url: "/assets/interior-0089.jpg" };

const extEntardecer = { url: "/assets/ext-entardecer.jpg" };
const extFrontalDia = { url: "/assets/ext-frontal-dia.jpg" };
const extFrontalNoite = { url: "/assets/ext-frontal-noite.jpg" };
const extFundosNoite = { url: "/assets/ext-fundos-noite.jpg" };
// const extGaragemDia = { url: "/assets/ext-garagem-dia.jpg" };
const extLateralJardim = { url: "/assets/ext-lateral-jardim.jpg" };
// const extLateralMadeira = { url: "/assets/ext-lateral-madeira.jpg" };
const extVolumetriaChamine = { url: "/assets/ext-volumetria-chamine.jpg" };

const areaPiscinaDeck = { url: "/assets/area-piscina-deck.jpg" };
const areaPiscinaGourmet = { url: "/assets/area-piscina-gourmet.jpg" };

const plantaTerreo = { url: "/assets/planta-terreo-v4.jpg" };
const livingSocialTv = { url: "/assets/living-social-tv.jpg" };
const plantaSuperior = { url: "/assets/planta-superior-v2.jpg" };
const porDoSolTerreno = { url: "/assets/por-do-sol-terreno.jpg" };

const plantas = [
  { src: plantaTerreo.url, label: "Pavimento Térreo", caption: "Living, cozinha gourmet, área de piscina e garagem" },
  { src: plantaSuperior.url, label: "Pavimento Superior", caption: "Quatro suítes amplas com varandas e closets" },
];

export const Route = createFileRoute("/lausanne")({
  head: () => ({
    meta: [
      { title: "Casa Lausanne — Condomínio Serra Azul" },
      { name: "description", content: "Residência contemporânea de alto padrão no Condomínio Serra Azul. 290,98 m² construídos, 4 suítes, piscina, automação e piso aquecido." },
      { property: "og:title", content: "Casa Lausanne — Condomínio Serra Azul" },
      { property: "og:description", content: "Residência contemporânea de alto padrão. 290,98 m² construídos, 4 suítes, piscina, automação." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: fachadaPrincipal.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: fachadaPrincipal.url },
    ],
    links: [{ rel: "canonical", href: "/lausanne" }],
  }),
  component: Index,
});

const gallery = [
  { src: fachadaPrincipal.url, label: "Fachada Principal", caption: "Volumetria contemporânea com brises de madeira e vidros de chão ao teto" },
  { src: fundosDia.url, label: "Fachada Posterior", caption: "Integração com o jardim e área de piscina" },
  { src: living.url, label: "Living Pé-direito Duplo", caption: "Ampla lareira e pé-direito duplo" },
  { src: fachadaFrente.url, label: "Acesso Principal", caption: "Pórtico em concreto e madeira" },
  { src: piscinaNoite.url, label: "Piscina — Anoitecer", caption: "Iluminação cênica e revestimento em pastilhas" },
  { src: fachadaLateral.url, label: "Volumetria", caption: "Geometria contemporânea" },
  // Interiores adicionais
  { src: int0079.url, label: "Sala de Jantar", caption: "" }, // Mesa em madeira maciça com vista para a piscina
  { src: int0089.url, label: "Jantar — Anoitecer", caption: "" }, // Pendente escultural e parede em mármore
  { src: int0084.url, label: "Cozinha Gourmet", caption: "" }, // Ilha em mármore com bancada estendida para refeições
  { src: int0078.url, label: "Cozinha — Detalhe", caption: "" }, // Marcenaria em carvalho e eletrodomésticos premium
  { src: int0074.url, label: "Bancada de Refeições", caption: "" }, // Iluminação cênica e marcenaria ripada
  { src: int0086.url, label: "Cozinha Integrada", caption: "Vista para piscina e área externa" },
  // Exteriores adicionais
  { src: extFrontalNoite.url, label: "Fachada Frontal — Noite", caption: "Iluminação cênica integrada à arquitetura" },
  { src: extFundosNoite.url, label: "Fundos — Anoitecer", caption: "Pedra natural, piscina iluminada e jardim tropical" },
  // { src: extGaragemDia.url, label: "Acesso e Garagem", caption: "Pé-direito generoso e marcenaria em madeira no teto" },
  { src: extLateralJardim.url, label: "Lateral — Jardim", caption: "Volumes em concreto sobre o gramado e mata nativa" },
  // { src: extLateralMadeira.url, label: "Lateral — Painel em Madeira", caption: "Brises ripados e jardineiras suspensas" },
  { src: extVolumetriaChamine.url, label: "Volumetria — Chaminé", caption: "Geometria contemporânea com janelas em fita" },
];

const interiores = [
  { src: livingSocialTv.url, label: "Living Social", caption: "" },
  { src: int0087.url, label: "Estar Íntimo", caption: "" },
  { src: int0075.url, label: "Hall e Circulação", caption: "" },
  { src: int0070.url, label: "Área da Piscina", caption: "" },
];

const exteriores = [
  { src: extEntardecer.url, label: "Volumetria — Entardecer", caption: "" },
  { src: extFrontalDia.url, label: "Fachada Frontal — Dia", caption: "" },
  { src: areaPiscinaDeck.url, label: "Piscina — Deck", caption: "" },
  { src: areaPiscinaGourmet.url, label: "Gourmet & Piscina", caption: "" },
];

const fichaTecnica: { label: string; value: string; unit: string; composicao?: { area: string; item: string }[] }[] = [
  {
    label: "Área Equivalente",
    value: "328,18",
    unit: "m²",
    composicao: [
      { area: "290,98 m²", item: "casa" },
      { area: "14,10 m²", item: "deck" },
      { area: "23,10 m²", item: "piscina" },
    ],
  },
  { label: "Área Construída", value: "290,98", unit: "m²" },
  { label: "Área do Terreno", value: "597,60", unit: "m²" },
  { label: "Suítes", 
    value: "04", 
    unit: "",
    composicao: [
      { area: "", item: "3 suítes no pavimento superior" },
      { area: "", item: "1 suíte/escritório no pavimento térreo" }
    ],
   },
  { label: "Vagas", value: "02", unit: "" },
];

const diferenciais = [
  { titulo: "Piso Aquecido", desc: "Aquecimento distribuído sob o piso dos ambientes íntimos e sociais — calor uniforme, sem correntes de ar, sem radiadores aparentes. Mais conforto térmico no inverno, eficiência energética e a sensação de pisar descalço em qualquer estação." },
  { titulo: "Automação Integrada", desc: "Ecossistema completo de iluminação, climatização, cortinas, fechaduras, sensores e monitoramento de energia, com cenas programadas (Cinema, Leitura, Boa-noite) e comando por aplicativo ou voz via Alexa, Google Assistente e Apple Casa (Siri). Gateways Zigbee com suporte a Matter garantem integração estável entre todos os dispositivos." },
  { titulo: "Duto de Roupas Sujas", desc: "Sistema integrado que conduz as roupas do segundo pavimento diretamente para a lavanderia no térreo, eliminando o transporte manual pelas escadas." },
  { titulo: "Piscina com Deck", desc: "Piscina revestida em pastilhas com iluminação cênica, deck em madeira e piso atérmico ao redor — confortável aos pés mesmo sob o sol. Área de lazer integrada ao living e tratamento da água por clorador iGUi: água sempre cristalina, menor uso de produtos químicos e manutenção simplificada." },
  { titulo: "Pé-direito Duplo", desc: "Living social com vidros de chão ao teto e lareira revestida em mármore — luz natural e proporção generosa." },
  { titulo: "Aberturas em PVC", desc: "Esquadrias em PVC na cor preta com telas em todos os ambientes — desempenho térmico e acústico superior, baixa manutenção e proteção contra insetos. Nas suítes e no escritório, as aberturas são automatizadas, com acionamento integrado ao sistema da casa." },
  { titulo: "Porcelanato Classe A", desc: "Revestimento em porcelanato classe A no formato 1,20 × 1,20 m — peças de grande formato que ampliam visualmente os ambientes, com menos juntas, acabamento contínuo e alta resistência." },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Parallax do hero
  const [heroY, setHeroY] = useState(0);
  useEffect(() => {
    const onScroll = () => setHeroY(window.scrollY * 0.35);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    if (!lightbox) return;
    setZoom(1);
    setOrigin({ x: 50, y: 50 });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.5, 5));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.5, 1));
      if (e.key === "0") { setZoom(1); setOrigin({ x: 50, y: 50 }); }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled ? "bg-background/85 backdrop-blur-md py-4 border-b border-border/60" : "py-8"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
          <a href="#topo" className="font-display text-xl tracking-tight">Casa Lausanne</a>
          <nav className="hidden gap-10 md:flex">
            {[
              ["O Imóvel", "imovel"],
              ["O Terreno", "terreno"],
              ["Exteriores", "exteriores"],
              ["Interiores", "interiores"],
              ["Galeria", "galeria"],
              ["Plantas", "plantas"],
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
      <section id="topo" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-foreground">
        <img
          src={fachadaPrincipal.url}
          alt="Casa Lausanne — fachada principal"
          className="absolute inset-0 h-[120%] w-full object-cover will-change-transform"
          style={{ transform: `translate3d(0, ${heroY}px, 0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/10 to-foreground/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-6 pb-16 md:px-12 md:pb-24">
          <p className="kicker reveal mb-6 text-sm text-background tracking-[0.22em] font-medium" style={{ color: "var(--background)" }}>
            <span className="inline-block h-px w-10 align-middle mr-3" style={{ background: "var(--gold)" }} />
            Condomínio Serra Azul · Serra Catarinense
          </p>
          <h1 className="font-display reveal text-[clamp(3.5rem,10vw,10rem)] leading-[0.9] text-background">
            Casa<br />
            <em className="italic font-normal" style={{ color: "var(--gold)" }}>Lausanne</em>
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 reveal">
            <p className="max-w-md text-base font-light text-background/85 md:text-lg">
              Arquitetura contemporânea, materiais nobres e uma relação contínua com a paisagem da serra.
            </p>
            <a href="#imovel" className="kicker text-background/85 transition hover:text-background">
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
              Inspirada em <em className="italic">Lausanne</em>, na Suíça — uma das cidades mais encantadoras às margens do Lago Léman.
            </h2>
            <div className="mt-10 max-w-2xl space-y-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Da elegância e do estilo de vida suíços nasce a Casa Lausanne, na Rua Alpes Suíços: um projeto que
                traduz sofisticação, conforto e uma relação única com a paisagem e o pôr do sol. Cada detalhe valoriza
                o olhar, a luz e o bem viver.
              </p>
              <p>
                Os espaços foram pensados para proporcionar amplitude, integração e uma conexão privilegiada com o
                entorno. A Suíte Master, com 39,78 m² de área total e acesso ao terraço jardim privativo, traduz esse
                conceito — um refúgio onde o dia começa e termina com cenários únicos.
              </p>
              <p>
                Mais que uma residência, um convite para viver com exclusividade, contemplação e qualidade de vida.
                São 328,18 m² de área equivalente, distribuídos em dois pavimentos, com pé-direito duplo no living, três suítes amplas do pavimento superior, uma suíte/escritório no pavimento inferior e integração total entre os ambientes sociais e a área externa com piscina.
              </p>
            </div>


            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {fichaTecnica.map((item) => (
                <div key={item.label} className="border-t border-foreground pt-4">
                  <p className="kicker text-muted-foreground">{item.label}</p>
                  <p className="mt-3 font-display text-4xl md:text-5xl">
                    {item.value}
                    <span className="ml-1 text-xl text-muted-foreground">{item.unit}</span>
                  </p>
                  {item.composicao && (
                    <div className="mt-4 text-xs font-light leading-relaxed text-muted-foreground">
                      <p className="mb-1 opacity-70">(composição)</p>
                      <ul className="space-y-1">
                        {item.composicao.map((c) => (
                          <li key={c.item} className="flex items-baseline justify-between gap-3 border-b border-border/40 pb-1">
                            <span className="italic">{c.item}</span>
                            <span className="font-display tracking-tight text-foreground/80">{c.area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* O Terreno */}
      <section id="terreno" className="border-b border-border bg-secondary/40">
        <div className="relative">
          <img
            src={porDoSolTerreno.url}
            alt="Pôr do sol visto do terreno da Casa Lausanne"
            className="h-[60vh] min-h-[420px] w-full object-cover md:h-[85vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
          <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-6 pb-12 md:px-12 md:pb-20">
            <p className="kicker text-white/85">02 — O Terreno</p>
            <h2 className="mt-6 max-w-4xl font-display text-3xl leading-[1.05] text-white md:text-6xl">
              O privilégio de um <em className="italic">pôr do sol</em> que nunca será interrompido.
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
          <div className="md:col-span-5">
            <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              Implantado em ponto privilegiado do Condomínio Serra Azul, o terreno garante vista aberta para
              o horizonte e um pôr do sol contemplado todos os dias — sem construções que possam interromper
              a paisagem no futuro.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3">
              {[
                { label: "Testada", value: "14,94", unit: "m" },
                { label: "Profundidade", value: "40,00", unit: "m" },
                { label: "Área Total", value: "597,60", unit: "m²" },
              ].map((item) => (
                <div key={item.label} className="border-t border-foreground pt-4">
                  <p className="kicker text-muted-foreground">{item.label}</p>
                  <p className="mt-3 font-display text-3xl md:text-5xl">
                    {item.value}
                    <span className="ml-1 text-xl text-muted-foreground">{item.unit}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Exteriores */}
      <section id="exteriores" className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="kicker text-muted-foreground">03 — Exteriores</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">
                <em className="italic">Arquitetura</em>
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">{exteriores.length} imagens</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {exteriores.map((img) => (
              <figure key={img.src} className="group">
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="kicker text-muted-foreground">{img.label}</span>
                  <span className="text-right text-sm font-light italic text-muted-foreground">{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Interiores */}
      <section id="interiores" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="kicker text-muted-foreground">04 — Interiores</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">
                <em className="italic">Ambientes</em>
              </h2>
            </div>
            <p className="hidden text-sm text-muted-foreground md:block">{interiores.length} imagens</p>
          </div>
          <p className="mb-12 max-w-3xl text-sm font-light italic leading-relaxed text-muted-foreground md:text-base">
            As imagens internas são ilustrativas e têm o objetivo de demonstrar possibilidades de ambientação.
            Mobiliário, decoração e demais elementos são meramente sugestivos e não integram o imóvel.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {interiores.map((img) => (
              <figure key={img.src} className="group">
                <div className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-1000 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="kicker text-muted-foreground">{img.label}</span>
                  <span className="text-right text-sm font-light italic text-muted-foreground">{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="border-b border-border">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-20 flex items-end justify-between gap-8">
            <div>
              <p className="kicker text-muted-foreground">05 — Galeria</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">Os ambientes</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Imagens da apresentação em alta fidelidade — projeto Paulo Lopes Arquiteto.
            </p>
          </div>

          <ImageCarousel images={gallery} />
        </div>
      </section>

      {/* Plantas */}
      <section id="plantas" className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <p className="kicker text-muted-foreground">06 — Plantas</p>
              <h2 className="mt-6 font-display text-4xl md:text-6xl">Plantas baixas</h2>
            </div>
            <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
              Clique em cada planta para ampliar em tela cheia.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
            {plantas.map((p) => (
              <figure key={p.src} className="group">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: p.src, label: p.label })}
                  className="block w-full cursor-zoom-in overflow-hidden"
                  aria-label={`Ampliar ${p.label}`}
                >
                  <img
                    src={p.src}
                    alt={p.label}
                    loading="lazy"
                    className="w-full h-auto object-contain transition duration-700 group-hover:scale-[1.02]"
                  />
                </button>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                  <span className="kicker text-muted-foreground">{p.label}</span>
                  <span className="text-right text-sm font-light italic text-muted-foreground">{p.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="border-b border-border">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-40">
          <div className="md:col-span-4">
            <p className="kicker text-muted-foreground">07 — Diferenciais</p>
            <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
              O que faz a Lausanne <em className="italic">única</em>.
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
            <p className="kicker text-muted-foreground">08 — Localização</p>
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
                ["Lazer", "Piscina, academia, quadras e salões de festa"],
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
              <img src={fachadaLateral.url} alt="Vista lateral da Casa Lausanne no condomínio" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
          <p className="kicker text-background/60">Contato</p>
          <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] md:text-8xl">
            Conheça a Casa <em className="italic">Lausanne</em> pessoalmente.
          </h2>
          <p className="mt-10 max-w-2xl text-base font-light text-background/70 md:text-lg">
            Agende uma visita guiada com a imobiliária de sua confiança e conheça pessoalmente
            cada detalhe da Casa Lausanne.
          </p>
        </div>

        <div className="border-t border-background/20">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-8 text-xs text-background/50 md:flex-row md:items-center md:justify-between md:px-12">
            <p>© {new Date().getFullYear()} Casa Lausanne · Condomínio Serra Azul</p>
            <p className="kicker">Projeto · Paulo Lopes Arquiteto</p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.label}
        >
          <div className="flex items-center justify-between gap-4 px-6 py-5 md:px-10">
            <span className="kicker text-white/80">{lightbox.label}</span>
            <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(z - 0.5, 1))}
                className="kicker text-white/80 transition hover:text-white"
                aria-label="Diminuir zoom"
              >− Zoom</button>
              <span className="kicker text-white/60 tabular-nums">{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(z + 0.5, 5))}
                className="kicker text-white/80 transition hover:text-white"
                aria-label="Aumentar zoom"
              >+ Zoom</button>
              <button
                type="button"
                onClick={() => { setZoom(1); setOrigin({ x: 50, y: 50 }); }}
                className="kicker text-white/60 transition hover:text-white"
                aria-label="Resetar zoom"
              >Reset</button>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="kicker border-b border-white/60 pb-0.5 text-white/90 transition hover:text-white"
                aria-label="Fechar"
              >Fechar ✕</button>
            </div>
          </div>
          <div
            className="flex flex-1 items-center justify-center overflow-hidden p-4 md:p-10"
            style={{ touchAction: zoom > 1 ? "none" : "auto" }}
            onMouseMove={(e) => {
              if (zoom <= 1) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              setOrigin({ x, y });
            }}
            onTouchMove={(e) => {
              if (zoom <= 1) return;
              const t = e.touches[0];
              if (!t) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((t.clientX - rect.left) / rect.width) * 100;
              const y = ((t.clientY - rect.top) / rect.height) * 100;
              setOrigin({
                x: Math.max(0, Math.min(100, x)),
                y: Math.max(0, Math.min(100, y)),
              });
            }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              onClick={(e) => {
                e.stopPropagation();
                setZoom((z) => (z >= 3 ? 1 : z + 1));
              }}
              style={{ transform: `scale(${zoom})`, transformOrigin: `${origin.x}% ${origin.y}%` }}
              className={`max-h-full max-w-full bg-white object-contain transition-transform duration-200 ${zoom > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`}
            />
          </div>
        </div>
      )}
    </main>
  );
}
