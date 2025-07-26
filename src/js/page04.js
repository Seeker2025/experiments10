console.log('page 04');
////// JSON, localStorage

const string = {a: 'name', b: 'surname',}
const string02 = JSON.stringify(string);
console.log(string02);
console.log(typeof(string02));
const parseObj = JSON.parse(string02);
console.log(parseObj);
console.log(typeof(parseObj));

const stringTwo = {name: 'Pete', girl: 'Rebecca',}
localStorage.setItem('theOne', "text");
const textOne = localStorage.getItem('theOne');
console.log(textOne);

console.log(JSON.stringify(stringTwo));
localStorage.setItem('theThird', JSON.stringify(stringTwo));

console.log(localStorage.getItem('theThird'));


let theFourth = null;
try{
    boo
    theFourth = JSON.parse(localStorage.getItem('theThird'));
    console.log(JSON.parse(localStorage.getItem('theThird')));
    localStorage.clear();
    console.log(JSON.parse(localStorage.getItem('theThird'))); ////// null
}catch(error){
 console.log('hi');
}



