console.log('page 07');

// console.log(typeof('a'));       /////string
// console.log(typeof(2));         //////number
// console.log(typeof(null));      ////// object
// console.log(typeof(NaN));       ////// number
// console.log(typeof(undefined)); ////// undefined

async function getCapital(){
    console.log('start');
    const URL = 'https://restcountries.com/v3.1/name/';
    const resp = await fetch(`${URL}Ukraine`);
    const data = await resp.json();
    // console.log(resp);
    // console.log(data);
    console.log('end');
    return data;
}
console.log(getCapital());

// getCapital().then(resp =>{
//     console.log(resp);
//      console.log('end_02');

// }).catch(err =>{
//     console.log('Hi!');
// })

