/**
 * Gerado com o prompt:
 * "Crie uma função que calcula o valor final de um pedido aplicando um desconto percentual."
 */

function calcularTotal(valor, desconto) {
    return valor - (valor * desconto / 100);
}

module.exports = calcularTotal;