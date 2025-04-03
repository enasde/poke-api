const file = require("./json/squirtletest.json");
const ejs = require('easy-json-schema');
const jsonSchema = ejs(file);
console.log(JSON.stringify(jsonSchema));
