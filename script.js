window.addEventListener(
"load",
()=>{

document
.querySelector(".loader")
.classList
.add("hide");

});

document.addEventListener(
"DOMContentLoaded",
()=>{

const text =
"Hi, I'm Rey.";

const typing =
document.getElementById(
"typing"
);

let i = 0;

function typeWriter(){

if(i < text.length){

typing.textContent +=
text.charAt(i);

i++;

setTimeout(
typeWriter,
90
);

}

}

typeWriter();

const reveals =
document.querySelectorAll(
".reveal"
);

function reveal(){

reveals.forEach(
(section)=>{

const top =
section
.getBoundingClientRect()
.top;

if(
top <
window.innerHeight
-120
){

section.classList.add(
"active"
);

}

});

}

window.addEventListener(
"scroll",
reveal
);

reveal();

});