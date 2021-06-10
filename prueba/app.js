let examResults = [7, 5, 6, 4, 3, 2, 8];
let sum = 0;

function promedio(array) {
    for(let i = 0; i < examResults.length; i++) {
        sum = sum + examResults[i]
    }
    return sum / 7
}

let resultado = promedio(examResults)

console.log(resultado)