//jshint esversion:6

//callbacks

let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log("fruta "+ data);
        });
    }, 5000);
};

const postFruit = (fruit, callback) => {
    setTimeout(()=>{
        fruits.push(fruit);
        callback();
    }, 3000);
};

postFruit("Araza", getFruits);
postFruit("Fresa", getFruits);
