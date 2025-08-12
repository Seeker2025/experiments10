import"./assets/styles-DF3wYhPP.js";console.log("page 06");const i=document.querySelector(".js-search"),u=document.querySelector(".js-add"),m=document.querySelector(".js-list"),d=document.querySelector(".js-form-container");u.addEventListener("click",p);function p(){d.insertAdjacentHTML("beforeend",'<input type="text" name="country">')}i.addEventListener("submit",f);function f(e){e.preventDefault();const r=new FormData(e.currentTarget).getAll("country").filter(t=>t).map(t=>t.trim());h(r).then(async t=>{const n=t.map(({capital:o})=>o[0]);console.log(n);const c=await y(n);m.innerHTML=w(c),console.log(c)}).catch(t=>console.log(t)).finally(()=>i.reset())}async function h(e){const a=e.map(async n=>{const c=await fetch(`https://restcountries.com/v3.1/name/${n}`);if(!c.ok)throw new Error;return await c.json()}),r=await Promise.allSettled(a);return console.log(r),r.filter(({status:n})=>n==="fulfilled").map(({value:n})=>n[0])}async function y(e){const a="https://api.weatherapi.com/v1",r="65fc8710104c48e595e140016252406",t=e.map(async o=>{const l=new URLSearchParams({key:r,q:o,lang:"uk"}),s=await fetch(`${a}/current.json?${l}`);if(!s.ok)throw new Error(s.statusText);return s.json()});return(await Promise.allSettled(t)).filter(({status:o})=>o==="fulfilled").map(({value:o})=>o.current)}function w(e){return e.map(({temp_c:a,condition:{text:r,icon:t}})=>`
          <li class="">
              <div>
                  <h2>{country}</h2>
                  <h3>{name}</h3>
              </div>
              <img src="${t}" alt="">
                <p>${r}</p>
                <p>${a}</p>
          </li>
    `).join("")}
//# sourceMappingURL=page-6.js.map
