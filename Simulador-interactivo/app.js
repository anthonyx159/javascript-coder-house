//Base de datos Maraca de zapatillas
let dbBrand = [
    'Nike',
    'Reebook',
    'Adidas'
]
//Base de datos de modelo de zapatillas
let dbDesign = [
    'Nike Classics',
    'Nike Urbano',
    'Nike air max',
    'Nike air zoom',
    'Reebook Classics',
    'Reebook Nano',
    'Reebook Nanoflex',
    'Reebook Energylux',
    'Adidas Classics',
    'Adidas Retroset',
    'Adidas Run', 
    'Adidas Predator' 
]
//Credenciales
userInfo = ['tonix159', '8476coderhouseperu']

let user = prompt('Ingresa tu usuario o escriba "salir" para salir').trim().toLowerCase();
let password = prompt('Ingresa tu contraseña o escriba "salir" para salir').trim().toLowerCase();
let exit = false
let isAuthenticated
let chooseDesing
let chooseAmount
let price
let itemBrand
let itemDesign
let amount
let monto
let isError = false


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
                user = prompt('Ingresa tu usuario o escriba "salir" para salir').trim().toLowerCase()
                password = prompt('Ingresa tu contraseña o escriba "salir" para salir').trim().toLowerCase()
                isAuthenticated = false
            }
        }
    } while (!isAuthenticated)
}

// Elegir marca de zapatillas, modelo y cantidad a comprar
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
                    1: Nike Classics (S/200)
                    2: Nike Urbano (S/340)
                    3: Nike air max (S/189)
                    4: Nike air zoom (S/215)
                `)
                
                switch(chooseDesing) {
                    case '1' :
                        price = 200
                        break
                    case '2' :
                        price = 340
                        break
                    case '3' :
                        price = 189
                        break
                    case '4' :
                        price = 215
                        break
                    default :
                        alert('Opcion invalida')
                        isError = true
                        return isError

                }

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            case '2': 
                chooseDesing = prompt(`Escriba el numero del modelo de zapatilla de su preferencia:
                    5: Reebook Classics (S/198)
                    6: Reebook Nano (S/437)
                    7: Reebook Nanoflex (S/235)
                    8: Reebook Energylux (S/301)
                `)

                switch(chooseDesing) {
                    case '5' :
                        price = 198
                        break
                    case '6' :
                        price = 437
                        break
                    case '7' :
                        price = 235
                        break
                    case '8' :
                        price = 301
                        break
                    default :
                        alert('Opcion invalida')
                        isError = true
                        return isError

                }

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            case '3': 
                chooseDesing = prompt(`Escriba el numero del modelo de zapatilla de su preferencia:
                    9: Adidas Classics (S/209)
                    10: Adidas Retroset (S/313)
                    11: Adidas Run (S/432)
                    12: Adidas Predator (S/131)
                `)

                switch(chooseDesing) {
                    case '9' :
                        price = 209
                        break
                    case '10' :
                        price = 313
                        break
                    case '11' :
                        price = 432
                        break
                    case '12' :
                        price = 131
                        break
                    default :
                        alert('Opcion invalida')
                        isError = true
                        return isError

                }

                chooseAmount = prompt(`Cuantas unidades desea?`)
                return [chooseDesing, chooseAmount, price];
            default:
                alert('No elijiste una opcion correcta')
                isError = true
                return isError
        }
    }
}

//Resultado de la compra
function checkout(isError, array) {
    if(!isError) {
        itemDesign = dbDesign[Number(array[0]) - 1]
        amount = Number(array[1])
        price = Number(array[2])
    
        monto = amount * price
    
        alert(`Detalle de compra:
                Zapatilla: ${itemDesign}
                Cantidad: ${amount}
                Monto: S/${monto}.00
        Gracias por su preferencia, proceda el pago mediante tarjeta
        `)
    }
}


// Retorna un boolean
let loginValue = login(user, password);

//Retorna un array
let chooseSelected =  chooseBrand(loginValue);

//Muestra un alert con el resultado de la compra
checkout(isError, chooseSelected)



