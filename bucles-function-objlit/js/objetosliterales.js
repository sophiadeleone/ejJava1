let misDatos = {
    nombre: 'sophia',
    apellido: "de Leone",
    dni: 94633656,
    edad: 19,
    comidasFavoritas: ["salmon", "empanadas", "manzana", "marquise"],
    saludar: function () {
        return "Hola mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años. Mi primer comida favorita es " + this.comidasFavoritas[0]
    }
};

console.log(misDatos.saludar());

let auto = {
    marca: "honda",
    modelo: "HRV",
    anio: 2022,
    color: "gris",
    posicion: 0,
    avanzar: function (n){
        this.posicion += n;
        return this.posicion;
    },
    retroceder: function (n){
        this.posicion -= n;
        return this.posicion;
    } 
};

console.log(auto.posicion)


auto.avanzar(8);  
console.log(auto.posicion);  

auto.retroceder(5);
console.log(auto.posicion); 


console.log(auto.posicion)

let nuevoAuto = {
    marca: "honda",
    modelo: "HRV",
    anio: 2022,
    color: "gris",
    posicion: 0,
    moverse: function (n){
        this.posicion += n;
        return this.posicion;
    }
};

console.log(auto.posicion)


nuevoAuto.moverse(8);  
console.log(nuevoAuto.posicion);  

nuevoAuto.moverse(-5);
console.log(nuevoAuto.posicion); 


console.log(nuevoAuto.posicion)

let ironMan = {
    nombre:"Iron Man",
    equipo:"Avengers",
    poderes:["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function (y) {
        this.energia = this.energia - 10;
        return "Poder Elegido de " + this.nombre + " : " + this.poderes[y] + " . Energía restante: " + this.energia
    }
};

console.log(ironMan.getPoder(0));

let hulk = {
    nombre:"Hulk",
    equipo:"Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function (y) {
        this.energia = this.energia - 10;
        return "Poder Elegido de " + this.nombre + " : " + this.poderes[y] + " . Energía restante: " + this.energia
    }
};

console.log(hulk.getPoder(1));