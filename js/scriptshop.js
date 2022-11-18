let productosJSON = [];
let totalCarrito;
let botonFinalizar = document.getElementById("finalizar");
let carrito = JSON.parse(localStorage.getItem("elcarrito")) || [];
if (carrito.length != 0) {
        cargarLocalStorage();
}
obtenerDolar();

//TOMO LAS CARDS DEL HTML
const tarjetas = document.getElementById("tarjetas")

//TOMO EL BOTON PARA FINALIZAR COMPRA
const btnShop = document.getElementById("btnShop");

//LUXON
const DateTime = luxon.DateTime;
const inicio = DateTime.now();

//CARGAR LOCAL STORAGE
function cargarLocalStorage() {
        Swal.fire({
                title: 'Tu compra está esperando!',
                text: 'vuelve al carrito de compras',
                width: 400,
                showConfirmButton: false,
                timer: 3000,
                color: `#000000`,
        })
        for (const producto of carrito) {
                document.getElementById("tBody").innerHTML += `
                        <tr>
                        <td>${producto.nombre.toUpperCase()}</td>
                        <td>$${producto.precio}</td>
                        <td>${producto.cantidad}</td>
                        <td><button id='btnBorrar${producto.id}' class="btn btn-ligth"><i class="fa-solid fa-trash-can"></i></button></td>
                        </tr>
                        `;
                let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
                document.getElementById("totalPagar").innerText = `Total a pagar c/IVA incluido: $ ${totalCarrito * 1.21}`;
        }
}
cargarCarrito();

//CREO LAS TARJETAS 

function tarjetasProductos() {
        for (const producto of productosJSON) {
                tarjetas.innerHTML += `
<div class="col">
        <div class= "card card-body-shop borderimg"
                <div class="card-body">
                        <div class="div1">
                                <div class="images">
                                <img src="${producto.foto}" class="card-img-top imgCard" alt="tintura"></img>
                                </div>
                        <div class="div2">
                                <img class="imgHover" src="${producto.fotohover}"></img>
                        </div>
                        </div>
                <h2 class="card-title">
                        ${producto.color}
                </h2>
                <p class="card-text">
                        ${producto.nombre}<br>$${producto.precio}
                </p>
                <button id="btn${producto.id}" class="btn btnShop">
                        COMPRAR
                </button>
                </div>
        </div>
</div>
`;
        }
        productosJSON.forEach((producto) => {
                document
                        .getElementById(`btnComprar${producto.id}`)
                        .addEventListener("click", () => {
                                agregarCarrito(producto);
                        });
        });
}


//cotizacion dolar
function obtenerDolar() {
        const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
        fetch(URLDOLAR)
                .then(respuesta => respuesta.json())
                .then(cotizaciones => {
                        const dolarBlue = cotizaciones.blue;
                        console.log(dolarBlue);
                        document.getElementById("cotizacionDolar").innerHTML += `
                        <p>Dolar compra $${dolarBlue.value_buy} | Dolar venta $${dolarBlue.value_sell}</p>
                `;
                        dolarCompra = dolarBlue.value_buy;
                        obtenerJSON();
                })
                .catch(error => console.log("error"))
}

//GETJSON de productos.json
async function obtenerJSON() {
        const urlJSON = "../mock/productos.json";
        const resp = await fetch(urlJSON);
        const data = await resp.json();
        productosJSON = data;
        //dolar y productos lanzo funcion
        tarjetasProductos();
}

//agregar productos al carrito
const agregarCarrito = (productoComprar) => {
        let estaProducto = carrito.some(existe => existe.id === productoComprar.id)
        //Sweet alert
        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: productoComprar.nombre,
                text: 'agregado al carrito!',
                showConfirmButton: false,
                timer: 1500,
                color: '#000000'
        });
        if (estaProducto === false) {
                carrito.push(productoComprar);
        } else {
                let productoComprarFind = carrito.find(productoComprarFind => productoComprarFind.id === productoComprar.id);
                productoComprarFind.cantidad++;
                productoComprarFind.precio = productoComprarFind.precio * productoComprarFind.cantidad;
        }
        cargarCarrito()
}

//renderizar en la tabla los productos agregados al carrito
function cargarCarrito() {
        document.getElementById("tBody").innerHTML = ``;
        carrito.forEach((productoComprar) => {
                document.getElementById("tBody").innerHTML += `
        <tr>
        <td>${productoComprar.nombre}</td>
        <td>${productoComprar.precio}</td>
        <td><button id='btnBorrar${productoComprar.id}' class="btn btn-ligth"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
        `;
                let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
                document.getElementById("totalPagar").innerText = `Total a pagar c/IVA incluido: $ ${totalCarrito * 1.21}`;
        });
        localStorage.setItem("elcarrito", JSON.stringify(carrito));
        borrarProducto();
}

//crear evento para cada boton borrar
function borrarProducto() {
        carrito.forEach((productoSacar) => {
                document
                        .getElementById(`btnBorrar${productoSacar.id}`)
                        .addEventListener("click", () => {
                                carrito = carrito.filter(productoSacarFilter => productoSacarFilter.id !== productoSacar.id);
                                //Sweet alert
                                Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'El producto se quitó del carrito',
                                        showConfirmButton: false,
                                        timer: 3000,
                                        color: '#000000',
                                })
                                if (carrito.length == 0) {
                                        document.getElementById("totalPagar").innerText = "";
                                }
                                cargarCarrito();
                        });
        });
}

//finalizar boton compra
btnShop.onclick = () => {
        if (carrito.length == 0) {
                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'LO SENTIMOS',
                        text: "Tu carrito está vacío, no es posible realizar la compra.",
                        showConfirmButton: false,
                        timer: 3000,
                        color: '#000000',

                })
        } else {
                carrito = [];
                document.getElementById("tBody").innerHTML = "";
                document.getElementById("totalPagar").innerText = "";
                localStorage.removeItem("elcarrito");
                sessionStorage.clear();
                console.clear();
                //LUXON
                const fin = DateTime.now();
                const entrega = fin.plus({ days: 2 });
                console.log(entrega.toLocaleString(DateTime.DATETIME_SHORT));
                //SWEET ALERT
                Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Gracias por tu compra!',
                        text: "Recibirás tu pedido el día " + entrega.toLocaleString(DateTime.DATETIME_SHORT),
                        showConfirmButton: false,
                        timer: 3000,
                        color: '#000000',
                })
        }
}