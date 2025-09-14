console.log('page 12');

const refs ={
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

console.log(refs.parent);
console.log(refs.child);
console.log(refs.innerChild);

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerChildClick);

function onParentClick(evt){
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt){
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt){
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}