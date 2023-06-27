let num = [10, 20, 30, 500]
num.push(35)
num.sort()
console.log(num)
let pos = num.indexOf(35)


if(pos == -1){
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}