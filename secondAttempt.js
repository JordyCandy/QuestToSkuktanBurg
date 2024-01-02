var Dialogue1 = document.getElementById("Dialogue1");


var C1 = document.getElementById("C1");
var C2 = document.getElementById("C2");

var texts = document.getElementsByClassName("strangeText")[0];

C2.style.display = "none";
texts.style.display = "none";

var clickCounter = 1;

function handleEvent(event){
    if(clickCounter === 1){
        if(event.key === "c" || event.key === "C"){
            Dialogue1.style.display = "none";
            texts.style.display = "";
            C2.style.display = "";
        }
    }
}

document.addEventListener("click", handleEvent);