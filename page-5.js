import"./assets/styles-BZUKjEjr.js";console.log("page 05");function c(t){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder.typicode.com/posts",o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const a=document.querySelector(".js-add"),d=document.querySelector(".js-posts"),r=document.querySelector(".js-form"),i=document.querySelector(".js-error");a.addEventListener("click",l);function l(){r.innerHTML=`
        <form action="submit" class="js-form-add">
          <input type="text" name="title">
          <textarea name="body" cols="30" rows="10"></textarea>
          <button>Додати пост</button>
        </form>
    `;const t=document.querySelector(".js-form-add");t.addEventListener("submit",u),console.log(t)}function u(t){t.preventDefault();const{title:o,body:e}=t.currentTarget.elements,s={title:o.value,body:e.value};c(s).then(n=>{console.log(n),d.insertAdjacentHTML("beforeend",m(n))}).catch(()=>{i.innerHTML="Не можливо додати пост"}).finally(()=>r.innerHTML="")}function m({id:t,title:o,body:e}){return`
            <li data-id="${t}">
                <h2>${o}</h2>
                <p>${e}</p>
            </li> `}
//# sourceMappingURL=page-5.js.map
