const toTitleCase = require('to-title-case');
console.log(toTitleCase("test"));

const lower = 'the lord of the rings: the return of the king';
const title = toTitleCase(lower);
console.log(title)