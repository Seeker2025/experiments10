import"./assets/styles-fs3Ovksm.js";import{a as o,S as i}from"./assets/vendor-B_f0CC_G.js";console.log("exp 10 page 02");const r=document.querySelector(".gallery"),n="https://pixabay.com/api/",l="51186890-e1c8ef6e5ef4b08950db17a2f";async function c(t){const a={params:{key:l,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}};try{const e=await o.get(n,a);console.log(e.data.hits),s(e.data.hits);const p=new i(".gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}catch{}}c("cat");function s(t){let a=null;a=t.map(e=>`
        <li class="gallery_item">
            <a href="${e.largeImageURL}">
                <img src="${e.previewURL}" title="" />
            </a>
        </li>
        `).join(),r.insertAdjacentHTML("beforeend",a)}
//# sourceMappingURL=page-02.js.map
