alert("Conozca cuanto sale un terreno en Zona Oeste")
let nombre = prompt("Ingrese su nombre")
while (nombre == "") {
    nombre= prompt("Ingrese su nombre");
}
let elegirTerreno = prompt("Elija el tipo de su terreno \n1 - Terreno personalizado \n2 - Terreno predefinido")

if(elegirTerreno == 1){
metrosDelTerreno();
}

function metrosDelTerreno (){
    let metrosAncho = prompt("Ingresa el ancho del terreno deseado");
    while (metrosAncho == "") {
        metrosAncho= prompt("Ingresa el ancho del terreno deseado");
        }
    let metrosLargo = prompt("Ingresa el largo del terreno deseado");
    while (metrosLargo == "") {
        metrosLargo= prompt("Ingresa el largo del terreno deseado");
        }
    metrosTotal = (metrosLargo * metrosAncho)
    alert("Hola " + nombre + ", la cantidad de metros cuadrados de su terreno es: " + metrosTotal +" m2" + "\nEn Breve le informamos el costo del mismo.")
    agregarCostos();
    elegirTerreno = prompt("Desea consultar otro terreno ? \n1 - Terreno personalizado \n2 - Terreno predefinido \n3 - no")
    switch (elegirTerreno) {
        case "1":
            metrosDelTerreno();
        case "2":
            eleccionTerreno()
        case "3":
            close()
        default:
            break;
    }
    return elegirTerreno
}

function agregarCostos(){
    let precioMetros = 1000;
    let costoTerreno = precioMetros * metrosTotal;
    let impuestos = 15;
    let costoTotal = costoTerreno + ((impuestos/100)*costoTerreno);
    alert ("El precio para " +metrosTotal+" m2 es: u$d " + costoTotal);
}

class terrenoPredefinido {
    constructor (nombre, mAncho,mLargo,mTotal,precio){
        this.nombre = nombre
        this.mAncho = mAncho
        this.mLargo = mLargo
        this.mTotal = mTotal
        this.precio = precio
    }
}

const terrenoChico = new terrenoPredefinido("terreno chico",10,20,200,"$ 4.000")
const terrenoMediano = new terrenoPredefinido("terreno mediano",12,25,300,"$ 6.000")
const terrenoGrande = new terrenoPredefinido("terreno grande",20,40,800,"$ 15.000")

eleccionTerreno()

function eleccionTerreno(){
    let terrenoElegido = prompt("Elija el que terreno que desea: \n1 - Terreno chico \n2 - Terreno mediano \n3 - Terreno grande")
    while(terrenoElegido > 3 || isNaN(terrenoElegido)){
        alert("Eligio una opcion no valida")
        terrenoElegido = prompt("Por favor elija su tipo de terreno: \n1 - Terreno chico \n2 - Terreno mediano \n3 - Terreno grande")
    }
    return terrenoElegido
}

switch (eleccionTerreno()) {
    case "1":
        console.log(terrenoChico)
        break;
    case "2":
        console.log(terrenoMediano)
        break;
    case "3":
        console.log(terrenoGrande)
        break;
    default:
        break;
}

const array = []

array.push(terrenoChico)
array.push(terrenoGrande)
array.push(terrenoMediano)















