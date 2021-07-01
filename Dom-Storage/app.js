// let student = [
//     {
//         id: 1,
//         name: 'Anthony',
//         lastname: 'Cahuin',
//         age: 26,
//         nationality: 'peruano',
//         profession: 'Ingenieria de sistemas'
//     },
//     {
//         id: 2,
//         name: 'Sergio',
//         lastname: 'Gonzales',
//         age: 20,
//         nationality: 'uruguayo',
//         profession: 'Economía'
//     },
//     {
//         id: 3,
//         name: 'Adriana',
//         lastname: 'Gutierrez',
//         age: 21,
//         nationality: 'argentina',
//         profession: 'Administración'
//     },
//     {
//         id: 4,
//         name: 'Claudia',
//         lastname: 'Perez',
//         age: 23,
//         nationality: 'colombiana',
//         profession: 'ingenieria de software'
//     },
//     {
//         id: 5,
//         name: 'Juan',
//         lastname: 'Vilca',
//         age: 26,
//         nationality: 'boliviano',
//         profession: 'ingenieria civil'
//     }
// ]
let name, lastname, age, nationality, profession
let studentAll = []
let student
let isContinue = true
do {
    name = prompt('Ingrese el nombre del estudiante')
    lastname = prompt('Ingrese el apellido del estudiante')
    age = prompt('Ingrese la edad del estudiante')
    nationality = prompt('Ingrese la nacionalidad del estudiante')
    profession = prompt('Ingrese la profession del estudiante')

    student = {
        'name': name,
        'lastname': lastname,
        'age': age,
        'nationality': nationality,
        'profession': profession
    }

    studentAll.push(student)

    question = prompt('Desea agregar otro alumno a la lista? responda "Si" o escriba cualquier letra para salir').toLowerCase().trim()

    if(question != 'si'){
        isContinue = false
    }

} while (isContinue)

localStorage.setItem('allStudent', JSON.stringify(studentAll))

alert('Los datos fueron guardados en el localStorage')

let fragment = document.createElement('div')
let listAll = document.querySelector('.list-all')

JSON.parse(localStorage.getItem('allStudent')).forEach(element => {
    fragment.innerHTML = 
        fragment.innerHTML+
        `
        <div>
            <span class="subtitle-data">${element.name}</span>
            <span class="subtitle-data">${element.lastname}</span>
            <span class="subtitle-data">${element.age}</span>
            <span class="subtitle-data">${element.nationality}</span>
            <span class="subtitle-data">${element.profession}</span>
        </div>
        `
})

listAll.appendChild(fragment)


