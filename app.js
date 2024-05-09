// //////////////// callback hell
// function getdata(dataID) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data:", dataID);
//       resolve("sucessfullt received the daata");
//       console.log("Getting Data ......");
//     }, 3000);
//   });
// }
/////////promises chaining
// getdata(1)
// .then((res)=>{
//     return getdata(2);
// })
// .then((res)=>{
//     return getdata(3);
// })
// .then((res)=>{
//     return getdata(4)
// })
// .then((res)=>{
//     console.log(res) 
// })
///////////////async await
// (async function getAllData(){
//     await getdata(1);
//     await getdata(2);
//     await getdata(3);
//     await getdata(4);
//     await getdata(5);
//     await getdata(6);
// })();

// getAllData();
// let result= getdata(123,)
// //////////promises:
// let promise =new Promise((resolve,reject)=>{
// console.log("i am a promise");
// reject("some error occured");
// })

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a new Promise");
//         // resolve("sucessfully");
//         reject("rola")
//      })
// }
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("i am resolved",res);
// })
// promise.catch((err)=>{
//     console.log("i am rejected",err)
// })

// function async(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data1.....")
//             resolve("sucess");
//         },5000)
//     });
// }
// function async1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA 2. ....")
//             resolve("sucess");
//         },5000)
//     });
// }
// console.log("fetching data 1");
// async().then((res)=>{
//     console.log("fetching data 2....")
//     async1().then(()=>{})
// })

// Fetch API
// const Url="https://cat-fact.herokuapp.com/facts";
// const factpara=document.querySelector(".fact");
// const btn=document.querySelector(".btn");

// const getFacts=async()=>{
//   console.log("getting data.....");
//   let response=await fetch(Url);
//   console.log(response); //JSON format AJAJ asychronous javascript and json 
//   let data=await response.json();
//   console.log(data[0] );
//   factpara.innerText=data[4].text;
// };
/////////////////////same method like fetch
// function getFacts(){
//   fetch(Url)
//   .then((response)=>{
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data);
//   })
// }
// btn.addEventListener("click",getFacts);
// // getFacts();

///// Currency Converter 

// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr = document.querySelector(".from select");
// const toCurr = document.querySelector(".to select");
// const msg = document.querySelector(".msg");

// for (let select of dropdowns) {
//   for (currCode in countryList) {
//     console.log(currCode,countryList[currCode]);
//     let newOption = document.createElement("option");
//     newOption.innerText = currCode;
//     newOption.value = currCode;
//     if (select.name === "from" && currCode === "USD") {
//       newOption.selected = "selected";
//     } else if (select.name === "to" && currCode === "INR") {
//       newOption.selected = "selected";
//     }
//     select.append(newOption);
//   }

//   select.addEventListener("change", (evt) => {
//     updateFlag(evt.target);
//   });
// }

// const updateExchangeRate = async () => {
//   let amount = document.querySelector(".amount input");
//   let amtVal = amount.value;
//   if (amtVal === "" || amtVal < 1) {
//     amtVal = 1;
//     amount.value = "1";
//   }
//   const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//   let response = await fetch(URL);
//   let data = await response.json();
//   let rate = data[toCurr.value.toLowerCase()];

//   let finalAmount = amtVal * rate;
//   msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// };

// const updateFlag = (element) => {
//   let currCode = element.value;
//   let countryCode = countryList[currCode];
//   let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src = newSrc;
// };

// btn.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   updateExchangeRate();
// });

// window.addEventListener("load", () => {
//   updateExchangeRate();
// });

const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
 
for (let select of dropdowns) {
  for (currCode in countryList) {
    console.log(currCode,countryList[currCode]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change",()=>{
    updateFlag(evt.target);
  })
}

const updateExchangeRate=async()=>{
  let amount =document.querySelector(".amount input");
  let amtval =amount.value;
  if(amtval===""||amtval<1){
    amtval=1;
    amount.value="1";
  }
  const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(URL);
  let data =await response.json();
  let rate=data[toCurr.value.toLowerCase()];
  let finalAmount =amtval*rate;
  msg.innerText=`${amtval} ${fromCurr.value} =${finalAmount} ${toCurr.value}`;
};
const updateFlag=(element)=>{
let currCode=element.value;
let countryCode=countryList[currCode];
let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
let img =element.parentElement.querySelector("img");
img.src=newSrc;
};
btn.addEventListener("click",(evt)=>{
evt.preventDefault();
updateExchangeRate();
})
window.addEventListener("load",()=>{
  updateExchangeRate();
})