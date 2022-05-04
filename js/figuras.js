//Código del cuadrado

console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado +"cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("el perimetro del cuadrado es: "+ perimetroCuadrado + "cm");
//const areaCuadrada = ladoCuadrado *  ladoCuadrado;
//console.log("el area del cuadrado es: "+ areaCuadrada + "cm^2");

console.groupEnd();



//Código del triángulo

console.group("Triángulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

// console.log("Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     +"cm, " 
//     + ladoTriangulo2 
//     + "cm y "
//     + baseTriangulo
//     + "cm"
//  );

//  const alturaTriangulo = 5.5;
//  console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

 function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
 }

 function areaTriangulo( base, altura) {
    return (base * altura)/2;
 }

//  console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm");
//  console.log ("El área del triángulo es: " + areaTriangulo + "cm^2");

 console.groupEnd();



//Código del círculo

console.group("Círculo");
// Radio
const radioCiruclo = 4;
console.log(" El radio del círculo es: " + radioCiruclo + "cm");

// PI
const PI = Math.PI;
console.log(" Pi es: " + PI);

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return PI * (diametro);
}
// Área
function areaCirculo(radio) {
  return PI * (radio * radio);  
}
console.groupEnd();

// Aquí inicamos nuestro HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert( perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}