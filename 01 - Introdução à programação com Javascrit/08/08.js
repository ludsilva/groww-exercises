/* RESPOSTA AQUI 👇 */

/* Questão 01
Crie uma função que receba 1 número e calculo a soma de todos inteiros até ele
exemplo:
adicionaNumero(3)
1 + 2 + 3 = 6
*/

function adicionaNumero (num) {
    let somaNumeros = 0;

    for(let i = 0; i <= num; i++){
        somaNumeros += parseInt(i);
    }
    return alert(somaNumeros)
}

/* Questão 02 
Cria uma função que checa que compara dois arrays e retorne todos os números que estão nos dois
exemplo:
funcaoComparaArray([2,5,6], [2,7,6]) -> [2,6]
Não é necessário sempre receber um array na função, pode fazer com um array estatíco
*/

function comparaArray () {
    let array1 = [1,2,3,4,5,6,7,8,9,10];
    let array2 = [1,3,5,7,9,11];

    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                console.log(array1[i]);
                console.log(array2[j]);
                console.log('---|--|---');
            }
        }
    }
}

/* Questão 03
Crie uma função que receba duas números como argumento(numero, tamanho) e retorne um array
com todos os multiplos do número, até o tamanho definido.
exemplo:
multiplosArray(7,5)
retorno [7,14,21,28,35]
*/

function multiplosArray (numero, tamanho) {
    let multiplosArr = [];

    for (let i = 0; i < tamanho; i++){
        multiplosArr.push(numero * (i+1));
    }
    return console.log(multiplosArr);
}

/* Questão 04
Crie uma função que receba um número como parametro e retorne todos os seus divisores
exemplo:
divisor(12) -> [1,2,3,4,6,12]
*/

function divisores (num) {
    let divisoresArr = [];

    for (let i = 0; i <= num; i++){
        if (num % i == 0){
            divisoresArr.push(i);
        }
    }
    return console.log(divisoresArr)
}