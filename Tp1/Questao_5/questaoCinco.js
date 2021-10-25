//Faça um programa que verifique se uma letra digitada é vogal ou consoante.
let letra = null

letra = window.prompt("Digite uma letra: ")
console.log(letra)

let vogal = ['a','e','i','o','u']

if (!isNaN(letra)) {
    console.log(`O caractere "${letra}" não é uma letra!`)
} else if (vogal.indexOf(letra.toLocaleLowerCase()) !== -1) {
    console.log(`A letra "${letra}" é uma vogal!`)
} else {
    console.log(`A letra "${letra}" é uma consoante!`)
}