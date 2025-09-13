import"./assets/styles-BVIx6UuF.js";console.log("page 05");function a(e){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)};return fetch("https://jsonplaceholder.typicode.com/posts",o).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}const l=document.querySelector(".js-add"),i=document.querySelector(".js-posts"),s=document.querySelector(".js-form"),r=document.querySelector(".js-error");l.addEventListener("click",d);function d(){s.innerHTML=`
        <form action="submit" class="js-form-add form-add">
          <input type="text" name="title">
          <textarea name="body" cols="30" rows="10"></textarea>
          <button>Додати пост</button>
        </form>
    `;const e=document.querySelector(".js-form-add");e.addEventListener("submit",u),console.log(e)}function u(e){e.preventDefault(),console.log(e.currentTarget),console.dir(e.currentTarget.elements);const{title:o,body:t}=e.currentTarget.elements,n={title:o.value,body:t.value};if(!(n.title&&n.body)){console.log("fail"),alert("Введіть якийсь текст!"),e.currentTarget.innerHTML=null;return}a(n).then(c=>{i.insertAdjacentHTML("beforeend",m(c))}).catch(()=>{r.innerHTML="Не можливо додати пост"}).finally(()=>{s.innerHTML="",setTimeout(()=>{r.innerHTML=""},2e3)})}function m({id:e,title:o,body:t}){return`
            <li data-id=${e} class="li_box">
                <h2>${o}</h2>
                <p>${t}</p>
            </li> `}
//# sourceMappingURL=page-05.js.map
