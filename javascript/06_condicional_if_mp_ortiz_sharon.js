console.log("Condicional If - Línea de Taxis");
let bateria = 50;
console.log("Condicional simple If");
if (bateria >= 0) {
    console.log(
        "Tienes batería suficiente en la unidad para continuar los servicios"
    );
}

console.log("Condicional If-Else Dos Caminos");
let combustible = 400;
if (combustible >= 0) {
    console.log("Tienes suficiente combustible para continuar la ruta");
} else {
    console.log("No tienes suficiente combustible para continuar la ruta");
}

console.log("Condicional If-Else If-Else Multiples Caminos");
let zonaServicio = "Norte";
if (zonaServicio === "Norte") {
    console.log("Estás operando en el sector norte.");
} else if (zonaServicio === "Sur") {
    console.log("Estás operando en el sector sur.");
} else {
    console.log("Estás operando en un sector desconocido.");
}

console.log("Condicional If Anidado");
let bateria2 = 50;
let combustible2 = 400;
if (bateria2 >= 0) {
    if (combustible2 >= 0) {
        console.log("Tienes suficiente batería y combustible para continuar el turno");
    } else {
        console.log("Tienes suficiente batería pero no suficiente combustible para continuar el turno");
    }
}

console.log("Control de salidas de unidades");
let combustible4 = 400;
let bateria4 = 50;
let conductor_disponible = "si";
let auxiliar_disponible = "no";
let vehiculo_averiado = "no";

if (combustible4 >= 50 && 
bateria4 >= 50 &&
(conductor_disponible === "si" || 
auxiliar_disponible === "si") && 
!(vehiculo_averiado === "si")) 
{
    console.log("Salida de unidad autorizada.");
} else {
    if (combustible4 < 50)
    {
        console.log("No puedes salir a ruta, no tienes suficiente combustible.");
    }
    if (bateria4 < 50)
    {
        console.log("No puedes salir a ruta, no tienes suficiente batería.");
    }
    if (conductor_disponible === "no")
    {
        console.log("No puedes salir a ruta, el conductor no está disponible.");
    }
    if (auxiliar_disponible === "no")
    {
        console.log("No puedes salir a ruta, el auxiliar no está disponible.");
    }
    if (vehiculo_averiado === "si")
    {
        console.log("No puedes salir a ruta, el vehículo está averiado.");
    }
    if (conductor_disponible === "no" && auxiliar_disponible === "no")
    {
        console.log("No puedes salir a ruta, ningún tripulante está disponible.");
    }
}

console.log("Misión de la Cooperativa");
let carrerasObjetivo = 200;
let carrerasRealizadas = 150;
let combustibleInicial = 1000;
let combustibleConsumido = 800;
let clienteIncidente = "no";
let vehiculoAveriado = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (carrerasRealizadas / carrerasObjetivo) * 100;
let combustibleRestante = combustibleInicial - combustibleConsumido;

console.log("RESULTADOS DEL TURNO");
if (porcentajeCumplimiento >= 90) {
    console.log("Meta cumplida con éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Meta cumplida parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Meta regular. Se requiere mejorar el desempeño");
} else {
    console.log("Meta fallida. Se requiere mejorar el desempeño");
}

console.log("Evaluación de regreso a central");
if (clienteIncidente === "no" && vehiculoAveriado === "no") {
    console.log("Regreso seguro a la base principal.");
} else if (clienteIncidente === "si" && vehiculoAveriado === "no") {
    console.log("Regreso con reporte de pasajero a la base principal.");
} else if (clienteIncidente === "no" && vehiculoAveriado === "si") {
    console.log("Regreso con vehículo averiado a la base principal.");
} else {
    console.log("Regreso con incidente y vehículo averiado a la base principal.");
}

console.log("Evaluación de la jornada");
console.log("Carreras objetivo:", carrerasObjetivo);
console.log("Carreras realizadas:", carrerasRealizadas);
console.log("Porcentaje de cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Combustible inicial:", combustibleInicial);
console.log("Combustible consumido:", combustibleConsumido);
console.log("Combustible restante:", combustibleRestante);
console.log("Cliente con incidente:", clienteIncidente);
console.log("Vehículo averiado:", vehiculoAveriado);
console.log("Bonificación obtenida:", bonificacion);