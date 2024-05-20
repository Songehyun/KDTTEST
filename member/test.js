const loadNames = require('./jsonuse');

const memberjson = loadNames("./member.json");

console.log(memberjson.length);