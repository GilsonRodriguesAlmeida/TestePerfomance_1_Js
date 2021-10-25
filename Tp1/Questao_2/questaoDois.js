/*Faça um programa que peça a temperatura em graus Fahrenheit, transforme e 
mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9) */
let fahr 
let cels
fahr = window.prompt(`Digite o grau em Fahrenhet: ${fahr}`)

cels = parseInt(5 * ((fahr-32)/9))

console.log(`A temperatura é ${cels}º celsius`)