import"./assets/styles-CK58NnGQ.js";console.log("page 06");const i=document.querySelector(".js-search"),m=document.querySelector(".js-add"),p=document.querySelector(".js-list"),l=document.querySelector(".js-form-container"),u='<input type="text" name="country">';m.addEventListener("click",f);function f(){l.insertAdjacentHTML("beforeend",u)}i.addEventListener("submit",h);function h(n){n.preventDefault();const r=new FormData(n.currentTarget).getAll("country").filter(t=>t).map(t=>t.trim());y(r).then(async t=>{const e=t.map(({capital:a})=>a[0]);console.log(e);const o=await w(e);p.innerHTML=j(o)}).catch(t=>console.log(t)).finally(()=>{l.innerHTML=u,i.reset()})}async function y(n){const c=n.map(async e=>{const o=await fetch(`https://restcountries.com/v3.1/name/${e}`);if(!o.ok)throw new Error;return await o.json()}),r=await Promise.allSettled(c);return console.log(r),r.filter(({status:e})=>e==="fulfilled").map(({value:e})=>e[0])}async function w(n){const c="https://api.weatherapi.com/v1",r="65fc8710104c48e595e140016252406",t=n.map(async a=>{const d=new URLSearchParams({key:r,q:a,lang:"uk"}),s=await fetch(`${c}/current.json?${d}`);if(!s.ok)throw new Error(s.statusText);return s.json()});return(await Promise.allSettled(t)).filter(({status:a})=>a==="fulfilled").map(({value:a})=>a)}function j(n){return n.map(({current:{temp_c:c,condition:{text:r,icon:t}},location:{country:e,name:o}})=>`
          <li class="">
              <div>
                  <h2>${e}</h2>
                  <h3>${o}</h3>
              </div>
              <img src="${t}" alt="">
                <p>${r}</p>
                <p>${c}</p>
          </li>
    `).join("")}
//# sourceMappingURL=page-06.js.map
