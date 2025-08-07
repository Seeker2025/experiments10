import"./assets/styles-DF3wYhPP.js";console.log("page 05");function a(t){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder.typicode.com/posts",o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const d=document.querySelector(".js-add"),i=document.querySelector(".js-posts"),s=document.querySelector(".js-form"),r=document.querySelector(".js-error");d.addEventListener("click",l);function l(){s.innerHTML=`
        <form action="submit" class="js-form-add form-add">
          <input type="text" name="title">
          <textarea name="body" cols="30" rows="10"></textarea>
          <button>Додати пост</button>
        </form>
    `;const t=document.querySelector(".js-form-add");t.addEventListener("submit",u),console.log(t)}function u(t){t.preventDefault();const{title:o,body:e}=t.currentTarget.elements,c={title:o.value,body:e.value};a(c).then(n=>{console.log(n),i.insertAdjacentHTML("beforeend",m(n))}).catch(()=>{r.innerHTML="Не можливо додати пост"}).finally(()=>{s.innerHTML="",setTimeout(()=>{r.innerHTML=""},2e3)})}function m({id:t,title:o,body:e}){return`
            <li data-id=${t} class="li_box">
                <h2>${o}</h2>
                <p>${e}</p>
            </li> `}
//# sourceMappingURL=page-5.js.map
