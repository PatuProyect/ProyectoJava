
let nombre = prompt("Ingrese su nombre")

let contenedorTitulo = document.getElementById("contenedorTitulo")
let titulo = document.createElement("h1")
titulo.innerHTML = "Bienvenido " + nombre.toUpperCase() + " a la venta de terrenos en Argentina"
contenedorTitulo.append(titulo)
const carritoLista = document.getElementById("carritoLista")
const carro = document.getElementById("carrito")

const terrenosComprados = [];

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
    tiposTerrenos.forEach((terreno) => {
        let card = document.createElement("div")
        card.setAttribute("class", "boxProducto")
        conteiner.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", terreno.img)
        img.setAttribute("class","imagenProducto")
        let name = document.createElement("h3")
        name.innerText = (terreno.name)
        let price = document.createElement("p")
        price.innerText = (terreno.price)
        let details = document.createElement("p")
        details.innerText = (terreno.details)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar terreno")
        card.append(img, name, price, details, buyButton)

        buyButton.addEventListener("click",()=>{
            terrenosComprados.push(terreno)
            carritoLista.innerHTML = ""
            carrito()
        })  
    })
}
mostrarProductos()

function carrito(){
    terrenosComprados.forEach((terreno)=>{
        const listado = document.createElement('li')
        listado.innerHTML += `
        <img src="${terreno.img}">
        <h3>${terreno.name}</h3>
        <h3>$ ${terreno.price}</h3>
        <button class="sacar" id=${terreno.id}>"Eliminar del Carrito"</button>`
        carritoLista.appendChild(listado)
    })
    mostrarDetalle()
    sumaTotal()
}

function sumaTotal () {
    const subTotal = terrenosComprados.map(({price})=> price)
    const acumular = (acumulador,price)=> acumulador + price;
    let total = subTotal.reduce(acumular,0)
    return total
}

function mostrarDetalle (){
    const qTerrenos = document.getElementById("qTerrenos")
    const qPrecio = document.getElementById("qPrecio")
    qTerrenos.innerText = "Cantidad de terrenos: " + parseInt(terrenosComprados.length)
    qPrecio.innerText = "Precio total: " + sumaTotal()
}