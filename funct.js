//jshint esversion:6

//modules and exporting

const print = (data) => {
    console.log(data);
};

const opt = (data) => {
    console.log(data);
    console.log(data);
};

module.exports.print = print;
module.exports.opt = opt;