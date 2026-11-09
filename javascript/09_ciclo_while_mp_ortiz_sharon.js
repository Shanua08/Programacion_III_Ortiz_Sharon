console.log("Encendiendo sistemas de la unidad de taxi ... ");
let sistema = 1;
while(sistema <= 5){
    console.log("Activando sistema " + sistema + ".");
    sistema++;
}
console.log("Todos los sistemas de la unidad han sido activados");

let bateriaUnidad = 20;
let recarga = 10;
let totalRecargas = 0;

while (bateriaUnidad < 100) {
    bateriaUnidad += recarga;
    totalRecargas++;
    console.log("Recargando batería... Nivel de energía: " + bateriaUnidad + "%");
}

console.log("Batería de la unidad completamente recargada después de " + totalRecargas + " recargas.");

console.log("Consumo de Combustible de la unidad de taxi:");
let combustible = 100;
let consumo = 45;
let viajes = 0;

while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje " + viajes + " realizado. Combustible restante = " + combustible + "%");
    if(combustible < 50){
        console.log("Advertencia: Combustible bajo. Nivel actual " + combustible + "%");
    }
}

console.log("No hay suficiente combustible para otro viaje.");
console.log("Total de viajes realizados: " + viajes);

console.log("Activar rutas por sectores complejos con do ... while:");
let energiaRuta = 50;
do {
    console.log("Realizando ruta por sector complejo. Nivel de energía: " + energiaRuta + "V");
    energiaRuta -= 15;
} while (energiaRuta > 0);
console.log("No hay suficiente energía para más rutas complejas.");

console.log("Ahorro para mantenimiento de la unidad de taxi");
let ahorros = 800;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorros += ahorroSemanal;
    semanas++;
    console.log("Semana " + semanas + ": Ahorro actual: " + ahorros + " unidades.");
} while (ahorros < meta);
console.log("Meta de ahorro alcanzada en " + semanas + " semanas. Total ahorrado: " + ahorros);