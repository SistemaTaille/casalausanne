## Objetivo
Mostrar mais da fachada na imagem inicial da `/lausanne`, reduzindo a sensação de zoom/crop.

## Por que está com "zoom" hoje
- A seção hero ocupa a altura toda da tela (`h-screen min-h-[700px]`).
- A imagem usa `object-cover` com altura `120%` (para dar espaço ao parallax).
- Com `object-cover`, a foto é ampliada até preencher toda a área — cortando parte da fachada.

## Mudança proposta (mínima)
Ajustar apenas o `<img>` do hero em `src/routes/lausanne.tsx` (linha ~222):

1. Trocar `object-cover` por `object-contain` **em telas grandes** (mantendo `object-cover` no mobile para não deixar tarjas grandes).
2. Reduzir a altura extra da imagem de `h-[120%]` para `h-full`, já que sem crop o parallax fica sutil.
3. Ajustar `object-position` para "center bottom" para privilegiar a fachada.
4. Reduzir levemente a intensidade do parallax (`heroY`) para acompanhar.
5. Manter o gradiente escuro por cima para o texto continuar legível.

Resultado esperado: a fachada aparece inteira no desktop, sem cortes laterais, e o texto "Casa Lausanne" continua sobreposto embaixo como está hoje. No mobile o comportamento atual (cover) é preservado para evitar tarjas grandes.

## Alternativa (se preferir manter cover)
Manter `object-cover` mas usar `object-position: center 30%` e diminuir `h-[120%]` para `h-[105%]`. Isso reduz o crop mas não elimina — mostra ~15-20% mais da foto sem tarjas.

Se quiser, posso implementar a opção 1 (mais fiel ao pedido "menos zoom") ou a alternativa (sem tarjas). Aprovando o plano eu sigo com a opção 1.