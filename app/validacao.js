function verificaChute(chute){
    const numero = +chute;
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML +=`<div>Valor Invalido: Não é um número</div>`;
    }
    
    if(numeroNaoPerteceAoIntervalo(numero)){
        elementoChute.innerHTML += `<div>Valor Invalido: O número não está entre o intervalo de ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Parabéns, você acertou o número secreto ${numeroSecreto}</h2>
        
        <button class="btn" onclick="window.location.reload()">Jogar novamente</button>
        `;
    }else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div>O número secreto é maior que ${numero}<i class="fa-solid fa-arrow-up-long"></i></div>`;
    }else{
        elementoChute.innerHTML += `<div>O número secreto é menor que ${numero}<i class="fa-solid fa-arrow-down-long"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroNaoPerteceAoIntervalo(numero) {
    return numero < menorValor || numero > maiorValor;
}
