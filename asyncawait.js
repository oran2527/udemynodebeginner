//jshint esversion:6

//async and await

let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log("fruta "+ data);
        });
    }, 5000);
};

const postFruit = (fruit) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            fruits.push(fruit);
            let error = false;
            console.log(error);
            if(!error){
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

const init = async() => {
    try{
        await postFruit("Lima");
        getFruits();
    }
    catch(error){
        console.log(error);
    }
};

init();