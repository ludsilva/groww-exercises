/* RESPOSTA AQUI 👇 */


/* Questão 01 
Faça uma código que recebe três lados de um triângulo(a,b,c) e retorne o tipo de triângulo
a) A>=B+C não existe o triângulo
b) A² = B² + C² é um triângulo retângulo
c) A² > B² + C² é formado um triângulo obtusângulo
d) A² < B² + C² formando um acutângulo

Exceções: 
O lado A sempre deverá ser o maior de todos(Criar um mecânismo para tratar isso)
Caso sejam fornecidos valores negativos, retornar erro para o usuário.

*/

function calculaMedia(valorA, valorB, valorC) {
    var valorA, valorB, valorC;
    var mensagem = "";

        if ((valorA < 0) && (valorB < 0) && (valorC < 0)) {
            mensagem = "Erro! Valores negativos!";
            } else if ((valorA < valorB) && (valorA < valorC)) {
                mensagem = "Valor de A inválido."
             } else if (valorA >= (valorB + valorC)) {
                 mensagem = "Não existe o triângulo";
                }  else if ((valorA**2) == ((valorB**2) + (valorC**2))) {
                    mensagem = "É um triângulo retângulo";
                        } else if ((valorA**2) > ((valorB**2) + (valorC**2))) {
                            mensagem = "É um triângulo obtusângulo";
                                } else if ((valorA**2) < ((valorB**2) + (valorC**2))) {
                                    mensagem = "É um acutângulo";
                                } 
    return mensagem;
}


/* Questão 02

Uma empresa quer aumentar o salário dos funcionários dada a seguinte tábela
-> Até R$400,00 --------------------------- 15%
-> Entre R$400,01 e R$700 ----------------- 12%
-> Emtre R$700,01 e R$1000,00 ------------- 10%
-> Entre R$1000,01 e $2000,00 ------------- 7%
-> Entre R$2000,01 e R$3500,00 ------------ 4%
-> Acima de $3500,01 ---------------------- 0%

Crie um código que recebe o salario do funcionário(apenas numérico) e retorne o salario atual, a porcentagem de correção e o valor corrigido
*/

function corrigiSalario(salAtual) {

    var salAtual = 0; 
    var salCorrigido = 0; 
    var mensagem = "";

    if (salAtual <= 400) {
        salCorrigido = salAtual + (salAtual * 15/100);
        mensagem = "O salário atual é R$ " + salAtual + " e o valor de porcentagem de aumento é 15%. O salário corrigido do funcionário é R$" + salCorrigido + "."   
        } else if ((salAtual >= 400.01) && (salAtual <= 700)) {
            salCorrigido = salAtual + (salAtual * 12/100);
            mensagem = "O salário atual é R$ " + salAtual + " e o valor de porcentagem de aumento é 12%. O salário corrigido do funcionário é R$" + salCorrigido + "."
            } else if ((salAtual >= 700.01) && (salAtual <= 1000)){
                salCorrigido = salAtual + (salAtual * 10/100);
                mensagem = "O salário atual é R$ " + salAtual + " e o valor de porcentagem de aumento é 10%. O salário corrigido do funcionário é R$" + salCorrigido + "."
                } else if ((salAtual >= 1000.01) && (salAtual <= 2000)){
                    salCorrigido = salAtual + (salAtual * 7/100);
                    mensagem = "O salário atual é R$ " + salAtual + " e o valor de porcentagem de aumento é 7%. O salário corrigido do funcionário é R$" + salCorrigido + "."
                    } else if ((salAtual >= 2000.01) && (salAtual <= 3500)){
                        salCorrigido = salAtual + (salAtual * 4/100);
                        mensagem = "O salário atual é R$ " + salAtual + " e o valor de porcentagem de aumento é 4%. O salário corrigido do funcionário é R$" + salCorrigido + "."
                    } else if (salAtual > 3500.00){
                        salCorrigido = salAtual + (salAtual * 0/100);
                         mensagem = "O salário atual é R$ " + salAtual + ". Não houve porcentagem de aumento."
        }
    return mensagem
}

