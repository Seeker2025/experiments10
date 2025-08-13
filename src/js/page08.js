console.log('page 08');

let toFun  = x => document.querySelector(x);

const searchForm = toFun('.js-search');
const addCountry = toFun('.js-add');
const list = toFun('.js-list');
const formContainer = toFun('.js-form-container');
const markup = '<input type="text" name="country">';
// console.log(searchForm);
// console.log(addCountry);
// console.log(list);
// console.log(formContainer);

function handlerAddInput(){
   formContainer.insertAdjacentHTML('beforeend', markup);
}

addCountry.addEventListener('click', handlerAddInput);
searchForm.addEventListener('submit', handlerForm);

function handlerForm(evt){
    evt.preventDefault();
    const data = new FormData(evt.currentTarget);
    // console.log(data.getAll('country'));
    const arr = data.getAll('country').filter(item => item).map(item => item.trim());
    console.log(arr);

    getCounries(arr)
    .then(async resp => {
        console.log(resp);
        const capitals = resp.map(({capital}) =>capital[0]);
        console.log(capitals);
        const weatherService = await getWeather(capitals);
        console.log(weatherService);
        // getWeather(capitals);
        list.innerHTML = createMarkup(weatherService);
    })
    .catch(e => {
        console.log(e);
    })
    .finally(() => {
        formContainer.innerHTML = markup;
        searchForm.reset()
    })
}

async function getCounries(arr){
    const resps = arr.map(async item =>{
        const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
                              // `https://restcountries.com/v3.1/name/${item}`
        if(!resp.ok){
            throw new Error();
        }
        return resp.json();
    })

const data = await Promise.allSettled(resps);
// console.log(data);
const countryObj = data.filter(({status}) => status === 'fulfilled' ).map(({value})=> value[0]);
// console.log(countryObj);
    return countryObj;
    
}

async function getWeather(arr){

    const BASE_URL = 'https://api.weatherapi.com/v1';
    const API_KEY = '65fc8710104c48e595e140016252406';
    
    const resps = arr.map(async city=>{
        const params = new URLSearchParams({
        key: API_KEY,
        q: city,
        lang: 'uk',
    });

    const resp = await fetch(`${BASE_URL}/current.json?${params}`);

    if(!resp.ok){
        throw new Error(resp.statusText);
    }
        return resp.json();
    })
    const data = await Promise.allSettled(resps);
    console.log(data);
    const objs = data.filter(({status})=> status === 'fulfilled').map(({value})=> value);
    console.log(objs);
    return objs;
}

function createMarkup(arr){
return arr.map(({current: {temp_c, condition: { text, icon}}, location: {country, name}}) => `
          <li class="">
              <div>
                  <h2>${country}</h2>
                  <h3>${name}</h3>
              </div>
              <img src="${icon}" alt="${text}">
                <p>${text}</p>
                <p>${temp_c}</p>
          </li>
    `).join('');
}

