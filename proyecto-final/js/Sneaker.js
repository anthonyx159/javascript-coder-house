class Sneaker{
    constructor(name, price) {
        this.name = name;
        this.price = price;
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
        element = this.getCheckout(qty)
    }
}