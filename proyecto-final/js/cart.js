// USO DE JQUERY
$(document).ready(function () {
        let keys = Object.keys(localStorage)
        let cartContainer = document.querySelector(".items-content")
            cartContainer.innerHTML = '';
        let itemContainerTemplate = `
            <div class="row mb-4">
                <div class="d-flex justify-content-center align-items-center title-car">
                    Carrito de compras
                </div>
            </div>
            <div class="row item-header">
                <div class="col-md-2 text-center">Imagen del producto</div>
                <div class="col-md-3 ">Nombre del producto</div>
                <div class="col-md-2 text-center">Precio</div>
                <div class="col-md-2 text-center">Qty</div>
                <div class="col-md-2 text-center">Total</div>
                <div class="col-md-1"></div>
            </div>
        `;
        $.each(keys, function (i, key) {
            let item = JSON.parse(localStorage.getItem(key));
            if (item.category == "sneaker") {
                itemContainerTemplate += `
                <div class="row card-item">
                    <div class="col-6 col-md-2 text-center "><img src="${item.product.image}" alt="Zapatillas" width="94" height="94"></div>
                    <div class="col-6 col-md-3 d-flex flex-column justify-content-center">
                        <span>${item.product.name}</span>
                        <span class="description-item-movil">Talla: ${item.product.size}</span>
                        <span class="description-item-movil">Qty: ${item.quantity}</span>
                        <span class="description-item-movil">Precio: S/.${item.product.price}</span>
                        <span class="description-item-movil">Total: S/.${item.total}</span>
                    </div>
                    <div class="col-3 col-md-2 d-flex justify-content-center align-items-center description-item-desktop">S/.${item.product.price}</div>
                    <div class="col-3 col-md-2 d-flex justify-content-center align-items-center description-item-desktop">${item.quantity}</div>
                    <div class="col-3 col-md-2 d-flex justify-content-center align-items-center description-item-desktop">S/.${item.total}</div>
                    <div class="col-3 col-md-1 d-flex justify-content-center align-items-center remove-item"><a href="javascript:void(0)" class="icon-delete" data-key="${item.product.key}"></a></div>
                </div>
                    `
            }
        })
        cartContainer.innerHTML = itemContainerTemplate;
        itemContainerTemplate = '';
    const openModalProductCheckout = (modalOpen, item) => {
    
        if(modalOpen != null) {
            Swal.fire({
                showCloseButton: false,
                showConfirmButton: true,
                showCancelButton: true,
                focusConfirm: true,
                confirmButtonText: 'PAGAR',
                cancelButtonText: 'SALIR',
                template: '#modal-product-checkout-template',
                customClass: {
                    container: 'modal modal--product-checkout modal__content-wrapper',
                    popup: 'modal--product-checkout__content',
                    header: 'modal--product-checkout__content__header',
                    image: 'modal--product-checkout__content_img',
                    title: 'modal--product-checkout__content__title',
                    closeButton: 'modal--product-checkout__content__close-btn',
                    content: 'modal--product-checkout__content__body-wrapper',
                    htmlContainer: 'modal--product-checkout__content__body',
                    confirmButton: 'modal--product-checkout__content__succes',
                    cancelButton: 'modal--product-checkout__content__cancel'
                }
            })
        }
    
        // let button = document.querySelector('.modal--product-checkout__content__succes')
        // addToCar(button)
    }

    // const deleteProduct = item => {
    //     item.click( e => {
    //         if(e.target.hasClass("icon-delete")) {
    //             console.log(e.target)
    //         }
    //     })
    // }

    // Funciones llamadas
    // deleteProduct(cartContainer)

})

      
// JS VANILLA
let cartContent = document.querySelector(".items-content")

    cartContent.addEventListener('click', e => {
        itemSelected = e.target
        if(itemSelected.classList.contains("icon-delete")) {
            let key = e.target.dataset.key
            localStorage.removeItem(key)
            location.reload()
        }
    })