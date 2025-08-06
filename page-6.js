import"./assets/styles-BnGOUoDK.js";console.log("page 06");const l=document.querySelector(".js-search"),u=document.querySelector(".js-add"),m=document.querySelector(".js-list"),d=document.querySelector(".js-form-container");u.addEventListener("click",p);function p(){d.insertAdjacentHTML("beforeend",'<input type="text" name="country">')}l.addEventListener("submit",f);function f(e){e.preventDefault();const c=new FormData(e.currentTarget).getAll("country").filter(t=>t).map(t=>t.trim());h(c).then(async t=>{const n=t.map(({capital:r})=>r[0]);console.log(n);const o=await y(n);m.innerHTML=w(o),console.log(o)}).catch(t=>console.log(t))}async function h(e){const a=e.map(async n=>{const o=await fetch(`https://restcountries.com/v3.1/name/${n}`);if(!o.ok)throw new Error;return await o.json()}),t=(await Promise.allSettled(a)).filter(({status:n})=>n==="fulfilled").map(({value:n})=>n[0]);return console.log(t),t}async function y(e){const a="https://api.weatherapi.com/v1",c="65fc8710104c48e595e140016252406",t=e.map(async r=>{const i=new URLSearchParams({key:c,q:r,lang:"uk"}),s=await fetch(`${a}/current.json?${i}`);if(!s.ok)throw new Error(s.statusText);return s.json()});return(await Promise.allSettled(t)).filter(({status:r})=>r==="fulfilled").map(({value:r})=>r.current)}function w(e){return e.map(()=>`
          <li>
              <div>
                  <h2>{country}</h2>
                  <h3>{name}</h3>
              </div>
              <img src="{icon}" alt="{text}">
                <p>{text}</p>
                <p>{text}</p>
          </li>
    `).join("")}
//# sourceMappingURL=page-6.js.map
