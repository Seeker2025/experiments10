console.log('page 11');
////// Modalka

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

// console.log(refs.openModalBtn);
// console.log(refs.closeModalBtn);
// console.log(refs.backdrop);

refs.openModalBtn.addEventListener('click', onOpenModal)
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.backdrop.addEventListener('click', onBackdropClick)

function onOpenModal(){
    //////we hang the listener on Window only when we open the modal
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
}

function onCloseModal(event){
    //////we remove listener from windows when close modal
    window.removeEventListener('keydown', onEscKeyPress);
    // console.log(event.target);
    document.body.classList.remove('show-modal');
}

function onBackdropClick(event){
    console.log(event.currentTarget);
    console.log(event.target);

    // document.body.classList.add('red');

    if(event.currentTarget === event.target){
        onCloseModal();
        console.log('Wow!');
    }
}

function onEscKeyPress(event){
    if(event.code === 'Escape'){
        onCloseModal();
    }
    console.log(event);
}