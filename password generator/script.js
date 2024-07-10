let inputSlider=document.getElementById("inputSlider");
let sliderValue=document.getElementById("sliderValue");
let passbox=document.getElementById("passbox");
let lowercase=document.getElementById("lowercase");
let uppercase=document.getElementById("uppercase");
let number=document.getElementById("number");
let symbols=document.getElementById("symbols");
let genbtn=document.getElementById("genbtn");
let copyicon=document.getElementById("copyicon");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;
})

genbtn.addEventListener('click',()=>{
    passbox.value=generatePassword();
})
let lowerChar="abcdefghijklmnopqrstuvwxyz";
let upperChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers="0123456789";
let allSymbol="~!@#$&*%^";

function generatePassword(){
    let genPassword="";

    let allchars = "";

    allchars += lowercase.checked ? lowerChar: "";
    allchars += uppercase.checked ? upperChar: "";
    allchars += number.checked ? allNumbers: "";
    allchars += symbols.checked ? allSymbol: "";

    if(allchars == "" || allchars.length == 0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value)
    {
    genPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
    i++;
    }
    return genPassword;
}

copyicon.addEventListener('click',()=>{
    if (passbox.value != "" || passbox.value.length>=1){
        navigator.clipboard.writeText(passbox.value);
        copyicon.innerText="check";
        copyicon.title="Password Copied";
    }
    setTimeout(()=>{
        copyicon.innerHTML="content_copy"
        copyicon.title="";
    },3000)
})