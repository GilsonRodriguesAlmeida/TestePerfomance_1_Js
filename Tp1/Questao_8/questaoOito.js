/*Faça um programa que peça os 3 lados de um triângulo. 
O programa deverá informar se os valores podem ser um triângulo. 
Indique, caso os lados formem um triângulo, se o mesmo é: 
“Equilátero”, “Isósceles” ou “Escaleno”. 
Dicas: 
I – Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro. 
II – Triângulo Equilaátero: Três lados iguais. 
III – Triângulo Isósceles: Quaisquer dois lados iguais. 
IV – Triângulo Escaleno: Três lados diferentes*/

let lado1 = parseFloat(window.prompt("Digite o primeiro lado"))
let lado2 = parseFloat(window.prompt("Digite o segundo lado"))
let lado3 = parseFloat(window.prompt("Digite o terceiro lado"))

if((lado1 + lado2) > lado3 && (lado1 + lado3) > lado2 && (lado2 + lado3) > lado1) {

    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
        console.log("É um triângulo Equilátero!")
    } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log("É um triângulo Escaleno!")
    } else {
        console.log("É um triângulo Isósceles!")
    }

} else {
    console.log("Não é um triângulo!!!")
}
