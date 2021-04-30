/* RESPOSTA AQUI 👇 */

/* Questão 01 
Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar
Exemplo:
calculaPar([1])
retorno: impar
calculaPar([0,1,5,])
retorno: par
*/

function calcVetor (){
    let calculaNumeros = [];

    for (let i = 0; i < 10; i++){
        calculaNumeros.push(prompt(`Informe o ${i+1}º número:`));
    }

    let soma = 0; 
    for (let i = 0; i < calculaNumeros.length; i++){
         soma += parseInt(calculaNumeros[i]);
    }

    if (soma % 2 === 0) {
        return alert(`Par`);
    } else {
        return alert(`Ímpar`);
    }
}


/* Questão 02
Crie uma função que receba dois números e calcule o primeiro elevado ao segundo
exemplo:
CalculaExpoente(2,2)
saída: 4
CalculaExpoente(5,5)
Saída: 3125
*/

function calculaExpoente (num1, num2){
    let expoente = num1 ** num2;

    return alert(`Resultado: ${expoente}`);
}

/* Questão 03
Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
exemplo:
CalculeSomaQuadrado(3) -> 14
Processamento: 1² + 2² + 3² = 14
*/

function soma_Quadrado (num){
    let somaQuadrado = 0;

    for (let i = 1; i <= num; i++){
        somaQuadrado += (i ** 2);
    }
    return alert(somaQuadrado);
}

/* Questão 04
Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
Exemplo:
calculaSequencia([3,4,1,2]) ->2
(3->4) e (1->2)
calculaSequencia([10,11,12,9,10]) -> 3
(10->11->12)
*/

function calculaSequencia() {
    let array1 = [];

    for (let j = 0; j < 10; j++){
        array1.push(prompt(`Informe o ${j+1}º número:`));
    }

    let maiorSeq = 0;
    let i = 0;

    while (i < array1.length){
        if ((array1[i]) == (array1[i+1]-1)){
            maiorSeq++;
        }
        i++;
    }
    return alert(`Maior sequência ${maiorSeq+1}`);
}