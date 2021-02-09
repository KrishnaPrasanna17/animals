/**
 *
 * @namespace faker.news_paper
 */
var Newspaper = function (faker) {
    var self = this;
    var fake = faker.fake;
  
    /**
     * paper
     *
     * @method faker.paper.paper
     */
    self.paper = function () {
      return fake('{{news_paper.names}}');
    };
  
    self.paper.schema = {
      "description": "Generates a newspaper.",
      "sampleResults": ["The Times of India", "The Telegraph", "T2"]
    };
  
    /**
     * ceo
     *
     * @method faker.paper.ceo
     */
    self.ceo = function () {
      return faker.random.arrayElement(faker.definitions.news_paper.ceo);
    };
  
    self.ceo.schema = {
      "description": "Generates a ceo name.",
      "sampleResults": ["Mr. aaa", "Mr. bbb", "Mr. fff"]
    };
  
  
    /**
     * year of foundation
     *
     * @method faker.paper.foundedAt
     */
    self.foundedAt = function () {
      return faker.random.arrayElement(faker.definitions.news_paper.foundedAt);
    };
  
    self.foundedAt.schema = {
      "description": "Generates the time of foundation.",
      "sampleResults": ["1965", "1988", "1935"]
    };
  
    /**
     * office location
     *
     * @method faker.paper.officeLocs
     */
    self.officeLocs = function () {
      return faker.random.arrayElement(faker.definitions.news_paper.officeLocs);
    };
  
    self.officeLocs.schema = {
      "description": "Generates a office location.",
      "sampleResults": ["New Delhi", "Jaipur", "Bhubaneshwar", "Kolkata"]
    };
};
module["exports"] = Newspaper;
  