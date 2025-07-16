import"./assets/styles-BNA6e3xj.js";import{a as o}from"./assets/vendor-MDsUmn-G.js";console.log("exp 10 page 02");const r=document.querySelector(".gallery"),i="https://pixabay.com/api",n="51186890-e1c8ef6e5ef4b08950db17a2f";async function c(t){const a={params:{key:n,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}};try{const e=await o.get(i,a);console.log(e.data.hits),s(e.data.hits)}catch{}}c("cat");function s(t){let a=null;a=t.map(e=>`
        <li class="gallery_item">
            <a href="${e.largeImageURL}">
                <img src="${e.previewURL}" title="" />
            </a>
        </li>
        `).join(),r.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=page-2.js.map
