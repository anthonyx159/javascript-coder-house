let name = prompt('Ingrese su nombre')
let giveAge = prompt('Ingrese su edad')

age = Number(giveAge)

if (age || age == 0) {
    if (age % 1 == 0) {
        if (age >= 18 && age < 101) {
            console.log(`Hola ${name}, usted es mayor de edad, tiene ${age} años.`)
        } else if (age > 1 && age < 18) {
            console.log(`Hola ${name}, usted es menor de edad, tiene ${age} años.`)
        } else if ( age == 1) {
            console.log(`Hola ${name}, usted es menor de edad, tiene ${age} año.`)
        }
        else {
            console.log('Edad no válida.')
        }
    } else {
        console.log('Las edades no pueden ser numeros decimales.')
    }
} else {
    console.log('No es un numero.')
}
