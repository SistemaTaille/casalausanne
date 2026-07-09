## Problema

No celular (Samsung Internet / Chrome Android com "modo escuro" ativado), o navegador inverte automaticamente as cores do site, deixando o fundo preto e o texto branco. O `color-scheme: light` atual não é suficiente — precisa ser `only light` para instruir o navegador a não aplicar auto-dark.

## Alterações

**1. `src/routes/__root.tsx`**
- Trocar `{ name: "color-scheme", content: "light" }` por `{ name: "color-scheme", content: "only light" }`
- Manter `theme-color: #ffffff`

**2. `src/styles.css`**
- Adicionar no bloco `html, body` (ou `:root`): `color-scheme: only light;`
- Isso reforça a instrução via CSS além do meta tag, cobrindo navegadores que respeitam apenas uma das fontes.

## Resultado esperado

Ao abrir no celular com modo escuro do sistema/navegador, o site continuará com fundo claro e tipografia original, igual ao desktop.
