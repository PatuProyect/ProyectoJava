alert("Calculemos los metros cuadrados de sus terreno")
let nombre = prompt("Ingrese su nombre")
while (nombre == "") {
    nombre= prompt("Ingrese su nombre")
}

while (nombre != ""){
    if (nombre != 0){
    metrosAncho = prompt("Ingresa el ancho de su terreno");
    while (metrosAncho == "") {
        metrosAncho= prompt("Ingresa el ancho de su terreno")
    }
    metrosLargo = prompt("Ingresa el largo de su terreno");
    while (metrosLargo == "") {
        metrosLargo= prompt("Ingresa el largo de su terreno")
    }
    metrosTotal = (metrosLargo * metrosAncho)
    alert("Hola " + nombre + ", la cantidad de metros cuadrados de su terreno es: " + metrosTotal)
    alert("Ingrese de nuevo los datos para calcular el siguiente terreno")
}else{
    alert("No ingreso ningun dato, actualice y vuelva a intentarlo");
}
}



