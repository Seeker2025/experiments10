console.log('page 04');
////// JSON

const string = {a: 'name', b: 'surname',}
const string02 = JSON.stringify(string);
console.log(string02);
console.log(typeof(string02));
const parseObj = JSON.parse(string02);
console.log(parseObj);
console.log(typeof(parseObj));