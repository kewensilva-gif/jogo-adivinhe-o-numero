function verificaValidade(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return
    }

    if(numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    
    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
        document.body.style.cssText = 'background-color: #82f082; color: #000'

    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else{
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero);
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e=>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
