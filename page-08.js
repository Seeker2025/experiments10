import"./assets/styles-CWsNh1zE.js";console.log("page 08");let s=e=>document.querySelector(e);const i=s(".js-search"),m=s(".js-add"),f=s(".js-list"),u=s(".js-form-container"),p='<input type="text" name="country">';function h(){u.insertAdjacentHTML("beforeend",p)}m.addEventListener("click",h);i.addEventListener("submit",g);function g(e){e.preventDefault();const r=new FormData(e.currentTarget).getAll("country").filter(t=>t).map(t=>t.trim());console.log(r),y(r).then(async t=>{console.log(t);const n=t.map(({capital:a})=>a[0]);console.log(n);const o=await w(n);console.log(o),f.innerHTML=j(o)}).catch(t=>{console.log(t)}).finally(()=>{u.innerHTML=p,i.reset()})}async function y(e){const c=e.map(async n=>{const o=await fetch(`https://restcountries.com/v3.1/name/${n}`);if(!o.ok)throw new Error;return o.json()});return(await Promise.allSettled(c)).filter(({status:n})=>n==="fulfilled").map(({value:n})=>n[0])}async function w(e){const c="https://api.weatherapi.com/v1",r="65fc8710104c48e595e140016252406",t=e.map(async a=>{const d=new URLSearchParams({key:r,q:a,lang:"uk"}),l=await fetch(`${c}/current.json?${d}`);if(!l.ok)throw new Error(l.statusText);return l.json()}),n=await Promise.allSettled(t);console.log(n);const o=n.filter(({status:a})=>a==="fulfilled").map(({value:a})=>a);return console.log(o),o}function j(e){return e.map(({current:{temp_c:c,condition:{text:r,icon:t}},location:{country:n,name:o}})=>`
          <li class="">
              <div>
                  <h2>${n}</h2>
                  <h3>${o}</h3>
              </div>
              <img src="${t}" alt="${r}">
                <p>${r}</p>
                <p>${c}</p>
          </li>
    `).join("")}
//# sourceMappingURL=page-08.js.map
