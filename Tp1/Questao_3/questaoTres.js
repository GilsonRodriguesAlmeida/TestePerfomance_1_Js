//Faça um programa que peça dois números e imprima o maior deles.
let numero1 = 0
let numero2 = 0

numero1 = parseFloat(window.prompt(`Insira o número:`))
numero2 = parseFloat(window.prompt(`Insira o número:`))
console.log(numero1)
console.log(numero2)

if (numero1 > numero2) {
  console.log(`O número maior entre eles é: ${numero1}`)
} else if (numero1 === numero2) {
    console.log(`Os numeros são iguais!`)
} else {
    console.log(`O número maior entre eles é: ${numero2}`)
}
