for (let i = 0; i < 5; i++) {
    console.log("Practicando con el bucle for");
}

for (let i = 0; i < 10; i++) {
    console.log(`La variable i tiene el valor ${i}`);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 5; i <= 250; i += 5) {
    console.log(i);
}

for (let i = 100; i >= 0; i--) {
    console.log(i);
}


let base = 7;
let resultados = [];

for (let i = 1; i <= 10; i++) {
    resultados.push(base * i); 
}

console.log(resultados);

let ganancias = [3, -20, 200, -35, 350, -2, 300, -400, 300, -50]; 
let suma = 0;

for (let i = 0; i < ganancias.length; i++) {
    suma += ganancias[i];
}

console.log("Valor de la suma de las ganancias es:", suma);

let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
];

console.log("Lista de temas:");
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(healingIsDifficult[i]);
}

console.log("Lista de temas con número de orden del track:");
for (let i = 0; i < healingIsDifficult.length; i++) {
    console.log(`${i + 1} ${healingIsDifficult[i]}`);
}


let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

console.log("Saludos a los viajeros:");
for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    let nombreCompleto = `${persona.nombre} ${persona.apellido}`;
    console.log(`Hola ${nombreCompleto}, criatura viajera!`);
}

console.log("Presentación de los residentes:");
for (let i = 0; i < got.length; i++) {
    let persona = got[i];
    let nombreCompleto = `${persona.nombre} ${persona.apellido}`;
    let ciudad = persona.ciudad "desconocida";
    console.log(`Soy ${nombreCompleto} de la ciudad ${ciudad}`);
}