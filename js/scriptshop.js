//CREO EL STOCK DE PRODUCTOS

const stockProductos = [
        {
                id: 1, color: "Rojo", precio: 2800, nombre: "'Rock Lobster'", foto: "../images/rojo1.jpeg", fotohover: "../images/rojo.png"
        },
        {
                id: 2, color: "Fucsia", precio: 2800, nombre: "'EX-Girl'", foto: "../images/fucsia1.jpeg", fotohover: "../images/fucsia.jpeg"
        },
        {
                id: 3, color: "Naranja", precio: 2800, nombre: "'Riot'", foto: "../images/riot2.png", fotohover: "../images/riot.png"
        },
        {
                id: 4, color: "Amarillo", precio: 2800, nombre: "'Steal My Sunshine'", foto: "../images/amarillo2.png", fotohover: "../images/amarillo.png"
        },
        {
                id: 5, color: "Verde", precio: 2800, nombre: "'Kowabunga'", foto: "../images/verde1.jpeg", fotohover: "../images/verde.png"
        },
        {
                id: 6, color: "Azul", precio: 2800, nombre: "'Blue Ruin'", foto: "../images/azul2.png", fotohover: "../images/azul.png"
        },
        {
                id: 7, color: "Violeta", precio: 2800, nombre: "'PPL Eater'", foto: "../images/purpura2.png", fotohover: "../images/purpura.png"
        },
        {
                id: 8, color: "Celeste", precio: 2800, nombre: "'Narwhal'", foto: "../images/celeste1.png", fotohover: "../images/celeste.png"
        },
        {
                id: 9, color: "Rosa pastel", precio: 3200, nombre: "'Pink Puff'", foto: "../images/pink2.png", fotohover: "../images/pink.png"
        },
        {
                id: 10, color: "Lila pastel", precio: 3200, nombre: "'Stoned Pony'", foto: "../images/lila2.png", fotohover: "../images/lila.png"
        },
        {
                id: 11, color: "Naranja pastel", precio: 3200, nombre: "'Peach Fuzz'", foto: "../images/naranjapastel1.png", fotohover: "../images/naranjapastel.png"
        },
        {
                id: 12, color: "Verde Pastel", precio: 3200, nombre: "'Wondermint'", foto: "../images/verdepastel1.png", fotohover: "../images/verdepastel.png"
        },
];

//TRAIGO DEL HTML MIS DIVS PARA USARLOS, Y GUARDARLOS EN EL LOCAL STORAGE

const productos = stockProductos.map((prod) => prod.color)
console.log(productos)
const carrito = JSON.parse(localStorage.getItem("Carrito")) || []

const tarjetas = document.getElementById("tarjetas")
const divCarrito = document.getElementById("carrito")

//CREO LAS TARJETAS Y ARMO LA FUNCION PARA AGREGAR AL CARRITO

function tarjetasProductos() {
        stockProductos.forEach((producto) => {
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
        });
        stockProductos.forEach((producto) => {
                document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
                        agregarAlCarrito(producto);
                });
        });
}

tarjetasProductos();

function agregarAlCarrito(producto) {
        let existe = carrito.some((productoSome) => productoSome.id === producto.id);
        if (existe === false) {
                producto.cantidad = 1;
                carrito.push(producto);
        } else {
                let findProd = carrito.find((findProducto) => findProducto.id === producto.id);
                findProd.cantidad++
        }
        alert("Has agregado al carrito " + producto.color)
        let carritoAlmacenado = JSON.stringify(carrito);
        localStorage.setItem("Carrito", carritoAlmacenado);
}