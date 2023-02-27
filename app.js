const lodash = require('lodash');

const items = [1,[2,[3,[4]]]];

const newitems = lodash.flatMapDeep(items);
console.log(newitems);