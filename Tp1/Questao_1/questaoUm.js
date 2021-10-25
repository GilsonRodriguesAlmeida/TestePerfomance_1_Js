//Faça um programa que peça as 4 notas bimestrais e mostre a média.
let total = 0
let provas = 4
for (i = 0; i < provas; i++) {
  let nota = window.prompt(`Digite as notas das ${provas} provas:`)
  total += parseFloat(nota)
  console.log(nota)
}
console.log(`A média total das notas é ${total/4}`)
