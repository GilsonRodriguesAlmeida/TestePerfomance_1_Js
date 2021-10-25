/*Faça um programa para a leitura de duas notas parciais de um aluno. 
O programa deve calcular a média alcançada por aluno e apresentar: 

a) A mensagem “Aprovado”, se a média alcançada for maior ou igual a sete. 
b) A mensagem “Reprovado”, se a média for menor do que sete. 
c) A mensagem “Aprovado com distinção”, se a média for igual a dez.*/

let nota1 = parseFloat(window.prompt("Qual é a primeira nota: "))
let nota2 = parseFloat(window.prompt("Qual é a segunda nota: "))
let media = ((nota1 + nota2) / 2)

console.log(`A media entre as duas notas é ${media}.`)

if (media >= 7 && media < 10 || media >=70 && media < 100) {
    console.log("Aprovado!!!")
} else if (media == 10 || media == 100) {
    console.log("Aprovado com distinção!!!")
} else {
    console.log("Reprovado!!!")
}

