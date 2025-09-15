import"./assets/styles-fs3Ovksm.js";console.log("page 09");const c=document.querySelector(".js-add"),a=document.querySelector(".js-posts"),n=document.querySelector(".js-form"),s=document.querySelector(".js-error");console.log(c);console.log(a);console.log(n);c.addEventListener("click",d);function d(){n.innerHTML=`
        <form action="submit" class="js-form-add">
            <input type="text" name="title">
            <textarea name="body" cols="30" rows="10"></textarea>
            <button>Додати пост</button>
        </form>    
    `;const t=document.querySelector(".js-form-add");t.addEventListener("submit",i),console.log(t)}function i(t){t.preventDefault();const{title:o,body:e}=t.currentTarget.elements,l={title:o.value,body:e.value};m(l).then(r=>{a.insertAdjacentHTML("beforeend",u(r)),console.log(r)}).catch(()=>{s.innerHTML="Не можливо додати пост"}).finally(()=>{n.innerHTML="",setTimeout(()=>{s.innerHTML=""},1500)})}function u({id:t,title:o,body:e}){return`
        <li data-id="${t}">
        <h2>${o}</h2>
        <p>${e}</p>
        </li>
    `}function m(t){const o={method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)};return fetch("https://jsonplaceholder10.typicode.com/posts",o).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}
//# sourceMappingURL=page-09.js.map
