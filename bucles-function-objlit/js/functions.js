function rectangulo (alto, ancho) {
    let area= alto * ancho;
    return area;
 }
 
const areaRect = rectangulo(2,3);
console.log(areaRect);

function triangulo (base, altura) {
    let area= (base * altura)/2;
    return area
 }
 
const tria = triangulo(2,3);
console.log(tria);
 

function largoDelArray(array) {
    let numElems = array.length;
    return numElems;
}

const lararr = largoDelArray([1, 2, 3, 4, 5, 6, 7]);
console.log(lararr);


function cantidadDeLetras(palabra) {
    return palabra.length;
}

const canlet = cantidadDeLetras("holis");
console.log(canlet);
 
function dolarHoy (precio) {
    let precioUsd= (precio * 11000) + "usd";
    return precioUsd;
}
 
const dol = dolarHoy(1100);
console.log(dol);
 

function mitad (numero) {
    return numero/2;
}
 
const mid = mitad(4)
console.log(mid);
 
function diaSegunNumero (array, numero) {
    let dia = array[numero];
    return dia;
}

 const diasegu = diaSegunNumero(["lun","mar","mier","juev"], 2)
 console.log(diasegu);
 
 /*
function calculadora (num1, num2, operacion) {

}
*/

function siguiente(numero) {
    return numero + 1;
  }
  
  function doble(numero) {
    return 2 * numero;
  }
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }

function anterior(numero) {
   return numero--;
}

const ante = anterior(4)
console.log(ante);

function triple(numero) {
    return numero*3;
 }

 const trip = triple(4)
 console.log(trip);

function anteriorDelTriple(numero){
    let pil = numero * 3;
    return pil--;
}

const antetrip = anteriorDelTriple(4)
console.log(antetrip);