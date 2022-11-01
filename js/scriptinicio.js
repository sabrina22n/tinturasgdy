/* //CREO LA CLASE DE PRODUCTOS

class productos{
    constructor(id,color,tintura,precio,stock){
        this.id = id;
        this.color = color;
        this.tintura = tintura;
        this.precio = precio;
        this.stock = stock;
    }

    //HAGO UN METODO PARA RESTAR STOCK AL VENDER + SUMAR IVA EN LA COMPRA
    restaStock(){
        this.stock = this.stock - 1;
        console.log("Se ha actualizado el stock")
    }

    sumaIva(){
        this.precio = (this.precio) + (this.precio * 0.21)
    }
}

//CREAMOS LOS PRODUCTOS

const prouducto0 = new productos(0,"Rojo","'Rock Lobster'",20,25);
const prouducto1 = new productos(1,"Amarillo","'Steal My Sunshine'",18,10);
const prouducto2 = new productos(2,"Naranja","'Riot'",18,17);
const prouducto3 = new productos(3,"Púrpura","'PPL Eater'",19,22);
const prouducto4 = new productos(4,"Azul","'Blue Ruin'",18,14);
const prouducto5 = new productos(5,"Rosa pastel","'Pink Puff'",25,20);
const prouducto6 = new productos(6,"Celeste pastel","'Sky High'",25,15);
const prouducto7 = new productos(7,"Verde pastel","'Wondermint'",25,10);

const misProductos = [prouducto0, prouducto1,prouducto2,prouducto3,prouducto4,prouducto5,prouducto6,prouducto7];

//MENSAJE EN PANTALLA PARA ELEGIR PRODUCTO

let mensajePantalla = "Por favor, elija el número de su producto a llevar:\n"

for (elemento of misProductos) {
    mensajePantalla += `${elemento.id} - ${elemento.color} - ${elemento.tintura} a $${elemento.precio}\n`
}

let opcionUser = parseInt(prompt(mensajePantalla));

//LUEGO DE ELEGIR EL PRODUCTO, QUE NOS MUESTRE EN PANTALLA LO QUE HA ELEGIDO - CON EL METODO FIND COMPARO EL VALOR DADO POR EL USER CON lA PROPIEDAD DEL OBJETO SELECCIONADA

const productoElegido = misProductos.find(elemento => elemento.id == opcionUser);


alert(`Has elegido ${productoElegido.color} - ${productoElegido.tintura} a $${productoElegido.precio}`)

//PREGUNTAR SI DESEA COMPRAR CON TARJETA CON UN RECARGO DEL 21%
let opcion = prompt(`Elija el medio de pago.\nSi ud paga con tarjeta se informa que se le tendrá que agregar al valor final el 21% correspondiente al IVA\n1- Efectivo\n2- Tarjeta`);

if (opcion == 1) {
    alert(`Muchas gracias por su compra, disfrute su ${productoElegido.color} ${productoElegido.tintura}`);
} else if(opcion == 2) {
    productoElegido.sumaIva();
    alert("Gracias, disfrute de su compra. El precio total mas IVA es de: $" +productoElegido.precio);
}else{
    alert("Seleccione nuevamente, no se ha procesado la compra.")
}


productoElegido.restaStock();

console.log(`Actualmente quedan ${productoElegido.stock} unidades de ${productoElegido.color}-${productoElegido.tintura}`); */