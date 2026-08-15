'use strict'

const botaoAvaliar = document.getElementById('avaliar')

function avaliarTempo(){
    const caixatempo = document.getElementById('tempo')
    const caixaResultado = document.getElementById('resultado')
    if (caixatempo.value <=14){
        caixaResultado.textContent= "Apto"
        caixaResultado.classList.add ('apto')
        caixaResultado.classList.remove('nao-apto')
    }else{
        caixaResultado.textContent = "Não apto"
        caixaResultado.classList.add  ('nao-apto')
        caixaResultado.classList.remove('apto')
    }
 
}
botaoAvaliar.addEventListener('click', avaliarTempo)

