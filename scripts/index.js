
let nombre = prompt("Ingrese su nombre")

let contenedorTitulo = document.getElementById("contenedorTitulo")
let titulo = document.createElement("h1")
titulo.innerHTML = "Bienvenido " + nombre.toUpperCase() + " a la venta de terrenos en Argentina"
contenedorTitulo.append(titulo)

const tiposTerrenos = [{
    id: "1",
    category: "terrenos",
    details: "Ancho 10mts \nAlto 20 mts \nM2 Total: 200",
    name: "Terreno Chico",
    price: 4000,
    img: "./assets/imagenes/productos/terrenochico.jpg",
},{
    id: "2",
    category: "terrenos",
    details: "Ancho 12mts \nAlto 25 mts \nM2 Total: 300",
    name: "Terreno Mediano",
    price: 6000,
    img: "./assets/imagenes/productos/terrenomediano.jpg"
},{
    id: "3",
    category: "terrenos",
    details: "Ancho 20 mts \nAlto 40 mts \nM2 Total: 800",
    name: "Terreno Grande",
    price: 9000,
    img: "./assets/imagenes/productos/terrenogrande.jpg"
}]

function mostrarProductos() {
    tiposTerrenos.forEach((product) => {
        let card = document.createElement("div")
        card.setAttribute("class", "boxProducto")
        conteiner.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        img.setAttribute("class","imagenProducto")
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let details = document.createElement("p")
        details.innerText = (product.details)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Conosca mas sobre este terreno")
        card.append(img, name, price, details, buyButton)
    })
}

mostrarProductos()

console.log(tiposTerrenos)


