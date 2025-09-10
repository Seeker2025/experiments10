console.log('page 10');
////// Buttons. Replace color

const tagsContainer = document.querySelector('.js-tags');
console.log(tagsContainer);

tagsContainer.addEventListener('click', onTagsContainerClick);

function onTagsContainerClick(evt){
    console.log(evt.target.nodeName);
    if(evt.target.nodeName !== 'BUTTON'){
        // console.log('Hi!');
        return;
    }

    const currentActiveBtn = document.querySelector('.tags__btn--active');

    if(currentActiveBtn){
        currentActiveBtn.classList.remove('tags__btn--active');
    }

    evt.target.classList.add('tags__btn--active');
    
}