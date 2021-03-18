//tipos de datos String
//console.log("Hello word");
var myString = "hello world";
console.log(myString);
// myString = 22;
//Tipos de datos numericos
var myNumber = 22;
console.log(myNumber);
//Creabdo un tipo boleano
var myBool = true;
//asignado cualquier tipo de dato
var myVar = "Hello";
//error de asignación
//myVar = 22;
document.write(myString);
//imprimiendo un numero antes lo convierto a string
document.write(myNumber.toString());
//Array
var arrayAny = [];
arrayAny = [true, "1", 666];
document.write(arrayAny.toString());
var arrayString = [];
arrayString = ["Lennin", "Geovanny", "Ibarra"];
document.write(arrayString.toString());
// me marca el error
//arrayString = ["Lennin", "Geovanny", "Ibarra", 6];
var arrayNumber = [1, 2, 3];
var arrayBoolean = [true, false, true];
var array = [1, 2, "hola", [], {}];
//tipado fuerte
var strNumTuple;
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
function getSum(num1, num2) {
    return num1 + num2;
}
//una funcion que recibe un numero o un strig y retorna un valor numerico
var mySum = function (num1, num2) {
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
function getName(firstName, lastName) {
    if (lastName === undefined) {
        return firstName;
    }
    return firstName + " " + lastName;
}
document.write(getName("Lenin"));
document.write(getName("Geovanny", "Ibarra"));
//la funcion no rotarna nada
function myVoidFunction() {
    //return 22;
    return;
    //no retorna nada
}
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
showTodo({
    title: "Mi titulo",
    text: "El contenido del articulo"
});
//otra forma donde utilizar la interface
//no cumple con lo definido en ITODO
//let myTodo: ITODO = {title: 'El Front End', text:'Pinta bonito', articulo: 'marca error'}
var myTodo = { title: "El Front End", text: "Pinta bonito" };
//Clases
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered");
    };
    return User;
}());
var jhon = new User("jhon");
document.write(jhon.name);
