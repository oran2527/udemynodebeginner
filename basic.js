//jshint esversion:6
console.log("Hello World");
var a = 1;
let b = 2;
const c = 3;
// no se puede reescribir una variable de tipo const. ejemplo -- c = 4
a = 4;
console.log("variable a " + a);
// no se puede redeclarar la misma variable. ejemplo -- let b = 3;
console.log("tipo de variable " + typeof(a));//typeof para saber el tipo de variable
a = 1.11;
console.log("tipo de variable " + typeof(a));//typeof para saber el tipo de variable
a = "hola";
console.log("tipo de variable " + typeof(a));//typeof para saber el tipo de variable
a = [1, 2, 3];
console.log("tipo de variable " + typeof(a));//typeof para saber el tipo de variable

//conditionals
//conditional if

let d = 1;
if(d==1){
    console.log("la variable es 1");
}else{
    console.log("la variable es diferente a 1");
}
d = 2;
if(d==1){
    console.log("la variable es 1");
}else{
    console.log("la variable es diferente a 1");
}
d = "1";
if(d==1){
    console.log("la variable es 1");
}else{
    console.log("la variable es diferente a 1");
}
d = "1";
if(d===1){//el triple signo de igualdad define que sean iguales tanto el valor como el tipo de variable
    console.log("la variable es 1");
}else{
    console.log("la variable es diferente a 1");
}

//loops
//for loop

for(let i=0; i <= 10; i++){
    console.log("el numero de la variable i es " + i);
}

let e = ["primero", "segundo", "tercero"];

for(let p of e){
    console.log("elemento del array e " + p);
}

//while loop
let i = 0;
while(i <= 10){
    console.log("el numero de la variable i es " + i);
    i++;
}

//forEach loop
let f = ["primero", "segundo", "tercero"];
f.forEach(data => {
    console.log("elementos del array usando forEach " + data);
});

//functions

//functions before 2015
function print(data){
    console.log("funcion print personalizada con datos " + data);
}

print("Orlando");

//functions after 2015
const print2 = (data) => {
    console.log("funcion print personalizada con datos despues 2015 " + data);
};

print2("Orlando");
print2("Amor");