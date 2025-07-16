console.log('exp 10 page 02');
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import axios from 'axios';
const gal = document.querySelector('.gallery');
// console.log(gal);

const BASE_URL = 'https://pixabay.com/api/';
const myApiKey = '51186890-e1c8ef6e5ef4b08950db17a2f';

async function getImagesByQuery(query){
    const options = {
  
    params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        }
 }

 try {
   
    const findArray = await axios.get(BASE_URL, options);

    
    console.log(findArray.data.hits);
    createGallery(findArray.data.hits);

    //     const lightbox = new SimpleLightbox('.gallery_item a', {
    
    // captionsData: 'alt',    
    // captionDelay: 200,      
    // animationSpeed: 250,    
    // scaleImageToRatio: true,
    // })
 }
    catch(error){

    }
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

