import"./assets/styles-BNA6e3xj.js";import{a as o,S as i}from"./assets/vendor-B_f0CC_G.js";console.log("exp 10 page 02");const l=document.querySelector(".gallery"),r="51186890-e1c8ef6e5ef4b08950db17a2f";function n(a){o.get("https://pixabay.com/api",{params:{key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>{console.log(e.data.hits),c(e.data.hits),new i(".gallery_item a",{captionsData:"alt",captionDelay:200,animationSpeed:250,scaleImageToRatio:!0})}).catch(e=>console.log(e))}n("cat");function c(a){let e=null;e=a.map(t=>`
        <li class="gallery_item">
            <a href="${t.largeImageURL}">
                <img src="${t.previewURL}" title="" />
            </a>
        </li>
        `).join(),l.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=page-2.js.map
