import { CabeceraPagina } from './Ejercicio_1';
import { Calculadora } from './Ejercicio_2';
import { Cancion } from './Ejercicio_3';
import { Cuenta } from './Ejercicio_4';
import { Empleado } from './Ejercicio_5_Empleado';

const cabecera = new CabeceraPagina('Bienvenidos a mi pagina', 'azul', 'Arial');
cabecera.establecerAlineacion('centrado');
cabecera.imprimirPropiedades();


//Ejercicio 2
const calc = new Calculadora();

// Probar los métodos de la calculadora
console.log('Suma (8 + 2):', calc.sumar(8, 2));           
console.log('Resta (12 - 2):', calc.restar(12, 2));         
console.log('Multiplicación (5 * 5):', calc.multiplicar(5, 5)); 
console.log('División (15 / 3):', calc.dividir(15, 3));    
console.log('Potencia (8 ^ 2):', calc.potencia(8, 2));     
console.log('Factorial (6!):', calc.factorial(6));         

//Ejercicio 3
// Crear una instancia de la clase Cancion
const cancion = new Cancion('Bajo el agua', 'Pop');

// Establecer el autor usando el método set
cancion.setAutor('Manuel Medrano');

// Mostrar los datos de la canción
cancion.mostrarDatos();

//Ejercicio 4
// Crear una instancia de la clase Cuenta
const cuenta = new Cuenta('Ernesto Lopez', 200, 'Ahorro', '987456321');

// Mostrar los datos de la cuenta
cuenta.mostrarDatos();

// Intentar depositar dinero
cuenta.depositar(10);  // Debe imprimir que el depósito fue exitoso
cuenta.depositar(3);   // Debe imprimir que el valor a depositar debe ser mayor a $5.00

// Intentar retirar dinero
cuenta.retirar(20);    // Debe imprimir cuánto se retiró y cuánto queda en la cuenta
cuenta.retirar(2);     // Debe imprimir que el valor a retirar debe ser mayor a $5.00
cuenta.retirar(100);   // Debe imprimir que no hay suficiente dinero en la cuenta


//Ejercicio 5
// Crear una instancia de la clase Empleado
const empleado = new Empleado('Alberto', 'Roman', 'Calle NY 256', '4875-1234', 25, 4000);

// Mostrar los datos del empleado
empleado.mostrarDatos();

// Verificar si es mayor de edad
empleado.esMayorDeEdad();
