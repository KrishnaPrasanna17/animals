/**
 *
 * @namespace faker.food
 */
function food (faker) {

  /**
   * fruit
   *
   * @method fruit
   * @memberof faker.fruit
   */
  this.fruit = function () {
    if (typeof faker.definitions.food.fruit !== "undefined" ) {
      // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
      // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
    }
    return faker.random.arrayElement(faker.definitions.food.fruit);
  };
  

 /**
   * veg
   *
   * @method veg
   * @memberof faker.food
   */
  this.veg = function () {
    if (typeof faker.definitions.food.veg !== "undefined") {
      // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
      // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
    }
    return faker.random.arrayElement(faker.definitions.food.veg);
  };
    
 /**
   * nonveg
   *
   * @method nonveg
   * @memberof faker.food
   */
  this.nonveg = function () {
    if (typeof faker.definitions.food.nonveg !== "undefined") {
      // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
      // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
    }
    return faker.random.arrayElement(faker.definitions.food.nonveg);
  };
  

  
  /**
   * combo
   *
   * @method combo
   * @param {string} fruit
   * @param {string} veg
   * @param {string} nonveg
   * @memberof faker.food
   */
  this.combo = function (fruit, veg, nonveg) {
      // in particular locales first and last names split by gender,
      // thus we keep consistency by passing 0 as male and 1 as female
      fruit = fruit || faker.food.fruit();
      veg = veg || faker.food.veg();
      nonveg = nonveg || faker.food.nonveg();


      return "1 nonveg: " + nonveg + "1 veg: "+ veg + " & " +"1 fruit: " + fruit;
  };
}

module['exports'] = food;
