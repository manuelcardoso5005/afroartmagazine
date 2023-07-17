var card1 = document.querySelector('.cards-1');
var card2 = document.querySelector('.cards-2');
var card3 = document.querySelector('.cards-3');
var card4 = document.querySelector('.cards-4');

var next1 = document.querySelector('#next1');
var next2 = document.querySelector('#next2');
var next3 = document.querySelector('#next3');

var back1 = document.querySelector('#back1');
var back2 = document.querySelector('#back2');
var back3 = document.querySelector('#back3');

next1.addEventListener("click", function(){
    card1.style.left = "-450px";
    card2.style.left = "0px";
})

back1.addEventListener("click", function(){
    card2.style.left = "-450px";
    card1.style.left = "0px";
}) 

next2.addEventListener("click", function(){
    card2.style.left = "-450px";
    card3.style.left = "0px";
})

back2.addEventListener("click", function(){
    card3.style.left = "-450px";
    card2.style.left = "0px";
}) 
next3.addEventListener("click", function(){
    card3.style.left = "-450px";
    card4.style.left = "0px";
})

back3.addEventListener("click", function(){
    card4.style.left = "-450px";
    card3.style.left = "0px";
}) 