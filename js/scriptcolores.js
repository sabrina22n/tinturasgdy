/* const coloresVividos = [
        {
                color: "Rojo", background: "#F22A35", fotohover: "../images/rojo.png"
        },
        {
                color: "Fucsia", background: "#F22B90", fotohover: "../images/fucsia.jpeg"
        },
        {
                color: "Naranja", background: "#FF522D", fotohover: "../images/riot.png"
        },
        {
                color: "Amarillo", background: "#FBFE56", fotohover: "../images/amarillo.png"
        },
        {
                color: "Verde", background: "#01CD0D", fotohover: "../images/verde.png"
        },
        {
                color: "Azul", background: "#0056FC", fotohover: "../images/azul.png"
        },
        {
                color: "Violeta", background: "#8A00E3", fotohover: "../images/purpura.png"
        },
        {
                color: "Celeste", background: "#00B6B8", fotohover: "../images/celeste.png"
        },
];

const coloresPastel = [
        {
                color: "Rosa pastel", background: "#FF8AA5", fotohover: "../images/pink.png"
        },
        {
                color: "Lila pastel", background: "#C096E5", fotohover: "../images/lila.png"
        },
        {
                color: "Naranja pastel", background: "#FFC37A", fotohover: "../images/naranjapastel.png"
        },
        {
                color: "Verde Pastel", background: "#0EFFA9", fotohover: "../images/verdepastel.png"
        },
];


const coloresV = document.getElementById("coloresV")
const coloresP = document.getElementById("coloresP")

coloresVividos.forEach((color) => {
                coloresV.innerHTML += `
                <div class="divColores">
                <div>
                        <div class="div1">
                                <div class="colorFondo"></div>
                        <div class="div2">
                                <img class="imgHover" src="${color.fotohover}"></img>
                        </div>
                        </div>
                </div>
                <h2 class="tituloColor">
                        ${color.color}
                </h2>
        </div>
`;
});

let divColores = document.getElementsByClassName("divColores");
coloresV.innerHTML.style=“background:${coloresVividos.background}“ */

