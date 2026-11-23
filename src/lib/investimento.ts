export const investimento = [
  { valor: 3080000, ate: "2026-12-19" },
  { valor: 3180000, aPartirDe: "2026-12-20" },
] as const;

export function formatarValor(valor: number) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valor);
}

export function formatarData(data: string) {
  return data.split("-").reverse().join("/");
}