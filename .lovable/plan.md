# Nova Identidade Visual — Casa Lausanne Premium

Vou reconstruir a identidade visual do site com base em fundo branco, mantendo toda a estrutura, textos e funcionalidades atuais. O objetivo é transmitir **requinte, charme e sofisticação** para clientes premium — referência estética: Architectural Digest, Hermès, hotelaria fine.

## Direção escolhida

**Paleta: Branco & Dourado com Preto Tinta**
- Fundo principal: `#ffffff` (branco puro)
- Fundo secundário/seções: `#faf8f5` (off-white quente, cremoso)
- Bordas/divisores: `#e8e4dd` (bege muito claro)
- Texto principal: `#0d0d0d` (preto tinta profundo)
- Texto secundário: `#5a5a5a` (grafite suave)
- Acento primário: `#c9a84c` (dourado sóbrio, tipo folha de ouro fosca)
- Acento hover/glow: `#b8933d` (dourado mais escuro)

Nada de dourado brilhoso ou metálico exagerado — dourado fosco, aplicado com parcimônia (linhas finas, underlines, ícones, botão CTA).

**Tipografia: Cormorant Garamond + Karla**
- Títulos e display: **Cormorant Garamond** (serifa alta-costura, referência Chanel/Dior)
- Corpo e UI: **Karla** (sans refinada, ótima leitura)
- Números/preços/detalhes: Karla em tracking generoso (letter-spacing)

**Layout: Magazine Editorial**
- Hero com foto grande em tela cheia + título serifa sobreposto
- Seções alternadas: feature grande à esquerda, grid 2x2 à direita
- Muito respiro (padding vertical generoso, 120-160px entre seções)
- Divisores: linha fina dourada de 1px em vez de blocos coloridos

## Detalhes de execução

**Composição:**
- Padding lateral generoso (max-width 1280px, com bastante ar nas laterais em desktop)
- Grid com gutters largos (32-48px)
- Alturas de seção respiráveis, sem apertar conteúdo

**Componentes:**
- Botões: fundo preto sólido ou outline dourado fino, sem sombra pesada, canto sutilmente arredondado (4px)
- Cards de imóveis: sem sombra colorida — apenas hairline border `#e8e4dd` + shadow ultra sutil no hover
- Imagens: sem overlays coloridos, apenas dark gradient sutil quando precisar de texto sobreposto
- Ícones: linha fina (1.5px stroke), estilo Feather/Lucide

**Motion:**
- Fade-in suave ao scroll (opacity + translateY 20px, easing suave 0.6s)
- Hover em cards: leve zoom na imagem (scale 1.03) + linha dourada aparecendo embaixo
- Nada de bounce, spring agressivo ou animação chamativa

**Detalhes de charme:**
- Números de seção em serifa fina (ex: "01 —" antes de títulos)
- Small caps + letter-spacing em labels ("PROJETOS SELECIONADOS")
- Linha divisória dourada de 40px de largura como ornamento antes de headings
- Aspas decorativas em depoimentos (grandes, dourado bem claro atrás do texto)

## Arquivos afetados

- `src/styles.css` — nova paleta de tokens, tipografia, gradientes, shadows
- `src/routes/__root.tsx` — carregar Cormorant Garamond + Karla via `<link>` no head
- Componentes de UI reutilizáveis (Header, Hero, seções, Footer, Cards) — atualização de estilos usando os novos tokens semânticos
- Nenhuma mudança em texto, imagens, rotas ou lógica

## O que NÃO muda

- Textos e copy do site
- Estrutura de páginas e rotas
- Imagens do projeto Lausanne
- Funcionalidades (contato, navegação, etc.)
- Backend / dados

Se aprovar, implemento tudo em sequência e você pode revisar visualmente. Depois ajustamos detalhes finos (mais/menos dourado, tamanhos de fonte, etc.) sobre a base já pronta.