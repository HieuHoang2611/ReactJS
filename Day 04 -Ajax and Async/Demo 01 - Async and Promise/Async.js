// async function f() { 
//     console.log('Async function.'); 
//     return Promise.resolve(1); 
//     }
     
//     f().then(function(result) { 
//         console.log(result) 
//         });
 // hàm await
 // a promise
let promise = new Promise(function (resolve, reject) { 
    setTimeout(function () { 
    resolve('Promise resolved')}, 4000); 
    });
     
    // async function
    async function asyncFunc() { 
     
    // wait until the promise resolves 
    let result =  promise; 
     
    console.log(result); 
    console.log('hello'); 
    }
     
    // calling the async function
    asyncFunc();       