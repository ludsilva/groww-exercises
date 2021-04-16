/* RESPOSTA AQUI 👇 */

/* Questão 01
Cria uma função que leia o mês do aniversário da pessoa(01 ~ 12) e retorne seu signo:
01 - Capricornio
02 - Aquario
03 - Peixes
04 - Aries
05 - Touro
06 - Gêmeos
07 - Cancer
08 - Leão
09 - Virgem
10 - Libra
11 - Escorpião
12 - Sagitário
*/

// var signo = 0;

function leSigno(signo) {
  let mensagemSigno = "";

  if (signo == 01) {
    mensagemSigno = "Capricórnio";
  }
  if (signo == 02) {
    mensagemSigno = "Aquário";
  }
  if (signo == 03) {
    mensagemSigno = "Peixer";
  }
  if (signo == 04) {
    mensagemSigno = "Áries";
  }
  if (signo == 05) {
    mensagemSigno = "Touro";
  }
  if (signo == 06) {
    mensagemSigno = "Gêmeos";
  }
  if (signo == 07) {
    mensagemSigno = "Câncer";
  }
  if (signo == 08) {
    mensagemSigno = "Leão";
  }
  if (signo == 09) {
    mensagemSigno = "Virgem";
  }
  if (signo == 10) {
    mensagemSigno = "Libra";
  }
  if (signo == 11) {
    mensagemSigno = "Escorpião";
  }
  if (signo == 12) {
    mensagemSigno = "Sagitário";
  }
  return alert(`Vai Seiya! O seu signo é: ${mensagemSigno}`);
}

/* Questão 02
Cria uma função que leia dois números e retorne como resultado os seguintes valores:
a) a multiplicação entre eles
b) a divisão entre eles eles
c) a soma entre eles
d) a subtração entre eles
*/

// var numero1 = 0,
// var numero2 = 0;

function calculaTudo(numero1, numero2) {
  let calcMulti = numero1 * numero2;
  let calcDivi = numero1 / numero2;
  let calcSoma = numero1 + numero2;
  let calcSub = numero1 - numero2;

  return alert(`Soma: ${calcSoma}. Subtração: ${calcSub}. Multiplicação: ${calcMulti}. Divisão: ${calcDivi}`);
}

/* Questão 03
Carlos deseja fazer um omelete. Na receita que leu na internet, um omelete sempre deve levar
2 ovos. 
Cria uma função que retorne para Carlos quantos omeletes ele consegue fazer com a quantidade 
de ovos que ele possui
exemplo: 
entrada 5 ovos
saída 2 omeletes
Entrada 4 ovos
saída 2 omeletes
*/

// var qtdeOvos = 0;

function retornaOmelete(qtdeOvos) {
let totalOmeletes = 0;
let mensagemOmeletes = "";

    if (qtdeOvos < 2){
        mensagemOmeletes = (`Quantidade de ovos insuficiente.`);
    } else if (qtdeOvos % 2 == 0){
        totalOmeletes = (qtdeOvos / 2);
        mensagemOmeletes = (`Total de omeletes: ${totalOmeletes}`);
    } else if (qtdeOvos % 2 != 0){
        totalOmeletes = (qtdeOvos / 2)
        mensagemOmeletes = (`Total de omeletes: ${Math.trunc(totalOmeletes)}`);
    }  
  return alert(mensagemOmeletes) 
}

/*
Questão 04
Crie um programa que funciona como um calculadora. O usuário entrara com
3 inputs(Tipo de operação,número 01, número 02)
O seu programa deve receber o tipo de operação entrada pelo usuário e garantir que
os dois números entrados serão calculados de acordo.
Exemplo:
Chamada : funçãoCalculadora("Multiplicação", 2, 2)
Saída : "A calculadora executou a operação de Multiplicação e retornou o valor 4"
Será necessário criar pelo menos as quatro operações básicas da matemática(
    multiplicação,
    divisão,
    subtração e
    adição
)
Pontuação bônus: Criar mais operações matemáticas
Pontuação bônus: Criar uma função separada para cada operação matemática.
*/

var num1, num2;

function functionCalculadora(operacao = "", num1, num2) {
  let resultado = 0;

  switch (operacao) { 
    case "Adição": 
      resultado = adicao(num1,num2);
      return alert(`A calculadora executou a operação de Adição e retornou o valor: ${resultado}`);
      break;
    case "Subtração":
      resultado = subtracao(num1,num2);
      return alert(`A calculadora executou a operação de Subtração e retornou o valor: ${resultado}`);
      break;
    case "Multiplicação":
      resultado = multiplicacao(num1,num2);
      return alert(`A calculadora executou a operação de Multiplicação e retornou o valor: ${resultado}`);
      break;
    case "Divisão":
      resultado = divisao(num1,num2);
      return alert(`A calculadora executou a operação de Divisão e retornou o valor: ${resultado}`);
      break;
    case "Potenciação":
      resultado = exponenciacao(num1,num2);
      return alert(`A calculadora executou a operação de Potenciação e retornou o valor: ${resultado}`);;
      break;
  }
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function adicao(num1, num2) {
  return num1 + num2;
}

function exponenciacao(num1, num2) {
  return num1 ** num2;
}

/* Questão 02 (Valendo uma pontuação maior)
Questão OBI(Olimpíada Brasileira de Informática - 2012, Fase 2, Nível Junior)
João Deseja fazer bolos para seus amigos usando uma receita que indica que devem ser
usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa
ele tem A xícaras de trigo, B ovos e C colheres de sopa de leite. João não tem muita
prática com a cozinha e portanto ele só se arriscará a fazer medidas exatas da receita
de bolo (por exemplo, se ele tiver material suficiente para
fazer mais do que 2 e menos do que 3 bolos, ele fará somente 2 bolos). Sabendo disso,
ajude João escrevendo uma função que determine qual a quantidade máxima de bolos que 
ele consegue fazer
Entrada: Os Parâmetros de entrada da função são três números Inteiros A, B e C, indicando
respectivamente o número de xícaras de farinha de trigo, o núimero de ovos e o número de 
colheres de sopa de leite que João tem em Casa
Saída: Retornar a quantidade máxima de bolos
entrada : 4,6,10 saída: 2
entrada 4, 6, 9 saída : 1
*/


function calculaBolo(A, B, C) {
  A = parseInt(A/2);
  B = parseInt(B/3);
  C = parseInt(C/5);
  let mensagemQtBolos = "";

    if((A == B) && (B == C)){
			  mensagemQtBolos = `Total de bolos: ${A}`
		} else if ((A < B) && (A < C)) {
        mensagemQtBolos = `Total de bolos: ${Math.trunc(A)}` 
		}
		if ((B < A) || (B < C)) {
				mensagemQtBolos =  `Total de bolos ${Math.trunc(B)}`
    }  
    if ((C < A) || (C < B)){
        mensagemQtBolos = `Total de bolos ${Math.trunc(C)}`
    }
  return alert(mensagemQtBolos);
}
