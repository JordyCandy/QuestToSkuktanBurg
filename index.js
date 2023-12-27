var saves = [];

//dialogue 1
var D1 = document.getElementById("Dialogue1");

//dialogue 2 hidden
var D2 = document.getElementById("Dialogue2");
D2.style.display = "none";

//dialogue 3 hidden
var D3 = document.getElementById("Dialogue3");
D3.style.display = "none";

var Mydia = document.getElementById("D3");

function yes() {
  document.getElementById("intro").textContent = "Very well traveller, we shall do a reading! Before we start, what is your name?";
  saves.push("Yes");
  document.removeEventListener("keypress", requirement);
}

function no(){
    document.getElementById("intro").textContent = "Odd choice, but I understand. Our quest ends here traveller. So long and safe travels!";
    saves.push("No");
    document.removeEventListener("keypress", requirement);
    D1.classList.add("InCaseOfNo");
    document.body.style.backgroundColor = "black";
}

document.addEventListener("keypress", requirement);

function requirement(event){
  if(event.key === "y" || event.key === "Y"){
    yes();
    timer();
    D2.style.display = "";
  }
  else if(event.key === "n" || event.key === "N"){
    no();
    document.body.style.backgroundImage = "none";
    var char1 = document.getElementById("char1");
    char1.style.display = "none";
  }
}

function timer(){
  setTimeout(name, 2000);
}

function name(){
  var names = prompt("What is your name?");
  var firstName = names.slice(0,1);
  firstName = firstName.toUpperCase();
  var secondName = names.slice(1, names.length);
  secondName = secondName.toLowerCase();
  var fullName = firstName + secondName;
  saves.push(fullName);
  document.getElementById("D1").textContent = "My name is " + saves[1] + ", noble wizard.";
  D3Timer();
  document.getElementById("D2").textContent = "Very well," + fullName + ". Onward to the CAVE OF WONDERS! Oops, my magic might take a minute to activate";
  PageTimer();
}

function UnhideD3(){
  D3.style.display = "";
}

function D3Timer(){
  setTimeout(UnhideD3, 5000);
}

function PageTimer(){
  setTimeout(NewPage, 10000);
}

function NewPage(){
  localStorage.setItem('saves', JSON.stringify(saves));
  window.location.href = "./second.html";
}