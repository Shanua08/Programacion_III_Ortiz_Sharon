console.log("ciclo for");
for (let i = 1; i <= 5; i++) {
    console.log("El valor de i es: " + i);
}

console.log("cuenta regresiva salida de la unidad de taxi");
for (let i = 10; i >= 0; i--) {
    console.log("faltan " + i + " segundos para la salida de la unidad");
}

console.log("cuenta regresiva salida de la unidad con mensaje de arranque");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("Salida en curso de la unidad de taxi");
    } else {
        console.log("faltan " + i + " segundos para la salida de la unidad");
    }
}

console.log("Nivel de batería de la unidad");
let bateria = 50;
for (let i = 0; i <= 100; i += 10) {
    if (bateria >= i) {
        console.log("Nivel de batería del vehículo: " + i + "%");
    }
}

let consumoPorViaje = 10;
let totalconsumo = 0;
for (let viaje = 1; viaje <= 5; viaje++) {
    totalconsumo += consumoPorViaje;
    console.log("viaje " + viaje);
    console.log("total combustible consumido: " + totalconsumo + " unidades");
}
console.log("total combustible consumido: " + totalconsumo + " unidades");

console.log("promedio de las carreras");
let totalCarreras = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let carreras = dia * 5 + 5;
    totalCarreras += carreras;
    console.log("Dia " + dia + ": " + carreras + " carreras realizadas");
}
console.log("total de carreras realizadas: " + totalCarreras);
console.log("promedio de carreras por dia: " + (totalCarreras / dias).toFixed(2));

console.log("Sectores de la Ciudad");
let seguros = 0;
let congestionados = 0;
for (let sector = 1; sector <= 10; sector++) {
    if (sector % 2 === 0) {
        console.log("Sector " + sector + " tiene tráfico pesado");
        congestionados++;
    } else {
        console.log("Sector " + sector + " está libre");
        seguros++;
    }
}
console.log("Total de sectores libres: " + seguros);
console.log("Total de sectores con tráfico: " + congestionados);

console.log("recoleccion de pasajes del turno");
let pasajes = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let viajesexitosos = 0;
for (let i = 0; i < pasajes.length; i++) {
    total += pasajes[i];
    console.log("Viaje " + (i + 1) + ": $" + pasajes[i] + " recaudados");
    if (pasajes[i] >= 40) {
        viajesexitosos++;
    } else {
        console.log("Viaje " + (i + 1) + " bajo en ingresos, se recaudaron menos de $40");
    }
}
console.log("Total recaudado en el turno: $" + total);
console.log("Viajes exitosos: " + viajesexitosos);

console.log("Recorrer Conductores con For ... of");
const conductores = ["Carlos", "María", "Juan", "Ana", "Pedro"];
for (let conductor of conductores) {
    console.log("Conductor :", conductor);
}

let vehiculo = {
    nombre: "Taxi Ejecutivo",
    combustible: 1000,
    velocidad: 80,
    choferes: ["Carlos", "María", "Juan"]
};

for (let propiedad in vehiculo) {
    console.log(propiedad + ":", vehiculo[propiedad]);
}

console.log("Conductores asignados al vehículo");
for (let c of vehiculo.choferes) {
    console.log(c);
}

let servicios = [
    { nombre: "Servicio 1", recaudado: 90, meta: 100, conductor: "Carlos" },
    { nombre: "Servicio 2", recaudado: 80, meta: 100, conductor: "María" },
    { nombre: "Servicio 3", recaudado: 95, meta: 100, conductor: "Juan" }
];

let exitosas = 0;
for (let servicio of servicios) {
    let porcentaje = (servicio.recaudado / servicio.meta) * 100;
    console.log(servicio.nombre + " completado por " + servicio.conductor + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(servicio.nombre + " no alcanzó la meta del 90%.");
    }
}
console.log("Número de servicios exitosos: " + exitosas);

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("Número de turno par encontrado: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número de turno impar: " + i);
}
for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        console.log("Se encontró el turno 7, se detiene el ciclo.");
        break;
    }
    if (i % 2 === 0) {
        console.log("Número de turno par encontrado: " + i + ", se omite este número.");
        continue;
    }
    console.log("Número de turno impar: " + i);
}