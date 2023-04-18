//jshint esversion:6

//modules and exporting

const funct = require("./funct");


funct.print("importing print from other file");
funct.opt("opt function");

const { print, opt } = require("./funct");

print("perro");
opt("joha");