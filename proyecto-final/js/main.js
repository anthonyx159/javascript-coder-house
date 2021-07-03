data = [
    {
        nike: [
            {
                image: './img/productos/nike-1.jpg',
                brand: 'Nike',
                model: 'Air Jordan Retro',
                price: 230
            },
            {
                image: './img/productos/nike-2.jpg',
                brand: 'Nike',
                model: 'Air Jordan Clasico',
                price: 280
            },
            {
                image: './img/productos/nike-3.jpg',
                brand: 'Nike',
                model: 'Air Runner Clasico',
                price: 330
            }
        ]
    },
    {
        adidas: [
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Adidas',
                model: 'Turbo Max',
                price: 350
            },
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Adidas',
                model: 'Runner Clasico',
                price: 410
            },
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Adidas',
                model: 'Tennis Max',
                price: 400
            }
        ]
    },
    {
        rebook: [
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Rebook',
                model: 'Turbo Max',
                price: 350
            },
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Rebook',
                model: 'Runner Clasico',
                price: 410
            },
            {
                image: './img/productos/adidas-1.jpg',
                brand: 'Rebook',
                model: 'Tennis Max',
                price: 400
            }
        ]
    },
    {
        puma: [
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Puma',
                model: 'Capsule Runner',
                price: 189
            },
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Puma',
                model: 'Capsule Sport',
                price: 199
            },
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Puma',
                model: 'Capsule Tennis',
                price: 289
            }
        ]
    },
    {
        vans: [
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Vans',
                model: 'Capsule Runner',
                price: 189
            },
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Vans',
                model: 'Capsule Sport',
                price: 199
            },
            {
                image: './img/productos/vans-1.jpg',
                brand: 'Vans',
                model: 'Capsule Tennis',
                price: 289
            }
        ]
    },
]

let templateSniker;
let items = '';
let idBrand;
let brand;
let dataBrand;
let itemContainerChild;
let itemClass = document.querySelectorAll('.boton-brand')
let itemContainer = document.getElementById('item-container');
let branContainer = document.getElementById('brand-container');

branContainer.addEventListener("click", e => {
    // add clase active para el focus
    itemClass.forEach(el =>{el.classList.remove("active")})
    e.target.classList.add("active")
    //ejecutar funcion
    chooseBrand(e)
})

const drawProductsDefault = () => {
    //class active por defecto
    itemClass[0].classList.add("active")

    let dataNike = data[0].nike
    dataNike.forEach(el => {
        templateSniker = `
            <div class="col-sm d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                <img src="${el.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${el.brand} ${el.model}</h5>
                    <p class="card-text">Precio: S/.${el.price}</p>
                    <a href="javascript:void(0)" class="btn btn-primary btn-product">Lo quiero</a>
                </div>
                </div>
            </div>
        `
        items += templateSniker
    });
    
    // Pintado de datos de prodcutos en el html
    itemContainer.innerHTML = items;
    // Reseto items
    items = '';
}

const chooseBrand = e => {
    switch (e.target.id) {
        case 'nike-brand' :
            idBrand = 0;
            brand = 'nike'
            break
        case 'adidas-brand' :
            idBrand = 1;
            brand = 'adidas'
            break
        case 'rebook-brand' :
            idBrand = 2;
            brand = 'rebook'
            break
        case 'puma-brand' :
            idBrand = 3;
            brand = 'puma'
            break
        case 'vans-brand' :
            idBrand = 4;
            brand = 'vans'
            break
    }
    drawProducts(idBrand, brand)
}

const drawProducts = (id, brand) => {
    dataBrand = data[id]
    dataBrand[brand]
    itemContainer.innerHTML = '';
    dataBrand[brand].forEach(el => {
        templateSniker = `
        <div class="col-sm d-flex justify-content-center products">
        <div class="card" style="width: 18rem;">
        <img src="${el.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${el.brand} ${el.model}</h5>
        <p class="card-text">Precio: S/.${el.price}</p>
        <a href="javascript:void(0)" class="btn btn-primary btn-product">Lo quiero</a>
        </div>
        </div>
        </div>
        `
        items += templateSniker
    });
    
    // Pintado de datos de prodcutos en el html
    itemContainer.innerHTML = items;
    // Reseteo de items
    items = ''
}

// sweetalert
const addModalClass = () => {
    let btnProduct = document.querySelectorAll('.btn-product')

    //itemContainer -> scope mayor
    itemContainer.addEventListener('click', e => {
        if(e.target.classList.contains('btn-product')) {
            btnProduct.forEach( el => {el.classList.remove("modal-open")})
            e.target.classList.add("modal-open")
            let modalOpen = e.target

            openModalProduct(modalOpen);

        }

    })

}

const openModalProduct = (modalOpen) => {
    
    if(modalOpen != null) {
        Swal.fire({
            showCloseButton: true,
            showConfirmButton: true,
            template: '#modal-product-template',
            customClass: {
                container: 'modal modal--product modal__content-wrapper',
                popup: 'modal--product__content',
                header: 'modal--product__content__header',
                image: 'modal--product__content_img',
                title: 'modal--product__content__title',
                closeButton: 'modal--product__content__close-btn',
                content: 'modal--product__content__body-wrapper',
                htmlContainer: 'modal--product__content__body',
            }
        })
    }
}


// FUNCIONES LLAMADAS
drawProductsDefault()
addModalClass();