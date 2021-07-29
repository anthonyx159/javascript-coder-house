class Sneaker{
    constructor(key, image, name, price, size) {
        this.key = key;
        this.image = image;
        this.name = name;
        this.price = price;
        this.size = size;
        this.category = "sneaker";
    }

    
    getAmount = function (qty){
        return this.price * qty
    }
    
    getIgv = function (qty = 1){
        // return Number((this.getAmount(qty) * 0.18).toFixed(2))
        return Number((this.price * 0.18).toFixed(2) * qty)
    }

    getTotal = function (qty){
        return this.getAmount(qty)
    }

    getCheckout = function (qty) {
        return {
            product: this,
            quantity: qty,
            igv: this.getIgv(qty),
            category: "sneaker",
            total: this.getTotal(qty)
        }
    }

    addToCart = function (qty) {
        element = this.getCheckout(qty)
    }
}

// localStorage.clear()