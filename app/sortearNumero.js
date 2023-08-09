const menorValor = 1;
const maiorValor = 1000;


const numeroSecreto = geraNumeroAleatorio();

function geraNumeroAleatorio() {
    return parseInt(Math.round(Math.random() * maiorValor + 1));
}
console.log(numeroSecreto);

const elementoMaiorValor = document.getElementById("numero-maior");

elementoMaiorValor.innerHTML = maiorValor;

const elementoMenorValor = document.getElementById("numero-menor");

elementoMenorValor.innerHTML = menorValor;