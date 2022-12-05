const button = document.getElementById("button");
const div = document.getElementById("div");
const zivoty = document.getElementById("zivoty");
const zivoty2 = document.getElementById("zivoty2");
const info = document.getElementById("info");

button.onmousedown = () => {
    if(zivoty.innerHTML>0 && zivoty2.innerHTML > 0) {
        div.style.left = "10px";
        zivoty2.innerHTML--;
    }
  if (zivoty2.innerHTML <= 0) {
    info.innerText = "nepřítel zemřel";
    clearInterval(interval);
  } 
};

button.onmouseup = () => {
  div.style.left = "5px";
};

const interval = setInterval(() => {
  zivoty.innerHTML--;
  if(zivoty.innerHTML <= 0){
info.innerHTML = "zemrel jsi"
    clearInterval(interval)
  }
}, 500);

div.onclick =() => {
div.style.right = 50 + "px";

}