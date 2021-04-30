/* RESPOSTA AQUI 👇 */

/* Questão 01 
Você foi contratado(a) para trabalhar na NBA, a Liga de Basquete Nacional dos Estados Unidos.
Seu trabalho é desenvolver um programa que calcule a quantidade de pontos numa partida. Para isso, 
você deve criar uma função que receba como parametro as cestas de 2 pontos e as cestas de 3 pontos e retorne
a pontuação final do jogo.
exemplo:
função: retornaPontuacao(1, 1)
saída: 5 pontos
função: retonarPontuacao(3, 3)
Saída: 15 pontos
*/

function pontuacaoJogo (p2, p3){
    let mensagem = "";

    cestasDois = cestasDois * 2;
    cestasTres = cestasTres * 3;

    let pontuacaoFinal = cestasDois + cestasTres;
    mensagem = `${pontuacaoFinal} pontos`;

    return alert(mensagem)
} 


/* Questão 02
O rei do Poker te convidou para criar um programa para ajuda-lo na sua jogatina. A sua ideia é
que você o ajude criando uma função que embarque a sua lógica para cada jogada.
Antes de realizazr qualquer jogada, o rei do Poker avalia as seguintes condições:
Se eu multiplicar a probablidade de ganhar multiplado pelo prêmio, menos o custo de jogar for positivo,
vale a pena entrar no jogo. Se for negativo, retira a aposta.
Crie uma função que receba a probabilidade, o prêmio e o custo de jogar, e retorne true, caso seja positivo e false caso
seja negativo
exemplo:
prob = 0.2
premio = 50
custo = 9
retonaAposta(0.2,50,9)
//processamento 0.2*50-9
saida : true
*/

var probablidade = 0;
var premio = 0;
var custo = 0;

function pokerMaster (probablidade, premio, custo) {
    let aposta = (probablidade * premio) - custo
    let entraOuNao;

    if (aposta > 0){
        entraOuNao = true;
    } else {
            entraOuNao = false;
    }
    return alert(entraOuNao)
}

/* Questão 03
Um veiculo precisa 10 vezes o total de combustivel para cada quilômetro que queira percorrer. Crie uma função que receba
a quantidade de quilometros e retorne o total de combustivel. 
Importante: Todo carro deve ter sempre, no mínimo 100 litros de gasolina
exemplo: 
entrada: 
calculaCombustivel(16) = 160
calculaCombustivel(3) = 100
*/

var km = 0;

function retornaCombustivel (km) {
    let combustivel = 0;
    let mensagem = "";

    if (km < 10){
        combustivel = 100;
    } else {
        if (km > 10){
            combustivel = km * 10;
        }
    }
    mensagem = `Total de combustível: ${combustivel} litros`;
    return alert(mensagem);
}



/* Questão 04
Crie uma função que retorne 1, se entrar com 0 e retorne 0 se entrar com um.
Não será permitido o uso de condicionais, como IF ou Switch
*/

function returnNumber (number){
    while (number >= 1){
        return alert(0);
    }
    do {
        return alert(1);
    } while (number === 0)
}
