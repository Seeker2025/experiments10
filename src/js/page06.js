console.log('page 06');

const searchForm = document.querySelector(".js-search");
const addCountry = document.querySelector(".js-add");
const list = document.querySelector(".js-list");
const formContainer = document.querySelector(".js-form-container");
// console.log(searchForm);
// console.log(addCountry);
// console.log(list);
// console.log(formContainer);

addCountry.addEventListener('click', handlerAddInput);

function handlerAddInput(){
    const markup = '<input type="text" name="country">';
    formContainer.insertAdjacentHTML('beforeend', markup);

}

searchForm.addEventListener('submit', handlerForm);

function handlerForm(evt){
    evt.preventDefault();
    console.log(evt.currentTarget);
    const data = new FormData(evt.currentTarget);
    console.log(data.getAll('country'));
    const arr = data.getAll('country').filter(item => item).map(item => item.trim());
     console.log(arr);
     getCountries(arr);
}
async function getCountries(arr){
    const resp = arr.map(async item => {
        const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`)
        if(!resp.ok){
            throw new Error();
        }
            return await resp.json();
    })
    const data = await Promise.allSettled(resp);
    const countryObj = data.filter(({status})=> status === 'fulfilled').map(({value})=> value[0]);
    console.log(countryObj);

    return countryObj;
}

async function getWeather(){
    const BASE_URL = 'http://api.weatherapi.com/v1';
}
