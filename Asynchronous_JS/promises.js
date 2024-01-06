// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Async task is completed')
//     }, 1000)
//     resolve();
// })

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task is completed");
//   }, 1000);
//   resolve();
// }).then(() => {
//   console.log("promise consumed");
// });

// /* network se koi data aaya ho to usko kaise pass karte hain */

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         resolve({username: "Uday Mishra", email: "mishra#123"}) //this date is passed in "user variable"
//     }, 1000)
// })

// promiseThree.then((user)=>{
//     console.log(user)

// })


// const promiseFour = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username: "Udit Mishra", password: "123"})
//         }else{
//             reject('ERROR: Something went Wrong')
//         }
//     },1000)

// })

// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=> console.log('The promise is either resolved or rejected'))

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username: "JavaScript", password: "54321"})
//         }else{
//             reject('ERROR: JavaScript went Wrong')
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const responce = await promiseFive;
//         console.log(responce);
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromiseFive()

// async function getAllUser(){
//      try {
//         const responce = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         const data = await responce.json();
//         console.log(data);
//      } catch (error) {
//         console.log('E:', error)
//      }

// }
// getAllUser()

/* Fetch */

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((responce)=>{
//     return responce.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log('ERROR:', error)
// })
