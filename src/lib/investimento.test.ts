import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { investimento } from "./investimento";

describe("Valores do imóvel", () => {
  test("R$ 3.080.000,00 até 19/12/2026 inclusive", () => {
    assert.equal(investimento[0].valor, 3080000);
    assert.equal(investimento[0].ate, "2026-12-19");
  });

  test("R$ 3.180.000,00 a partir de 20/12/2026", () => {
    assert.equal(investimento[1].valor, 3180000);
    assert.equal(investimento[1].aPartirDe, "2026-12-20");
  });
});