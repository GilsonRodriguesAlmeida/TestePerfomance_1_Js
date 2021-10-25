//Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

let numero = 0

numero = parseFloat(window.prompt("Digite um número: "))
if ( numero > 0) {
    console.log(`O número ${numero} é positivo.`)
} else {
    console.log(`O número ${numero} é negativo.`)
}