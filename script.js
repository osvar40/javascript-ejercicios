//actividad en clase
//punto uno 452
/*Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/
/*let precio = prompt("Introduce el precio de la compra:");
let descuento = precio * 0.25;
let precioFinal = precio - descuento;
alert("El precio final con descuento es: " + precioFinal);*/

/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/ 
/*let capital = 50000;
let interes = capital * 0.02;
let capitalFinal = capital + interes;
alert("El capital final después de un mes es: " + capitalFinal);*/

/*Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/
/*let parcial1 = parseFloat(prompt("Introduce la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Introduce la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Introduce la calificación del tercer parcial:"));
let examenFinal = parseFloat(prompt("Introduce la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Introduce la calificación del trabajo final:"));
let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
alert("La calificación final en Algoritmos es: " + calificacionFinal);*/

/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. */
/*let precioCompra = parseFloat(prompt("Introduce el precio de compra del artículo:"));
let ganancia = precioCompra * 0.30;
let precioVenta = precioCompra + ganancia;
alert("El precio de venta para obtener una ganancia del 30% es: " + precioVenta);*/


/*Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/
/*let kilometrosRecorridos = parseFloat(prompt("Introduce los kilómetros recorridos:"));
let minutos = parseFloat(prompt("Introduce los minutos de la carrera:"));
let costoKilometros = kilometrosRecorridos * 15000;
let costoMinutos = minutos * 2000;
let montoTotal = costoKilometros + costoMinutos;
alert("El monto total a pagar por la carrera es: " + montoTotal);*/

/*Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/
/*let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let numero3 = parseFloat(prompt("Introduce el tercer número:"));
let cuadrado1 = numero1 * numero1;
let cuadrado2 = numero2 * numero2;
let cuadrado3 = numero3 * numero3;
alert("El cuadrado del primer número es: " + cuadrado1);
alert("El cuadrado del segundo número es: " + cuadrado2);
alert("El cuadrado del tercer número es: " + cuadrado3);*/

/* En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

/*let presupuestoAnual = parseFloat(prompt("Introduce el presupuesto anual del hospital:"));
let ginecologia = presupuestoAnual * 0.40;
let traumatologia = presupuestoAnual * 0.30;
let pediatria = presupuestoAnual * 0.30;
alert("El presupuesto para Ginecología es: " + ginecologia);
alert("El presupuesto para Traumatología es: " + traumatologia);
alert("El presupuesto para Pediatría es: " + pediatria);*/

/*Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

/*let inversion1 = parseFloat(prompt("Introduce la inversión de la primera persona:"));
let inversion2 = parseFloat(prompt("Introduce la inversión de la segunda persona:"));
let inversion3 = parseFloat(prompt("Introduce la inversión de la tercera persona:"));
let totalInversion = inversion1 + inversion2 + inversion3;
let porcentaje1 = (inversion1 / totalInversion) * 100;
let porcentaje2 = (inversion2 / totalInversion) * 100;
let porcentaje3 = (inversion3 / totalInversion) * 100;
alert("El porcentaje de inversión de la primera persona es: " + porcentaje1 + "%");
alert("El porcentaje de inversión de la segunda persona es: " + porcentaje2 + "%");
alert("El porcentaje de inversión de la tercera persona es: " + porcentaje3 + "%");*/

/*Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/

/*let num1 = parseFloat(prompt("Introduce el primer numero:"));
let num2 = parseFloat(prompt("Introduce el segundo numero:"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
alert("Suma: " + sum);
alert("Resta: " + difference);
alert("Multiplicación: " + product);
alert("División: " + quotient);*/

//estructura de controls

//declarar dos variables una que sea su nombre y la otra su edad y mostrar si es mayor de edad o no 
/*
el usuario digite su nombre y edad con la siguiente de verificacion 
1 a 18 años es joven 
19 a 40 años es adulto
41 a 60 años es maduro 
61 en adelante es anciano 


let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt("Ingrese su edad "));

if (edad <= 18) {

    alert("Hola: " + nombre + " eres una persona joven");
}else if (edad <=40){

    alert("Hola: " + nombre + " eres  una persona adulta");
}else if (edad <=60){

    alert("Hola: " + nombre + " eres  una persona madura");
}else{
    alert("Hola: " + nombre + " eres  una persona anciana");
}
*/

//CICLO WHILE

//declarar una variable numerica que muestre la cuenta regresiva a llegar a  0 

// iniciamos la variable fuera del bucle
/*let cuentaAtras = parseInt(prompt("Ingrese un numero"));

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  document.write(cuentaAtras+'<br>')
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras --
}
document.write('¡Despegue! 🚀')*/

//DO WHILE
/*Imprimir 5 edades de diferentes personas y determinar sin mayores de edad
let personas=0

do{
    let nombre=prompt("Ingrese su nombre");
    let edad=parseInt(prompt("Ingrese su edad"));
    if(edad>=18){
        alert(nombre + "eres mayor de edad");
    }else{
        alert(nombre +" eres menor de edad");
    }
    personas++;

}while(personas<5)
    alert ("se registraron" + persona + "personas")
    alert("fin del programa")*/

//FOR

/*Imprimir las tablas de multi´licar del numero que el usuario ingrese hasta el numero 10,
mostrar en pantalla la siguiente sintaxi
ejemplo

5x1=5
5x2=10
5x3=15
5x4=20
5x5=25
5x6=30
5x7=35
5x8=40
5x9=45
5x10=50
*/
// Solicitar al usuario que ingrese un número
/*let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

Imprimir la tabla de multiplicar del número ingresado
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + "x" + i +  "=" + resultado + "<br>");
}
*/
//Ejercicio 
/*Programa que dada la edad de una persona indique si es mayor o menor deedad. Se considera mayor de edad a partir de los 18 años.
// Solicitar la edad de la persona
let edad = prompt("Por favor, ingresa tu edad:");

// Convertir la entrada a número
edad = parseInt(edad);

// Verificar si es mayor o menor de edad
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}
//Ejercicio 3//
/*Dado dos números A y B, determinar si A es mayor, menor o igual que B
// Solicitar los dos números A y B
let A = parseFloat(prompt("Ingresa el primer número (A):"));
let B = parseFloat(prompt("Ingresa el segundo número (B):"));

// Comparar los números
if (A > B) {
    console.log("A es mayor que B.");
} else if (A < B) {
    console.log("A es menor que B.");
} else {
    console.log("A es igual a B.");
}

//Ejercicio 5//
/* Dado el peso de una persona:
a) Si el peso es menor o igual a 40 Kg. Muestre mensaje: Persona Baja de
Peso;
b) Si el peso es entre 41 y 70 Kg. Muestre el mensaje: Persona peso
promedio;
c) Si el peso es mayor a 71 Kg. Muestre el mensaje: “Persona con sobrepeso”
// Solicitar el peso de la persona
let peso = parseFloat(prompt("Ingresa el peso de la persona en Kg:"));

// Evaluar el peso y mostrar el mensaje correspondiente
if (peso <= 40) {
    console.log("Persona baja de peso.");
} else if (peso >= 41 && peso <= 70) {
    console.log("Persona peso promedio.");
} else {
    console.log("Persona con sobrepeso.");
}
//Ejercicio 7//
/*En un almacén se hace un 20% de descuento a los clientes cuya compra
supere los $1000, a los demás solo se les hace un 5% de descuento ¿ Cuál
será la cantidad que pagara una persona por su compra?
function calcularTotalPago() {
    // Leer el valor de la compra
    let compra = parseFloat(prompt("Ingrese el monto de su compra:"));

    // Definir el porcentaje de descuento según la compra
    let descuento;

    if (compra > 1000) {
        descuento = 0.20;  // 20% de descuento si la compra es mayor a $1000
    } else {
        descuento = 0.05;  // 5% de descuento si la compra es menor o igual a $1000
    }

    // Calcular el monto del descuento
    let montoDescuento = compra * descuento;

    // Calcular el total a pagar
    let totalAPagar = compra - montoDescuento;

    // Mostrar el total a pagar
    console.log("El total a pagar después del descuento es: $" + totalAPagar.toFixed(2));
}

// Llamar a la función para ejecutar el programa
calcularTotalPago();

//Ejercicio 9//
/*Programa que lea los nombres y edades de dos personas e imprima cuál de
ellas tiene más edad.
function compararEdades() {
    // Pedir los datos de las dos personas
    let nombre1 = prompt("Ingrese el nombre de la primera persona:");
    let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1 + ":"));

    let nombre2 = prompt("Ingrese el nombre de la segunda persona:");
    let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2 + ":"));

    // Comparar las edades
    if (edad1 > edad2) {
        console.log(nombre1 + " es mayor que " + nombre2 + ".");
    } else if (edad2 > edad1) {
        console.log(nombre2 + " es mayor que " + nombre1 + ".");
    } else {
        console.log("Ambas personas tienen la misma edad.");
    }
}

// Llamar a la función para ejecutar el programa
compararEdades();
//Ejercicio 11/
/*11.Leer 2 números; si son iguales que los multiplique, si el primero es mayor
que el segundo que los reste y si no que los sume.
function operarNumeros() {
    // Leer los dos números
    let numero1 = parseInt(prompt("Ingrese el primer número:"));
    let numero2 = parseInt(prompt("Ingrese el segundo número:"));

    // Realizar las operaciones según las condiciones
    let resultado;
    if (numero1 === numero2) {
        resultado = numero1 * numero2; // Si son iguales, multiplicar
        console.log("Los números son iguales. El resultado de multiplicarlos es: " + resultado);
    } else if (numero1 > numero2) {
        resultado = numero1 - numero2; // Si el primero es mayor, restar
        console.log("El primer número es mayor que el segundo. El resultado de restarlos es: " + resultado);
    } else {
        resultado = numero1 + numero2; // Si el primero es menor, sumar
        console.log("El primer número es menor que el segundo. El resultado de sumarlos es: " + resultado);
    }
}

// Llamar a la función para ejecutar el programa
operarNumeros();
//Ejercicio 13//
/*Escribe un programa que determine si un número ingresado por el usuario
es par o impar.
function verificarParImpar() {
    // Leer el número ingresado por el usuario
    let numero = parseInt(prompt("Ingrese un número:"));

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        console.log("El número " + numero + " es par.");
    } else {
        console.log("El número " + numero + " es impar.");
    }
}

// Llamar a la función para ejecutar el programa
verificarParImpar();
//Ejercicio 15/
/*Crea un programa que solicite un número y verifique si es positivo, negativo
o igual a cero.
function verificarNumero() {
    // Solicitar un número al usuario
    let numero = parseFloat(prompt("Ingrese un número:"));

    // Verificar si el número es positivo, negativo o igual a cero
    if (numero > 0) {
        console.log("El número " + numero + " es positivo.");
    } else if (numero < 0) {
        console.log("El número " + numero + " es negativo.");
    } else {
        console.log("El número es igual a cero.");
    }
}

// Llamar a la función para ejecutar el programa
verificarNumero();
//Ejercicio 17//
/*17.Escribe un programa que permita al usuario seleccionar una figura
geométrica (triángulo y cuadrado) y luego calcule el área de esa figura
ingresando los datos necesarios para cada caso.
function calcularAreaFigura() {
    // Solicitar al usuario que seleccione una figura geométrica
    let figura = prompt("Seleccione una figura geométrica: Triángulo o Cuadrado").toLowerCase();

    if (figura === "triángulo") {
        // Si la figura es un triángulo, solicitar base y altura
        let base = parseFloat(prompt("Ingrese la base del triángulo:"));
        let altura = parseFloat(prompt("Ingrese la altura del triángulo:"));

        // Calcular el área del triángulo
        let areaTriangulo = (base * altura) / 2;

        // Mostrar el resultado
        console.log("El área del triángulo es: " + areaTriangulo.toFixed(2));
        
    } else if (figura === "cuadrado") {
        // Si la figura es un cuadrado, solicitar el lado
        let lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));

        // Calcular el área del cuadrado
        let areaCuadrado = lado * lado;

        // Mostrar el resultado
        console.log("El área del cuadrado es: " + areaCuadrado.toFixed(2));
        
    } else {
        // Si no se seleccionó una figura válida
        console.log("Figura no válida. Por favor, seleccione 'Triángulo' o 'Cuadrado'.");
    }
}

// Llamar a la función para ejecutar el programa
calcularAreaFigura();
//Ejercicio 19//
/*Diseña un programa que solicite el nombre de un usuario y su contraseña. Si
el nombre es "admin" y la contraseña es "12345", muestra un mensaje de
acceso concedido; de lo contrario, muestra un mensaje de acceso denegado.
function verificarAcceso() {
    // Solicitar el nombre de usuario
    let nombreUsuario = prompt("Ingrese su nombre de usuario:");

    // Solicitar la contraseña
    let contrasena = prompt("Ingrese su contraseña:");

    // Verificar si el nombre de usuario y la contraseña son correctos
    if (nombreUsuario === "admin" && contrasena === "12345") {
        console.log ("Acceso concedido.");
    } else {
        console.log("Acceso denegado.");
    }
}

// Llamar a la función para ejecutar el programa
verificarAcceso();
if 
//FUNCIONES 

function saludar(){
    document.write("Probando estas funciones")
}
saludar();


//Ejerccios
/*function sumar(){
    return 6+8;
}
    const resultado = sumar();
    alert(resultado);*/

    /*function getRandomNumber() {
        // recuperamos un número aleatorio entre 0 y 1
        const random = Math.random() // por ejemplo: 0.6803487380457318
      
        // lo multiplicamos por 10 para que esté entre 0 y 10
        const multiplied = random * 10 // -> 6.803487380457318
      
        // redondeamos hacia abajo para que esté entre 0 y 9
        const rounded = Math.floor(multiplied) // -> 6
      
        // le sumamos uno para que esté entre 1 y 10
        const result = rounded + 1 // -> 7
      
        // devolvemos el resultado
        return result
      }
      function saludar(nombre) {
        alert("Hola" + nombre);

      }
      saludar("juan");*/

      //1.FUNCIONES
      Conceptualización:
//Una función es un bloque de código diseñado para realizar una tarea específica.Puede recibir valores de entrada, llamados parámetros, y devolver un resultado. 
// Declaración de una función simple
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
// Llamada a la función
saludar("OSCAR");  // Salida: ¡Hola, OSCAR!
 
/*1. Funciones con valor de retorno
Estas funciones realizan una tarea y devuelven un valor. El valor de retorno se especifica con la palabra clave return.
Se utilizan cuando queremos que una función haga un cálculo o una operación y nos devuelva el resultado para usarlo más tarde.*/

// Función con valor de retorno
function sumar(a, b) {
  return a + b;
}
let resultado = sumar(3, 4);
console.log(resultado); // 7


/*2. Funciones anónimas
Son funciones que no tienen un nombre. Se pueden usar para ser pasadas como argumentos a otras funciones o asignarlas a variables.*/

// Función anónima asignada a una variable
let multiplicar = function(a, b) {
  return a * b;
};

console.log(multiplicar(2, 5)); // 10
/*3. Funciones flecha 
Son una forma más compacta de escribir funciones en JavaScript. Usan la sintaxis () => 
Son útiles cuando queremos escribir funciones de manera más concisa, especialmente para tareas simples o funciones callback.*/

// Función flecha
const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // 5
/*4. Funciones recursivas
Una función recursiva es aquella que se llama a sí misma en su propio cuerpo. 
Es útil para resolver problemas que se dividen en subproblemas más pequeños, como en el caso de estructuras de datos como árboles o problemas matemáticos.
Se usan cuando un problema puede descomponerse en subproblemas similares y se quiere resolver de forma repetitiva, como al calcular.*/

// Función recursiva para calcular el factorial de un número
function factorial(n) {
  if (n === 0) {
    return 1; // Caso base
  } else {
    return n * factorial(n - 1); // Llamada recursiva
  }
}

console.log(factorial(5)); // 120

/*2.Arreglos (Arrays) en JavaScript
Un arreglo (o array) es una estructura de datos que permite almacenar múltiples valores en una sola variable. 
Los arreglos en JavaScript son dinámicos y pueden contener diferentes tipos de datos (números, cadenas, objetos, etc.).*/

// Definición de un arreglo con números
let numeros = [1, 2, 3, 4, 5];

console.log(numeros); // Imprime [1, 2, 3, 4, 5]

/*1. Cadena (String)
¿Para qué sirve?
Una cadena (o string) en JavaScript es una secuencia de caracteres que se utiliza para representar texto. 
Las cadenas pueden ser definidas entre comillas simples (' ') o dobles (" "), y se pueden manipular de varias maneras.*/

// Definición de una cadena
let saludo = "Hola, ¿cómo estás?";

console.log(saludo); // Imprime: Hola, ¿cómo estás?

/*2. Booleano (Boolean)
El tipo de dato Boolean en JavaScript tiene solo dos valores posibles: true (verdadero) o false (falso). 
Se utiliza principalmente para realizar comparaciones y controlar el flujo de ejecución (condiciones y bucles).*/

// Definición de un valor booleano
let esMayorDeEdad = true; // true significa que la persona es mayor de edad

console.log(esMayorDeEdad); // Imprime: true

/*3. Número (Number)
¿Para qué sirve?
El tipo de dato Number representa valores numéricos, tanto enteros como decimales. JavaScript maneja un solo tipo de número para enteros y flotantes, lo cual es conveniente para cálculos.*/

let a = 10;
let b = 5;

// Sumar
let suma = a + b;
console.log(suma); // Imprime: 15

// Restar
let resta = a - b;
console.log(resta); // Imprime: 5

// Multiplicar
let multiplicacion = a * b;
console.log(multiplicacion); // Imprime: 50

// Dividir
let division = a / b;
console.log(division); // Imprime: 2
/*4. Objetos (Object)
Un objeto en JavaScript es una colección de propiedades y métodos que se agrupan bajo un mismo nombre.
 Un objeto puede contener diferentes tipos de datos, como cadenas, números, arreglos, y otros objetos.*/

// Definición de un objeto con propiedades y métodos
let persona = {
  nombre: "oscar",
  edad: 18,
  esEstudiante: false,
  
  // Método del objeto
  saludar: function() {
    console.log("¡Hola, mi nombre es " + this.nombre + "!");
  }
};

console.log(persona.nombre); // Imprime: Oscar
console.log(persona.edad); // Imprime: 18
persona.saludar(); // Imprime: ¡Hola, mi nombre es oscar!

/*3. Programación Orientada a Objetos (OOP)
La Programación Orientada a Objetos , es un paradigma que organiza el código en objetos.
 Un objeto es una instancia de una clase que puede contener propiedades y métodos. Esto permite la reutilización de código y la creación de software más modular y escalable.*/

// Definir una clase "Persona"
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad
    this.edad = edad; // Propiedad
  }

  // Método para saludar
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Crear una nueva instancia de Persona
const persona1 = new Persona("oscar", 18);
persona1.saludar(); // Imprime: Hola, mi nombre es Oscar y tengo  18 años.

 /*4. Manejo de Evento y el DOM (Document Object Model)
El DOM es una interfaz de programación para documentos HTML y XML. Permite acceder y modificar el contenido, 
estructura y estilo de una página web mediante JavaScript. Los eventos son acciones o sucesos que ocurren en el navegador, como hacer clic en un botón,
 mover el mouse, presionar una tecla, entre otros.*/
// Agregar un evento de clic a un botón
const boton = document.getElementById("miBoton");
boton.addEventListener("click", function() {
  alert("¡Botón clickeado!");
});

/*5. Módulos
Conceptualización:
Los módulos en JavaScript permiten dividir el código en archivos más pequeños, lo que facilita la organización y mantenimiento del código. 
Se pueden importar y exportar funciones, objetos y variables entre diferentes archivos.*/


  
  
/*6. Programación Asíncrona
Conceptualización:
La programación asíncrona permite realizar tareas en segundo plano sin bloquear la ejecución del resto del código.
 Esto es especialmente útil para manejar operaciones como la lectura de archivos, peticiones HTTP y temporizadores. En JavaScript, 
 se utilizan promesas, async/await y callbacks para manejar la asincronía.*/

// Crear una promesa que se resuelve después de 2 segundos
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operación completada");
  }, 2000);
});

// Usar la promesa
promesa.then((resultado) => {
  console.log(resultado); // Imprime: Operación completada
});

/*6. Programación Asíncrona
Concepto:
La programación asíncrona permite ejecutar tareas sin bloquear el hilo principal de ejecución, 
lo que es útil para tareas largas, como solicitudes HTTP o operaciones en bases de datos. */

// Función que devuelve una promesa
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    let exito = true; // Simulamos una condición de éxito
    if (exito) {
      resolve('Datos recibidos correctamente');
    } else {
      reject('Error al recibir los datos');
    }
  });
}

obtenerDatos()
  .then((mensaje) => console.log(mensaje)) // Si la promesa se resuelve
  .catch((error) => console.log(error));  // Si la promesa es rechazada


