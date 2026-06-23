## Objetivo

Gerar um arquivo `imagens-casa-lausanne.zip` em `/mnt/documents/` contendo todas as imagens usadas no site (34 arquivos `.jpg` em `src/assets/`), para download direto pelo chat.

## Como vou fazer

1. Ler cada `.asset.json` em `src/assets/` para extrair a URL CDN da imagem original.
2. Baixar todas as 34 imagens com `curl` para uma pasta temporária, mantendo o nome original (`fachada-principal.jpg`, `interior-0070.jpg`, etc.).
3. Compactar tudo em `/mnt/documents/imagens-casa-lausanne.zip`.
4. Entregar via `<presentation-artifact>` para você baixar pelo chat.

## Conteúdo do ZIP

- Fachadas e exteriores (frontal, lateral, fundos, garagem, jardim, entardecer)
- Área da piscina (deck, gourmet, noite)
- Interiores (living, social, séries 0070–0089)
- Plantas (térreo v1–v4, superior v1–v2)
- Vista do terreno (pôr do sol)

Total: 34 imagens `.jpg` originais (mesmas resoluções servidas pelo site).

## Observação

Esse ZIP contém só as imagens. Se você também quiser o código-fonte completo do projeto, use o caminho do GitHub (já descrito anteriormente) ou o **Download codebase** no Code Editor.