let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.push(1)

//ordenação do vetor
num.sort()


console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)