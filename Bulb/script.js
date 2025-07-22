let isOpen = false;
let btn = document.querySelector(".switch");
let bulbTop = document.querySelector(".bulb-top");
let bulbBottom = document.querySelector(".bulb-bottom")

btn.addEventListener("click",function(){
    if(isOpen){
        btn.classList.remove("on")
        bulbBottom.classList.remove('bulbOn');
        bulbTop.classList.remove("bulbOn");

    }else{
        btn.classList.add("on");
        bulbBottom.classList.add('bulbOn');
        bulbTop.classList.add("bulbOn");
    }
    isOpen = !isOpen
})