let zona = 4;
switch (zona) {
    case 1:
        console.log("Estás en el sector Norte");
        break;
    case 2:
        console.log("Estás en el sector Sur");
        break;
    case 3:
        console.log("Estás en el sector Centro");
        break;
    case 4:
        console.log("Zona Exclusiva - Línea de Taxis Sharon Ortiz");
        break;
    default:
        console.log("Estás en una zona desconocida");
}

let conductorTurno = "Carlos";
switch (conductorTurno) {
    case "Carlos":
        console.log("Hola Carlos, bienvenido a tu turno");
        break;
    case "Maria":
        console.log("Hola María, bienvenida a tu turno");
        break;
    default:
        console.log("Conductor no reconocido");
}

let nivelBateria = 50;
switch (true) {
    case (nivelBateria > 0 && nivelBateria <= 25):
        console.log("La unidad tiene batería baja");
        break;
    case (nivelBateria > 25 && nivelBateria <= 50):
        console.log("La unidad tiene batería moderada");
        break;
    case (nivelBateria > 50 && nivelBateria <= 75):
        console.log("La unidad tiene buena batería");
        break;
    case (nivelBateria > 75 && nivelBateria <= 100):
        console.log("La unidad tiene la batería llena");
        break;
    default:
        console.log("Nivel de batería desconocido");
}

console.log("Calculadora de Tarifas y Operaciones");
let valor1 = 10;
let valor2 = 5;
let operacion = "multiplicacion";
let resultado;

switch (operacion) {
    case "suma":
        resultado = valor1 + valor2;
        console.log("Resultado de la suma:", resultado);
        break;
    case "resta":
        resultado = valor1 - valor2;
        console.log("Resultado de la resta:", resultado);
        break;
    case "multiplicacion":
        resultado = valor1 * valor2;
        console.log("Resultado de la multiplicación:", resultado);
        break;
    case "division":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            console.log("Resultado de la división:", resultado);
        } else {
            console.log("Error: División por cero");
        }
        break;
    default:
        console.log("Operación no reconocida");
}

if (resultado !== undefined) {
    console.log("Resultado de la operación", operacion, ":", resultado);
}