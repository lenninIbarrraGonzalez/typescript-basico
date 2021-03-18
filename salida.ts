//tipos de datos String
//console.log("Hello word");
let myString: string = "hello world";
console.log(myString);
// myString = 22;

//Tipos de datos numericos
let myNumber: number = 22;
console.log(myNumber);

//Creabdo un tipo boleano
let myBool: boolean = true;

//asignado cualquier tipo de dato
let myVar: any = "Hello";
//error de asignación
//myVar = 22;

document.write(myString);

//imprimiendo un numero antes lo convierto a string
document.write(myNumber.toString());

//Array
let arrayAny: any[] = [];
arrayAny = [true, "1", 666];
document.write(arrayAny.toString());

let arrayString: string[] = [];
arrayString = ["Lennin", "Geovanny", "Ibarra"];
document.write(arrayString.toString());
// me marca el error
//arrayString = ["Lennin", "Geovanny", "Ibarra", 6];

let arrayNumber: number[] = [1, 2, 3];

let arrayBoolean: boolean[] = [true, false, true];

let array: any[] = [1, 2, "hola", [], {}];

//tipado fuerte

let strNumTuple: [string, number];
strNumTuple = ["hola", 23];
//error de asignación de tipos
//no coicide con la estructura del arreglo
//strNumTuple = [23, "hola"];
//strNumTuple = [23, "hola", [], {}];
//error por el numero de elementos tiene 4 esperaba 2
// strNumTuple = ["hola", 23, "", 52]

//void, undefine, null

// let myVoid: void = undefined;
// let myNull: null = null;
// let myundefined: undefined = undefined;

// document.write(typeof myBool);
// document.write(typeof strNumTuple);
// document.write(typeof myVoid);
// document.write(typeof myNull);

//funciones
//indicamos que vamos a recibir dos numeros y la respuesta va  a ser un numero

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

//una funcion que recibe un numero o un strig y retorna un valor numerico

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

//validando un parametro opcional
//al colocarle el signo de interrogación permito que el segundo parametro sea vacio

function getName(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

document.write(getName("Lenin"));
document.write(getName("Geovanny", "Ibarra"));

//la funcion no rotarna nada
function myVoidFunction(): void {
  //return 22;
  return;
  //no retorna nada
}

//Interfaces
//definir la estructura de un objeto
interface ITODO {
  title: string;
  text: string;
}

function showTodo(todo: ITODO) {
  console.log(`${todo.title} - ${todo.text}`);
}

showTodo({
  title: "Mi titulo",
  text: "El contenido del articulo",
});

//otra forma donde utilizar la interface

//no cumple con lo definido en ITODO
//let myTodo: ITODO = {title: 'El Front End', text:'Pinta bonito', articulo: 'marca error'}

let myTodo: ITODO = { title: "El Front End", text: "Pinta bonito" };

//Clases

class User {
  name: string;
  email: string;
  age: number;

  constructor(name) {
    this.name = name;
  }

  register() {
    console.log(`${this.name} is registered`);
  }
}

let jhon = new User("jhon");

document.write(jhon.name);
