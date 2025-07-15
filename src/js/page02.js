console.log('exp 10 page 02');
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';
const gal = document.querySelector('.gallery');
// console.log(gal);

const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';

function getImagesByQuery(query){
    axios.get('https://pixabay.com/api', {
  
    params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        }
 }).then(response =>{
    console.log(response.data.hits);
    
    createGallery(response.data.hits);

        const lightbox = new SimpleLightbox('.gallery_item a', {
    
    captionsData: 'alt',    
    captionDelay: 200,      
    animationSpeed: 250,    
    scaleImageToRatio: true,
    })
 })
	.catch(error => console.log(error));
}

getImagesByQuery('cat');
    
function createGallery(arr){
    let markUp = null;
    markUp = arr.map(itm=>{
        return `
        <li class="gallery_item">
            <a href="${itm.largeImageURL}">
                <img src="${itm.previewURL}" title="" />
            </a>
        </li>
        `
    }).join();
    gal.insertAdjacentHTML('beforeend', markUp);

  
}  

