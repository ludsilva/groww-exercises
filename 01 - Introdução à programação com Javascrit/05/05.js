/* RESPOSTA AQUI 👇 */


/* Questão 01
cria uma função que lê uma lista de número e retonar todos os números pares.
Exemplo: [1,2,3,4]
saída: [2,4]
Obs: você pode retonar 1 valor por 1 , ou utilizar um método chamado append.
exemplo prático
*/
var lista = [1,2,3,4,5,6,7,8,9,10];

function calculaPares(lista){
    let tamanhoLista = lista.length; 

    for(let i = 0; i < tamanhoLista; i++){
        if (lista[i] % 2 == 0) {
            console.log(lista[i])
        }
    }
}
/* Questão 02
Crie um programa que lê 5 números em sequência e retorne a soma deles.
Exemplo:
Entrada: 1
Entrada: 4
Entrada: 3
Entrada: 2
Entrada: 5
Saída: 15
O programa deverá perguntar 5 vezes por uma entrada
*/


function somaNumeros(){
    let todosNumeros = [];
    for (let i = 0; i < 5; i++){
    todosNumeros.push(prompt("Informe os 5 números: "));
    }
    
    let soma = 0; 
    for (i = 0; i < todosNumeros.length; i++){
         soma += parseInt(todosNumeros[i])
    }
    return alert(`Soma: ${soma}`)
}


/* Questão 01
O Brasil finalmente decidiu saber qual é o melhor time da atualidade. Decidiu chamar
os 4 principais times do seu país para um campeonamento. Foram chamados os time Flarinthinas,
Grêmense, Palmasco e Sants-fogo para um campeonato estilo ida e volta, onde os times
se enfretam 2 vezes, e todos os times se enfretam. Ao final, o time com mais vitórias
é consagrado o verdadeiro campeão do Brasil
Crie uma função que leia um objeto com todos os conflitos e calcule o time campeão
Ps.: Dei uma força para vocês
*/

var campeonato = {
    "nome-do-campeonato": "Campeões do Brasil",
    "jogos": {
        01: {
            "flarinthians": "vitoria",
            "gremense": "vitoria",
            "Palmasco": "derrota",
            "SantsFogo": "derrota"
        },
        02: {
            "flarinthians": "derrota",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "SantsFogo": "vitoria"
        }
        , 03: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "derrota",
            "SantsFogo": "vitoria"
        }
        , 04: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "SantsFogo": "derrota"
        }
        , 05: {
            "flarinthians": "derrota",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "SantsFogo": "vitoria"
        },
        06: {
            "flarinthians": "vitoria",
            "gremense": "derrota",
            "Palmasco": "vitoria",
            "SantsFogo": "derrota"
        }
    }
}

//Boa sorte!

function calculaCampeao(campeonato) {
    
    let tamanhoObjeto = Object.keys(campeonato.jogos).length
    let contadorFla = 0;
	let contadorGre = 0;
	let contadorPal = 0;
	let contadorSant = 0;

    for(var i = 1; i <= tamanhoObjeto; i++){

        if(campeonato.jogos[i].flarinthians === "vitoria"){
			contadorFla++
		}
		if(campeonato.jogos[i].gremense=== "vitoria"){
			contadorGre++
		}
		if(campeonato.jogos[i].palmasco=== "vitoria"){
			contadorPal++
		}
		if(campeonato.jogos[i].SantsFogo=== "vitoria"){
			contadorSant++
		}
    }
    let mensagem = `Vitórias do Flarinthins: ${contadorFla} \nVitórias do Gremense: ${contadorGre} \nVitórias do Palmasco: ${contadorPal} \nVitórias do SantsFogo: ${contadorSant}`
    return alert(mensagem)
	
}

//P.S.: essa questão eu falhei miseravelmente em pensar algo novo... 