console.log('page 09');

////// CRUD

///// R - GET
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

////// C - POST

// const options = {
//     method: "POST",
//     headers: {
//         "Content-type": "application/json"
//     },
//         body: JSON.stringify({
//             title: 'Hello from JS',
//             body: 'qdfdfdfd',
//             userId: 12
//         }),
//     }
// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then(resp =>{
//         if(!resp.ok){
//             throw new Error(resp.statusText)
//         }
//         return resp.json();
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const addPost = document.querySelector('.js-add');
const listPosts = document.querySelector('.js-posts');
const formWrapper = document.querySelector('.js-form');
const errMessage = document.querySelector('.js-error');
console.log(addPost);
console.log(listPosts);
console.log(formWrapper);

addPost.addEventListener('click', handlerAddPost);

function handlerAddPost(){
    formWrapper.innerHTML = `
        <form action="submit" class="js-form-add">
            <input type="text" name="title">
            <textarea name="body" cols="30" rows="10"></textarea>
            <button>Додати пост</button>
        </form>    
    `
const form = document.querySelector('.js-form-add');
form.addEventListener('submit', handlerFormSubmit);
console.log(form);
}
function handlerFormSubmit(evt){
    evt.preventDefault();

    const {title, body} = evt.currentTarget.elements;

    const data = {
        title: title.value,
        body: body.value,
    };

    addPostService(data).then(obj => {
        listPosts.insertAdjacentHTML('beforeend', creatPostMarkup(obj));
        console.log(obj);
    })
    .catch(()=>{
            errMessage.innerHTML = "Не можливо додати пост";
    })
    .finally(()=>{
            formWrapper.innerHTML="";
        setTimeout(()=>{
            errMessage.innerHTML = "";
        }, 1500)
       
    })
}

function creatPostMarkup({ id, title, body }){
    return `
        <li data-id="${id}">
        <h2>${title}</h2>
        <p>${body}</p>
        </li>
    `;
}

function addPostService(data){
    const options = {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
        body: JSON.stringify( data ),
};
return fetch('https://jsonplaceholder10.typicode.com/posts', options)
    .then(resp =>{
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json();
    })
 
}



