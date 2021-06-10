let user = prompt('Ingresa tu usuario o escriba salir para salir')
let password = prompt('Ingresa tu contraseña o escriba salir para salir')
let exit = false
let isAuthenticated
let chooseDesing
let chooseAmount
let price
//AQUI CREAR LA BASE DE DATOS EN FORMA DE ARRAY

userInfo = ['tonix159', '8476coderhouseperu']

//Obtener el bolean del inicio de sesion
function login(user, password) {
    do {
        if (user == 'salir' || password == 'salir'){
            break
        } else {
            if ( user === userInfo[0] && password === userInfo[1]) {
                alert('Inicio de sesión exitoso')
                isAuthenticated = true
                return isAuthenticated
            } else {
                alert('Usuario o contraseña incorrecto')
                //Ingresar credenciales nuevamente
                user = prompt('Ingresa tu usuario o escriba salir para salir')
                password = prompt('Ingresa tu contraseña o escriba salir para salir')
                isAuthenticated = false
            }
        }
    } while (!isAuthenticated)
}

function chooseBrand(login) {
    if (login){
        alert('Hola Anthony, bienvenido a nuestra tienda virtual de zapatillas.')
        let choose = prompt(`Escriba el numero de la marca de zapatilla de su preferencia:
            1: Nike
            2: Reebook
            3: Adidas
        `)
        
        switch(choose) {
            case '1' :  
                chooseDesing = prompt(`Escriba el numero del modelo de zapatilla de su preferencia:
                    1: Nike Classics
                    2: Nike Urbano
                    3: Nike air max
                    4: Nike air zoom
                `)

                if(chooseDesing == '1') {price = 200}
                if(chooseDesing == '2') {price = 340}
                if(chooseDesing == '3') {price = 189}
                if(chooseDesing == '4') {price = 215}

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            case '2': 
                chooseDesing = prompt(`Escriba el numero del modelo de zapatilla de su preferencia:
                    5: Reebook Classics
                    6: Reebook Nano
                    7: Reebook Nanoflex
                    8: Reebook Energylux
                `)

                if(chooseDesing == '1') {price = 198}
                if(chooseDesing == '2') {price = 432}
                if(chooseDesing == '3') {price = 235}
                if(chooseDesing == '4') {price = 301}

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            case '3': 
                chooseDesing = prompt(`Escriba el numero del modelo de zapatilla de su preferencia:
                    9: Adidas Classics
                    10: Adidas Retroset
                    11: Adidas Run
                    12: Adidas Predator
                `)

                if(chooseDesing == '1') {price = 209}
                if(chooseDesing == '2') {price = 313}
                if(chooseDesing == '3') {price = 432}
                if(chooseDesing == '4') {price = 131}

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            default:
                alert('No elijiste una opcion correcta')
        }
    }
}

function checkout(array) {
    //consumir la base de datos de la marca y modelo
}




// Evaluar logeo
let loginValue = login(user, password);
// Elegir marca de zapatillas, modelo y cantidad a comprar
let chooseSelected =  chooseBrand(loginValue);
//Resultado de la compra
checkout(chooseSelected)
console.log(chooseSelected)



