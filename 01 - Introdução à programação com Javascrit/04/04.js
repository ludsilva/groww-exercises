/* RESPOSTA AQUI 👇 */

/* Vamos trabalhar mais desafios de programação nessa aula */

/* Questão 01 
Cria uma função para ajudar um Parque de Diversões saber se uma pessoa com determinada 
altura pode entrar em determinado brinquedo
Montanha-russa :  Acima de 1,60
Roda gidante : Acima de 1,50 
Carrinho bate-bate: Acima de 1,40
Trem fantasma : Acima de 1,30
Carrossel : Livre
Exemplo:
    Entrada : 1,55
    Saída:
        Montanha-Russa : Não pode Entrar
        Roda Gigante: Liberado
        Carrinho bate-bate: Liberado
        Trem Fantasma : Liberado
        Carrossel : Liberado
*/

// var altura; 

function calculaAltura(altura){
    let libera = [];

    if (altura > 1.60) {
        libera[0] = "Montanha-Russa: Liberado \n"
    } else 
        if (altura <= 1,60) {
        libera[0] = "Montanha-Russa: Não pode entrar \n"
        }
    if (altura > 1.50) {
        libera[1] =  "Roda Gigante: Liberado \n"
    } else 
        if (altura < 1.50) {
        libera[1] =  "Roda Gigante: Não pode entrar \n"
        } 
    if (altura > 1.40) {
        libera[2] = "Carrinho bate-bate: Liberado \n"
    } else
        if (altura < 1.40) {
        libera[2] =  "Carrinho bate-bate: Não pode entrar \n"
        } 
    if (altura > 1.30) {
        libera[3] = "Trem Fantasma: Liberado \n" 
    } else 
    if (altura < 1.30) {
        libera[3] = "Trem Fantasma: Não pode entrar \n"
        }

    libera[4] = "Carrossel: Liberado \n"

    return alert(libera[0] + libera[1] + libera [2] + libera[3] + libera[4])
}


/* Questão 02
Crie um programa para auxiliar um cinema saber se o cliente possui direito à meia entrada.
Seu programa deverá receber três variaveis:
    idade do cliente
    possuí carteira de estudande?(Aceitar apenas true ou false)
    dia da semana(As segundas-feiras todos pagam meia)
Lembrando que um cliente paga meia se for maior de 65 anos, ou menor de 21 anos, ou é estudante.
Tente prever também condições absurdas, como uma pessoa e 65 anos estudante.
*/
var idade = 0;
var diaSemana = "";
var carteiraEstudantil = false;

function meiaCinema(idade, diaSemana, carteiraEstudantil) {
    let meiaEntrada = "";
    let meiaEntradaObj = {
        Idade: "",
        Dia: "",
        Carteirinha: ""
    }
    meiaEntradaObj.Idade = idade
    meiaEntradaObj.Dia = diaSemana
    meiaEntradaObj.Carteirinha = carteiraEstudantil

    if ((idade <= 21  && idade >= 65) || (carteiraEstudantil == true) || (diaSemana == "Terça-feira")) {
        meiaEntrada = `Meia entrada autorizada`
    } else if ((idade > 21  && idade < 65) || (carteiraEstudantil == false) || (diaSemana != "Terça-feira"))  {
        meiaEntrada = `Meia entrada não autorizada. Preço normal`
    }
    
    return alert(`Idade: ${meiaEntradaObj.Idade} \nDia da semana: ${meiaEntradaObj.Dia} \nCarteirinha ${carteiraEstudantil} \n${meiaEntrada}.`)
}


/* Questão 03
Crie uma função que a propria função cria um número aleatório entre 1 e 10. A função receberá
um "chute" do usuário e deverá retornar se acertou o número gerado pelo programa ou não.
Exemplo: 
Entrada = 2
Processamento = O Programa gerou o número 5
Saída = "Que pena, você chutou 2 mas o nosso número é 5"
Entrada = 7
Processamento = O programa gerou o número 7
Saída: "Parabéns! Vocẽ entrou com o número 7 e o programa também gerou o número 7"
Para gerar um número aleatório entre 1 e 10, utilize o seguinte código
Math.floor(Math.random() * 10) + 1
*/
// var number;

function adivinha(number){
    let mensagem = "";

    randomNum = () => {
       return Math.floor(Math.random() * 10) + 1 
    }

    let numberRandom = randomNum();

    if (number == numberRandom){
        mensagem = `Parabéns! Você entrou com o número ${number} e o programa também gerou o numero ${numberRandom}`
    } else if (number != numberRandom) {
        mensagem = `Que pena! Você chutou ${number} mas o nosso número é ${numberRandom}`
    }
    return alert(mensagem)
}


/* Questão 04
Crie um programa que lê dois números, verifica se eles estão entre 40 e 60, e por
fim retorna o maior entre os dois números
Exemplo:
Entrada: 45 e 55
Saída : Os números estão entre 40 e 60, e o maior deles é 55
Entrada: 47 e 47
Saída: Os números estão entre 40 e 60, e os dois números são iguais
Entrada: 30 e 50
Saída : Os números não estão entre 40 e 60
*/

function calculaMaior(num1, num2){
    let numMaior = 0;
    let mensagem = ""; 

    if (((num1 >= 40) && (num1 <= 60)) && ((num2 >= 40) && (num2 <=60))){
        mensagem = "Os números estão entre 40 e 60"
        if (num1 < num2){
            numMaior = num2
        } else {
            numMaior = num1
        }
        if (num1 == num2){
            numMaior = num1
            return `${mensagem}, e os dois números são iguais`
        }
    return `${mensagem}, e o maior deles é ${numMaior}`
    } else {
        return alert("Os números não estão entre 40 e 60. Tente novamente.")
    }

}

/* Desafio
Procure resolver esse exercício em grupo!
Crie um programa que recebe a idade de uma pessoas em segundos e retorne qual seria a
idade dela se ela estivesse num desses planetas:
Mecurio : Ano orbital de 0.2 anos da Terra
Venus: Ano orbital de 0.6 anos da Terra
Terra: Ano orbital de 1 ano da Terra
Marte: Ano orbital de 1.88 anos da Terra
Jupiter: Ano orbital de 11.86 anos da Terra
Saturno: Ano orbital de 29.44 anos da Terra
Urãno: Ano orbital de 84 anos da Terra
Netuno: Ano orbital de 164.79 anos da Terra
Exemplo: Se eu, com 25 anos(777.600.000 segundos de vida) estivesse vivendo em Marte,
eu teria agora 13,8 anos.
Considere cada mês com 30 dias
cada dia com 24 horas
cada hora com 60 minutos
cada minuto com 60 segundos
*/

var idade; 
planeta = "";

function idadePlaneta(idade, planeta) {
    let mensagem = "";
    let idadeSeg = idade * (60*60*24*365.25); // optei por deixar um número mais aproximado de dias do ano

    let idadeAtual = anosPlanetas(planeta, idade);

    mensagem = `Sua idade: ${idade} \nIdade em segundos de vida: ${idadeSeg} \nVocê teria ${idadeAtual} anos em ${planeta}`
    return alert(mensagem)
}

anosPlanetas = (planeta, idade) => {
    let idadesPlanetas = 0;
    switch (planeta){
        case "Mercúrio":
            idadesPlanetas = (idade * 365.25) / 87.97
            return idadesPlanetas.toFixed(2)
            break;
        case "Vênus":
            idadesPlanetas = (idade * 365.25) / 224.70
            return idadesPlanetas.toFixed(2)
            break;
        case "Marte":
            idadesPlanetas = (idade * 365.25) / 686.98
            return idadesPlanetas.toFixed(2)
            break;
        case "Júpiter":
            idadesPlanetas = (idade * 365.25) / 4332.71
            return idadesPlanetas.toFixed(2)
            break;
        case "Saturno":
            idadesPlanetas = (idade * 365.25) / 10759.50
            return idadesPlanetas.toFixed(2)
        case "Urano":
            idadesPlanetas = (idade * 365.25) / 30685.00
            return idadesPlanetas.toFixed(2)
            break;
        case "Netuno":
            idadesPlanet = (idade * 365.25) / 60190.00
            return idadesPlanetas.toFixed(2)
            break;
        default:
            return alert("Planeta inexistente! Tente novamente");
            break;
    }
}