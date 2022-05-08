
// Aquí inicamos nuestro HTML

function perimetroCuadrado(lado) {
    return lado*4;
}
function areaCuadrado(lado) {
    return lado * lado;
}

//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert( perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triángulo
function calcularPerimetroTriangulo() {
    const baseTriangulo = document.getElementById("InputBaseTriangulo").value;
    const alturaTriangulo = document.getElementById("InputAlturaTriangulo").value;
    const perimetroTriangulo 
        = (Math.sqrt((alturaTriangulo*alturaTriangulo)+((baseTriangulo/2) * (baseTriangulo/2))) * 2) + baseTriangulo;
    alert(perimetroTriangulo);
}
function calcularAreaTriangulo() {
    const baseTriangulo = document.getElementById("InputBaseTriangulo").value;
    const alturaTriangulo = document.getElementById("InputAlturaTriangulo").value;
    const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
    alert(areaTriangulo);
}

//Círculo
console.group("circulo")
function calcularPerimetroCirculo() {
    const PI = Math.PI;
    const radio = document.getElementById("InputRadioCirculo").value;
    const perimetroCirculo= (radio * 2) * PI;
    alert (perimetroCirculo);
}
console.log("El parimeotro del círculo es: 2*PI*Radio" )
function calcularAreaCirculo() {
    const PI = Math.PI;
    const radio = document.getElementById("InputRadioCirculo").value;
    const areaCirculo= (radio *  radio) * PI;
    alert (areaCirculo);
}
console.log("El área del círculo es: PI*Radio^2");
console.groupEnd();
