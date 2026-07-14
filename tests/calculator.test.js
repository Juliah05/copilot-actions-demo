const calcularTotal = require('../src/calculator');

test("10%", () => {
   expect(calcularTotal(100,10)).toBe(90);
});

test("Sem desconto", () => {
   expect(calcularTotal(200,0)).toBe(200);
});

test("50%", () => {
   expect(calcularTotal(80,50)).toBe(40);
});