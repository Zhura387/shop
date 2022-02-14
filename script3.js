let number = 0;
const buttons = document.querySelectorAll("#addToWishListButton");
const circle = document.querySelector(".circle");
const numberc = document.querySelector("#number");
const maxnumder = "+9";
const localStorageValue = Number(localStorage.getItem("counter-key"));

for (let index = 0; index < buttons.length; index++) {
buttons[index].onclick = onCLICKbutton;
}


if (localStorageValue > 0) {
number = localStorageValue;
circle.style.visibility = "visible";
CheckOnMaxNubmer(number);
} else {
number = 0;
numberc.textContent = number;
}

function onCLICKbutton() {
circle.style.visibility = "visible";
number++;
localStorage.setItem("counter-key", number);
CheckOnMaxNubmer(number);
}

function CheckOnMaxNubmer(number){
if (number > 9) {
numberc.textContent = maxnumder;
}else {
numberc.textContent = number;
}
}
const sbrosButton = document.querySelector("#sbros");
sbrosButton.onclick = ()=>{
localStorage.removeItem("counter-key");
number=0;
numberc.textContent = number;
circle.style.visibility = "hidden";
}