console.log('page 05');

// fetch('http://localhost:3000/books')
//     .then(res=>{
//        console.log(res.json())
//     })

////// CRUD
fetch('https://jsonplaceholder.typicode.com/posts/2')
.then((response)=> response.json())
.then((json)=>console.log(json))

const options ={
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify({
        title: "Hello from JS",
        body: "qweryuiqWAERTY",
        userId: 12,
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(resp =>{
        if(!resp.ok){
            throw new Error(resp.statusText)
        }
        return resp.json();
    })
    .then(data=>console.log(data))
    .catch(err=>console.log(err));









    