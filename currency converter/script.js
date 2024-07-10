const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

  const dropdown=document.querySelectorAll(".dropdown select")
  const btn=document.querySelector("button")
const fromcurr=document.querySelector(".from select")
const tocurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")

  
for(let select of dropdown){
  for (code in countryList){
    let newoption=document.createElement("option")
    newoption.innerText=code;
    newoption.value=code;
    if(select.name==="from" && code==="USD"){
      newoption.selected="selected"
    }
    else if(select.name==="to" && code==="INR"){
      newoption.selected="selected"
    }
    select.append(newoption);
  }

  select.addEventListener("change",(evt)=>{
    updateflag(evt.target)
  })
}

const updateflag=(element)=>{
  let code=element.value
  let countrycode=countryList[code];
  let newsrc=`https://flagsapi.com/${countrycode}/shiny/64.png`
  let img=element.parentElement.querySelector("img")
  img.src=newsrc;
}

const updateExchangeRate = async ()=>{
  let amount=document.querySelector("input")
  let amtval=amount.value;
  if(amtval==="" || amtval<1){
    amtval=1
  amount.value="1"
  }

  // console.log(fromcurr.value, tocurr.value)

const URL=`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data= await response.json();
let rate=data[tocurr.value.toLowerCase()]
console.log(rate)

let finalAmount = rate * amtval

msg.innerText=`${amtval}${fromcurr.value} = ${finalAmount}${tocurr.value}`

}

btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  updateExchangeRate();
  
})

window.addEventListener("load",()=>{
  updateExchangeRate();
})

