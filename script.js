// let promise=new Promise((resolve, reject) => {
//     console.log("hello tum promisse ho")
//     resolve("success");
//     reject("error aaya reeee")
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId)
//             resolve("successfully ")
//             if(getNextData){
//                 getNextData();
//             }
//         }, 6000);
//     })
// }

//----------Async-function-----

// async function asyncFun1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data Getted");
//       resolve("succesfully");
//     }, 3000);
//   });
// }
// async function asyncFun2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data Getted--2");
//       resolve("succesfully---2");
//     }, 2000);
//   });
// }

// asyncFun1().then((res) => {
//   console.log(res);
//   asyncFun2().then((res) => {
//     console.log(res);
//   });
// });

//-----------call back hell -------------

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Data", dataId);
//       resolve("success")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 2000);
//   });
// }


// getData(23).then((res)=>{
//     return getData(200)
// }).then((res)=>{
//     return getData(00)
// }).then((res)=>{
//     console.log(res)
// })

//-------------async Fun--by Api--

// function api(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("data fetched")
//       resolve("Sucess")
//     }, 2000);
//   }) 
// }

// async function getNewData() {
//    await api();
//    await api();
//    await api();
//    await api();
//    await api();
//    await api();
//    await api();
// }
// getNewData();  


// function getData(dataId){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       console.log("Kuch toh mil gya hai")
//       resolve("chalo badiya hai")
//     }, 3000);
//   })
// }

// async function GetAllData(res){
//   await getData(1);
//   await getData(2);
//   await getData(22);
//   await getData(221);
//   await getData(232);
// }
// // GetAllData();

// (async function (){
//   await getData(1);
//   await getData(2);
//   await getData(22);
//   await getData(221);
//   await getData(232);
// })();
// // GetAllData();

let  btn = document.querySelector("#btnn");
let  img = document.querySelector("#Catimg");

const Url="https://api.thecatapi.com/v1/images/search?limit=10 ";


const getGoogle = async()=>{
let response= await fetch(Url); 
console.log(response)
let data = await response.json();
let imageLink = data[0].url;
img.src=imageLink;

}

btnn.addEventListener("click",getGoogle)
 