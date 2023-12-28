var firstLine = document.getElementById("firstLine");
var secondLine = document.getElementById("secondLine");
var Dialogue1 = document.getElementById("Dialogue1");
var Dialogue2 = document.getElementById("Dialogue2");
var Dialogue3 = document.getElementById("Dialogue3");
var Dialogue4 = document.getElementById("Dialogue4");

var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");

Dialogue1.style.display = "none";
Dialogue2.style.display = "none";
Dialogue3.style.display = "none";
Dialogue4.style.display = "none"

c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";

var clickCounter = 1;

function myClicks(event){
    if(event.key === "C" || event.key === "c"){
        if(clickCounter === 1){
            firstLine.style.display = "none";
            secondLine.style.display = "none";
            Dialogue1.style.display = "";
            clickCounter = 2;
            c1.style.display = "none";
            c2.style.display = "";
        }else if(clickCounter === 2){
            c2.style.display = "none";
            Dialogue2.style.display = "";
            c3.style.display = "";
            clickCounter = 3;
    }else if(clickCounter === 3){
        Dialogue1.style.display = "none";
        Dialogue3.style.display = "";
        c3.style.display = "none";
        c4.style.display = "";
        clickCounter = 4
    }else if(clickCounter === 4){
        Dialogue4.style.display = "";
        c4.style.display = "none";
    }
    }
}

document.addEventListener("keypress", myClicks);