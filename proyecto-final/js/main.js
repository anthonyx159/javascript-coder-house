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
                image: './img/productos/adidas-2.jpg',
                brand: 'Adidas',
                model: 'Runner Clasico',
                price: 410
            },
            {
                image: './img/productos/adidas-3.jpg',
                brand: 'Adidas',
                model: 'Tennis Max',
                price: 400
            }
        ]
    },
    {
        airJordan: [
            {
                image: './img/productos/airJordan-1.jpg',
                brand: 'Nike Air Jordan',
                model: 'Turbo Max',
                price: 319
            },
            {
                image: './img/productos/airJordan-2.jpg',
                brand: 'Nike Air Jordan',
                model: 'Runner Clasico',
                price: 398
            },
            {
                image: './img/productos/airJordan-3.jpg',
                brand: 'Nike Air Jordan',
                model: 'Tennis Max',
                price: 219
            }
        ]
    },
    {
        puma: [
            {
                image: './img/productos/puma-1.jpeg',
                brand: 'Puma',
                model: 'Capsule Runner',
                price: 452
            },
            {
                image: './img/productos/puma-2.jpeg',
                brand: 'Puma',
                model: 'Capsule Sport',
                price: 187
            },
            {
                image: './img/productos/puma-3.jpeg',
                brand: 'Puma',
                model: 'Capsule Tennis',
                price: 321
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
                image: './img/productos/vans-2.jpg',
                brand: 'Vans',
                model: 'Capsule Sport',
                price: 199
            },
            {
                image: './img/productos/vans-3.jpg',
                brand: 'Vans',
                model: 'Capsule Tennis',
                price: 289
            }
        ]
    },
]

let templateSniker;
let items = '';
let item;
let idBrand;
let brand;
let dataBrand;
let itemContainerChild;
let templateModal =  document.querySelector('.template-modal');
let itemClass = document.querySelectorAll('.boton-brand')
let itemContainer = document.getElementById('item-container');
let branContainer = document.getElementById('brand-container');
let element
let keyCar = []

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
                    <p class="card-text">Precio: S/.<span class="item-price">${el.price}</span></p>
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
        case 'nike-air-jordan-brand' :
            idBrand = 2;
            brand = 'airJordan'
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
        <p class="card-text">Precio: S/.<span class="item-price">${el.price}</span></p>
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
            let parentCard = e.target.parentElement.parentElement
            let clickSelected = e.target
            
            buildTemplateModal(parentCard, clickSelected);
        }

    })

}

const buildTemplateModal = (parentCard, clickSelected) => {
    let itemContainerTemplate;
    let cardTitle = parentCard.querySelector('.card-title').textContent;
    let itemPrice = parentCard.querySelector('.item-price').textContent;
    let itemImg = parentCard.querySelector('.card-img-top').getAttribute('src');
    
    templateModal.innerHTML = '';
    itemContainerTemplate = `
        <template id="modal-product-template">
            <swal-html>
                <div class="template">
                    <div class="template__img">
                        <img src="${itemImg}" alt="Zapatillas">
                    </div>
                    <div class="template__body">
                        <div class="template__brand"><b>${cardTitle}</b></div>
                        <div class="template__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt. Odio, nulla provident. Inventore cumque.</div>
                        <div class="template__price">Precio: S/.${itemPrice}</div>
                        <div class="template__size">
                            <span>Talla</span>
                            <select name="select-size" id="item-size" onchange="getSelectSize();">
                                <option value >Elige una opción</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                            </select>
                        </div>
                        <div class="template__quantity">
                            <label for="number">Cantidad</label>
                            <input type="number" value="1" id="item-quantity" onchange="getSelectQuantity()">
                        </div>
                    </div>
                </div>
            </swal-html>
        </template>
    `;
    templateModal.innerHTML = itemContainerTemplate;
    itemContainerTemplate = '';

    // // Se contruye un objeto con la informacion del producto seleccionado
    item = {
        "name"  : cardTitle,
        "price" : itemPrice,
    }

    openModalProduct(clickSelected, item);
}

const openModalProduct = (modalOpen, item) => {
    
    if(modalOpen != null) {
        Swal.fire({
            showCloseButton: false,
            showConfirmButton: true,
            showCancelButton: true,
            focusConfirm: true,
            confirmButtonText: 'AÑADIR AL CARRITO',
            cancelButtonText: 'SALIR',
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
                confirmButton: 'modal--product__content__succes',
                cancelButton: 'modal--product__content__cancel'
            }
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Añadido al carrito!', '', 'success')
            }
        })
    }

    let button = document.querySelector('.modal--product__content__succes')
    addToCar(button)
}

const addToCar = (button) => {
    button.addEventListener("click", e => {
        let name = item.name;
        let price = Number(item.price)
        let quantity = Number(item.quantity)
        let product = new Sneaker(name, price)
            product.addToCart(quantity)

        //Quitar los espacios en blanco
        let nameSanitazed = name.replace(/ /g, "")

            localStorage.setItem(nameSanitazed, JSON.stringify(element))

            getProduct(nameSanitazed);

    })
}

const getProduct = (key) => {
    console.log(JSON.parse(localStorage.getItem(key)))
}

const getSelectSize = () => {
    
    let size = document.querySelector('#item-size').value
    item["size"] = size
}

const getSelectQuantity = () => {
    
    let quantity = document.querySelector('#item-quantity').value
    item["quantity"] = quantity
}


// FUNCIONES LLAMADAS
drawProductsDefault()
addModalClass();