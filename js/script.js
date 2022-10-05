/* nombre = prompt("Como te llamas?");
let fecha = parseInt(prompt("Hola "+nombre+"! por favor escribe en que año naciste."));
let currentTime = new Date()
let edades = currentTime.getFullYear()
menu = "";
let sumaNumeros = edades - fecha;

ProductosA= "PPL Eater (Púrpura) + Blue Ruin (Azul)";
ProductosB= "Riot (Naranja) + Steal My Sunshine (Amarillo)";
ProductosC= "Pink Puff (Rosa Pastel) + Stoned Pony (Lila Pastel)";


const CostoProductosA = 122;
const CostoProductosB = 118;
const CostoProductosC = 202;

function ivaA(peso){
    let impuesto = ((CostoProductosA * .21)+CostoProductosA);
    return impuesto;
}

function ivaB(peso){
    let impuesto = ((CostoProductosB * .21)+CostoProductosB);
    return impuesto;
}

function ivaC(peso){
    let impuesto = ((CostoProductosC * .21)+CostoProductosC);
    return impuesto;
}


if (sumaNumeros >=18){
    console.log("Excelente! tienes "+sumaNumeros+" años, tienes edad suficiente para comprar y usar nuestros productos.");
    alert("Ya eres mayor de edad, puedes comprar nuestros productos.")
    let menu = prompt("Gracias "+nombre+"! Como bienvenida a nuestro sitio te damos a elegir una gama de colores con la que te identifiques y te daremos dos colores de tintura en promocion!\n 1. Colores fríos.\n 2. Colores cálidos.\n 3. Colores pasteles.\n Presiona S para salir.");
    
    while (menu !="S"){
    switch(menu){
    case"1":
    alert("Tus productos son "+ProductosA+". Tiene un costo de "+CostoProductosA);
    let compraA = prompt("Escribe C para comprar "+ProductosA);
    if (compraA ==="C"){
        let totalA = ivaA(CostoProductosA);
        alert("Precio total es de $"+totalA);
        }
    else{
    compraA=alert("Si lo compras? Escribe C")
    }
    break;
    case"2":
    alert("Tus productos son "+ProductosB+". Tiene un costo de "+CostoProductosB);
    let compraB = prompt("Escribe C para comprar "+ProductosB);
    if (compraB ==="C"){
        let totalB = ivaB(CostoProductosB);
        alert("Precio total es de $"+totalB);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    case"3":
    alert("Tus productos son "+ProductosC+". Tiene un costo de "+CostoProductosC);
    let compraC = prompt("Escribe C para comprar "+ProductosC);
    if (compraC ==="C"){
        let totalC = ivaC(CostoProductosC);
        alert("Precio total es de $"+totalC);
    }else{
    compraB=alert("Si lo compras? Escribe C")
    } break;
    default:
    alert("Número inválido. Escribe solo un número para elegir la gama de colores con la que te identifiques y te daremos dos colores de tintura en promocion!\n 1. Colores fríos.\n 2. Colores cálidos.\n 3. Colores pasteles.\n Presiona S para salir.");
    break;
    }
    menu = prompt("Gracias "+nombre+" elige una gama de colores con la que te identifiques y te daremos dos colores de tintura en promocion!\n 1. Colores fríos\n 2. Colores cálidos.\n 3. Colores pasteles.\n Presiona S para salir.");
    }
    
    }else{
    alert("No eres mayor de edad. No puedes comprar nuestros productos ya que podrían ser tóxicos para menores de edad.");
    
    } */