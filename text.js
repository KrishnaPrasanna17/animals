var faker = require("./index");
const food = require("./lib/food");
var fruit = faker.food.fruit();
var veg = faker.food.veg()
var nonveg = faker.food.nonveg()
console.log(fruit,veg,nonveg)