console.log('page 05');

// fetch('http://localhost:3000/books')
//     .then(res=>{
//        console.log(res.json())
//     })

////// CRUD
// fetch('https://jsonplaceholder.typicode.com/posts/2')
// .then((response)=> response.json())
// .then((json)=>console.log(json))

function addPostService(data){
    const options ={
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify( data
          // {
          //   title: "Hello from JS",
          //   body: "qweryuiqWAERTY",
          //   userId: 12,
          // }
      )
    }

    return fetch('https://jsonplaceholder.typicode.com/posts', options)
        .then(resp =>{
            if(!resp.ok){
                throw new Error(resp.statusText)
            }
            return resp.json();
        })
        // .then(data=>console.log(data))
        // .catch(err=>console.log(err));
}

const addPost = document.querySelector(".js-add");
// console.log(addPost);
const listPosts = document.querySelector(".js-posts");
// console.log(listPosts);
const formWrapper = document.querySelector(".js-form");
// console.log(formWrapper);
const errMessage = document.querySelector(".js-error");
// console.log(errMessage);

addPost.addEventListener('click', handlerAddPost)

function handlerAddPost(){
    formWrapper.innerHTML = `
        <form action="submit" class="js-form-add">
          <input type="text" name="title">
          <textarea name="body" cols="30" rows="10"></textarea>
          <button>Додати пост</button>
        </form>
    `
    const form = document.querySelector(".js-form-add");
    form.addEventListener('submit', handlerFormSubmit);
    console.log(form);
}

function handlerFormSubmit(evt){
    evt.preventDefault();
    // console.log(evt.currentTarget);
    // console.dir(evt.currentTarget.elements);

    const {title, body} = evt.currentTarget.elements;
    // console.log(title.value);
    // console.log(body.value);
     const data = {
      title: title.value,
      body: body.value,
     };
     addPostService(data)
    .then(obj=>{
      console.log(obj);
      listPosts.insertAdjacentHTML('beforeend', createPostMarkup(obj));
  }).catch(()=>{
    errMessage.innerHTML = 'Не можливо додати пост';
  }).finally(()=>(formWrapper.innerHTML = ""));
}

function createPostMarkup({id, title, body}){
  return `
            <li data-id="${id}">
                <h2>${title}</h2>
                <p>${body}</p>
            </li> `;
}









    