'use strict'

const botaoCalcular = document.getElementById('calcular')


function removerClasseDesconto() {
    const caixaResultado = document.getElementById('resultado')
    caixaResultado.classList.remove('desconto1')
    caixaResultado.classList.remove('desconto2')
    caixaResultado.classList.remove('desconto3')
}


function calcularDesconto() {
    const preco = document.getElementById('preco').value
    const desconto = document.getElementById('desconto').value
    const caixaResultado = document.getElementById('resultado')

    const valorDesconto = preco * (100 - desconto) / 100
    const valorEconomizado = preco - valorDesconto

    caixaResultado.textContent = `valor economizado ${valorEconomizado.toFixed(2)} e preco final: ${valorDesconto.toFixed(2)}`

    removerClasseDesconto()
    if (desconto <= 5) {
        caixaResultado.classList.add('desconto1')
    } else if (desconto <= 10) {
        caixaResultado.classList.add('desconto2')
    } else {
        caixaResultado.classList.add('desconto3')
    }
}



botaoCalcular.addEventListener('click', calcularDesconto)





