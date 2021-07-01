let choose = prompt(`
    Bienvenido a nuestra tienda. Dijite el numero de la zapatilla de su preferencia
    1: Nike Air max blanco (S/ 320)
    2: Adidas Running max rojo (S/ 220)
    3: Rebook Tennis max verde (S/ 198)
`)
let quantity = Number(prompt(`Ingrese el numero de unidades deseadas`))
let question

let brand, design, price, total, igv;
let isBuying = true

let cart = [];

class Sneaker{
    constructor(id, brand, design, color, category, price, stock) {
        this.id = id;
        this.brand = brand;
        this.design = design;
        this.color = color;
        this.category = category;
        this.price = price;
        this.stock = stock
    }

    
    getAmount = function (qty){
        return this.price * qty
    }
    
    getIgv = function (){
        // return Number((this.getAmount(qty) * 0.18).toFixed(2))
        return Number((this.price * 0.18).toFixed(2))
    }

    getTotal = function (qty){
        return this.getAmount(qty) + this.getIgv() * qty
    }

    getCheckout = function (qty) {
        return {
            product: this,
            quantity: qty,
            igv: this.getIgv(qty),
            total: this.getTotal(qty)
        }
    }

    addToCart = function (qty) {
        cart.push(this.getCheckout(qty))
    }
}


const item1 = new Sneaker(1, 'Nike', 'Air max', 'Blanco', 'Running', 320, 23)
const item2 = new Sneaker(2, 'Adidas', 'Running max', 'Rojo', 'Jogging', 220, 30)
const item3 = new Sneaker(3, 'Reebok', 'Tennis max', 'Verde', 'Football', 198, 25)


    do {
        switch (choose) {
                case '1':
                    item1.addToCart(quantity)
                    brand = item1.brand
                    design = item1.design 
                    price = item1.price
                    total = item1.getTotal(quantity)
                    igv = item1.getIgv(quantity)
                    alert(`
                        Detalle de compra:
                            Marca: ${brand}
                            Modelo: ${design}
                            Igv: S/ ${igv}
                            Precio: S/ ${price}
                            Unidades: ${quantity}
                            Total a pagar: S/ ${total}0
                        Muchas gracias por su preferencia
                    `)
                    break
                case '2':
                    item2.addToCart(quantity)
                    brand = item2.brand
                    design = item2.design 
                    price = item2.price
                    total = item2.getTotal(quantity)
                    igv = item2.getIgv(quantity)
                    alert(`
                        Detalle de compra:
                            Marca: ${brand}
                            Modelo: ${design}
                            Igv: S/ ${igv}
                            Precio: S/ ${price}
                            Unidades: ${quantity}
                            Total a pagar: S/ ${total}0
                        Muchas gracias por su preferencia
                    `)
                    break
                case '3':
                    item3.addToCart(quantity)
                    brand = item3.brand
                    design = item3.design 
                    price = item3.price
                    total = item3.getTotal(quantity)
                    igv = item3.getIgv(quantity)
                    alert(`
                        Detalle de compra:
                            Marca: ${brand}
                            Modelo: ${design}
                            Igv: S/ ${igv}
                            Precio: S/ ${price}
                            Unidades: ${quantity}
                            Total a pagar: S/ ${total}0
                        Muchas gracias por su preferencia
                    `)
                    break
                default:
                    alert(`No se seleccionó un numero valido`)
        }
        question = prompt(`Desea seguir comprando? Responda con un "Si" o escriba cualquier letra para finalizar la compra`).toLowerCase().trim()
        if(question == 'si'){
            isBuying = true
        }else {
            break
        }
        choose = prompt(`
        Dijite el numero de la zapatilla de su preferencia
            1: Nike Air max blanco (S/ 320)
            2: Adidas Running max rojo (S/ 220)
            3: Rebook Tennis max verde (S/ 198)
        `)
        quantity = Number(prompt(`Ingrese el numero de unidades deseadas`))
        
    } while(isBuying);


//OPERACIONES CON ARRAY
let maxStock = cart.reduce( (el1, el2) => el1.product.stock > el2.product.stock ? el1 : el2)
console.log(`De los productos comprados ${maxStock.product.brand} ${maxStock.product.design} es el  que posee mayor stock: ${maxStock.product.stock}`)


//OPERACIONES CON ARRAY
let resultFilter = cart.filter(element => element.total> 700)
console.log(`Existe ${resultFilter.length} producto(s) que superan el monto de 700 soles de compra por producto.`)
