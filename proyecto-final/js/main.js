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
let element;
let keyCar = []


//Se usa fetch para traer la data que sera pintada en el home
fetch('http://127.0.0.1:5500/js/api.json')
    .then(response => response.json())
    .then(data => {
        let datos = data.data
        // pinta los datos en el home
        drawProductsDefault(datos);
    })

    branContainer.addEventListener("click", e => {
        // add clase active para el focus
        itemClass.forEach(el =>{el.classList.remove("active")})
        e.target.classList.add("active")
        //Se trae nuevamente los datos requeridos cada vez que se da click mediante fetch
        fetch('http://127.0.0.1:5500/js/api.json')
         .then(response => response.json())
         .then(data => {
            let datos = data.data
            //Se ejecuta la funcion solo pintando los datos necesarios por marca
            chooseBrand(e, datos)
        })
    })

const drawProductsDefault = (data) => {
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

const chooseBrand = (e, data) => {
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
    drawProducts(idBrand, brand, data)
}

const drawProducts = (id, brand, data) => {
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
            console.log(e.target)
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
        "image" : itemImg,
        "name"  : cardTitle,
        "price" : itemPrice,
    }

    openModalProduct(clickSelected);
}

const openModalProduct = (modalOpen) => {
    
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
        console.log(item)
        //Quitar los espacios en blanco para que sea la key del localstorage
        let name = item.name;
        let nameSanitazed = name.replace(/ /g, "")
        let image = item.image
        let price = Number(item.price)
        let size = Number(item.size)
        let quantity = Number( typeof(item.quantity) == "undefined" ? 1 : item.quantity  )
        let product = new Sneaker(nameSanitazed, image, name, price, size)
            product.addToCart(quantity == null ? 1 : quantity)

            localStorage.setItem(nameSanitazed, JSON.stringify(element))

            getProduct(nameSanitazed);

    })
}

const getProduct = (key) => {
    JSON.parse(localStorage.getItem(key))
}

const getSelectSize = () => {
    
    let size = document.querySelector('#item-size').value
    console.log(size)
    item["size"] = size
}

const getSelectQuantity = () => {
    
    let quantity = document.querySelector('#item-quantity').value
    item["quantity"] = quantity
}


// FUNCIONES LLAMADAS
addModalClass();
