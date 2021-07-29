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
        let products = [];
        let itemContainerProduct = '';
        $.each(keys, function (i, key) {
            let item = JSON.parse(localStorage.getItem(key));
            if (item.category == "sneaker") {
                //Zapatillas que se usara para la api de whatsapp
                products.push(item)
                itemContainerProduct += `
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
        let form = `
        <section>
        <div class="container">
          <form action="" id="submit-products">
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="name" placeholder="Ingrese sus nombres" required>
              </div>
              <div class="mb-3 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="last-name" placeholder="Ingrese sus apellidos" required>
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Teléfono</label>
                <input type="number" class="form-control" id="phone" placeholder="Ingrese su número telefónico" required>
              </div>
              <div class="mb-3 col-md-6">
                <label for="exampleFormControlInput1" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="address" placeholder="Ingrese su dirección exacta de envío" required>
              </div>
            </div>
            <div class="row">
             <div class="mb-3 col-6">
               <label for="exampleFormControlInput1" class="form-label">Forma de pago</label>
               <select class="form-select" id="checkout" aria-label="Default select example">
                 <option selected>Seleccione la forma de pago</option>
                 <option value="Mercado pago">Mercado pago</option>
                 <option value="Efectivo">Efectivo</option>
               </select>
             </div>
            </div>
            <div class="col-auto">
             <button type="submit" class="btn btn-primary mb-3">Enviar pedido</button>
           </div>
          </form>
        </div>
      </section>

        `

        if(!itemContainerProduct) {
            itemContainerTemplate = `
            <div class="row mb-4">
                <div class="d-flex justify-content-center align-items-center title-car">
                    Carrito de compras
                </div>
            </div>
            <div class="row item-header mb-5 pb-5 show-mobile">
                <div class="container">Su carrito de compras está vacío. Revise el catálogo y agregue los productos deseados</div>
            </div>
            `;
            form = '';
        }

        cartContainer.innerHTML = itemContainerTemplate + itemContainerProduct + form;
        itemContainerTemplate = '';
        
        $('#submit-products').submit( e => {
          e.preventDefault()
          sendDataWhatsApp(products)
        })
        
        //FUNCTIONS
        const sendDataWhatsApp = products => {
          //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
          let apiPhone = "51924301608";
          let client = document.querySelector("#name").value;
          let address = document.querySelector("#address").value;
          let phone = document.querySelector("#phone").value;
          let checkout = document.querySelector("#checkout").value;
          let totalProducts = 0;

          let url = `https://api.whatsapp.com/send?phone=${apiPhone}&text=
            *UrbanShoes*%0A
            *Hola! Soy ${client}. Espero que a la brevedad esté confirmando mi pedido.*%0A`;
          //forEach para llenar la url
          $.each(products, function (i, el) {
            url += `-${el.product.name}/talla:${el.product.size}/cantidad:${el.quantity}/precio:${el.product.price}/total:${el.total}%0A`
            totalProducts += el.total;
          })

          url += `*Total de la compra*%0A
             -${totalProducts} soles%0A
             *Dirección de entrega*%0A
             -${address}%0A
             *Número del cliente*%0A
             -${phone}%0A
             *Forma de pago*%0A
             -${checkout}%0A
             *Muchas gracias por su tiempo*%0A`;
          
          localStorage.clear()
  
          window.open(url);

          setTimeout(function () {
            window.location.href = "http://127.0.0.1:5500/";
          }, 1000)
        }
})

// JS VANILLA
let cartContent = document.querySelector(".items-content");

cartContent.addEventListener('click', e => {
  itemSelected = e.target
  if(itemSelected.classList.contains("icon-delete")) {
      let key = e.target.dataset.key
      localStorage.removeItem(key)
      location.reload()
  }
});   