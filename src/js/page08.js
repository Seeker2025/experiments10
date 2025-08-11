console.log('page 08');

let toFun  = x => document.querySelector(x);

const searchForm = toFun('.js-search');
const addCountry = toFun('.js-add');
const list = toFun('.js-list');
const formContainer = toFun('.js-form-container');
console.log(searchForm);
console.log(addCountry);
console.log(list);
console.log(formContainer);
