console.log('page 03');
////// Loader in HTML

function getFruit(name){
    const fruits = {
        strawberry: 'berry01',
        kiwi: 'berry02', 
        apple: 'berry03',
    }
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve(fruits[name])
           
        
        }, 1000)
    );
}

try{
    const apple = getFruit('apple');
    console.log(apple);
}catch(error){
    console.log('mis');
}

// console.log(getFruit('apple'));

// const ourPromise = new Promise((resolve, reject)=>{
//     let number = Math.random() > .7;
//    console.log(number);
// setTimeout(()=>{
//     // console.log('Hi!');
//     if(number){
//         resolve('Seccess!');
//     }else{
//         reject('Failure');
//     }
// }, 3000)
    
// })
// console.log(ourPromise);

// ourPromise.then(resolve => console.log('Данні з виконаного проміса:', resolve))
//     .catch(reject => console.log('Помилка з виконаного проміса:', reject))
// // .finally(()=> console.log('Проміс завершено!'))

