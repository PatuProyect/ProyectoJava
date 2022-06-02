alert("Conozca cuanto sale un terreno en Zona Oeste")
let nombre = prompt("Ingrese su nombre")
while (nombre == "") {
    nombre= prompt("Ingrese su nombre");
}

metrosDelTerreno();

function metrosDelTerreno (){
    metrosAncho = prompt("Ingresa el ancho del terreno deseado");
    while (metrosAncho == "") {
        metrosAncho= prompt("Ingresa el ancho del terreno deseado");
        }
        metrosLargo = prompt("Ingresa el largo del terreno deseado");
    while (metrosLargo == "") {
        metrosLargo= prompt("Ingresa el largo del terreno deseado");
        }
    metrosTotal = (metrosLargo * metrosAncho)
    alert("Hola " + nombre + ", la cantidad de metros cuadrados de su terreno es: " + metrosTotal +" m2" + "\nEn Breve le informamos el costo del mismo.")
    agregarCostos();
    alert("Ingrese de nuevo los datos para calcular el costo de un nuevo terreno")
    }


while ((metrosAncho != 0) || metrosLargo != 0){
    metrosDelTerreno();
}

function agregarCostos(){
    let precioMetros = 1000;
    let costoTerreno = precioMetros * metrosTotal;
    let impuestos = 15;
    let costoTotal = costoTerreno + ((impuestos/100)*costoTerreno);
    alert ("El precio para " +metrosTotal+" m2 es: u$d " + costoTotal);
}

