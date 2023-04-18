//jshint esversion:6

//promise

/*
las promesas lo que hacen es primero analizar el codigo para determinar los valores de resolve y rejected 
conforme la cantidad de veces que se llame la funcion que contiene la promesa y luego de eso enviar los 
mensaje de error es decir los rejected y luego de eso envia los mensaje o acciones de resolve
*/

let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log("fruta "+ data);
        });
    }, 5000);
};

const postFruit = (fruit, vbol) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            fruits.push(fruit);
            console.log(vbol);
            if(!vbol){
                console.log("Entre a resolve");
                resolve();
            }
            else{
                console.log("Entre a rejected");
                rejected("Algo fallo");
            }
        }, 3000);
    });
};

/*
postFruit("Mango", false)
    .then(getFruits)
    .catch(error => {
        console.log(error);
});
*/

postFruit("Pera", true)
    .then(getFruits)
    .catch(error => {
        console.log(error);
});

