"use strict";


function DisplayFunction() {
    var collapses = document.getElementsByClassName("collapse");
    console.log(collapses);
    for (var element of collapses) {
        console.log(element.getAttribute("class"));
        element.setAttribute("class", "collapse");
    }
}

function SetCurrentStyle(element){
    element.style.backgroundColor = "#F0F6FD";
    element.childNodes.forEach(el => {
        console.log(el);
        el.style.color = "blue";
    });
}

function ChangeCurrency(element){
    console.log(element.lastChild);
    var currency = element.lastChild.innerHTML;
    console.log(currency);
    document.getElementById("currncy1").innerHTML = currency;
    SetCurrentStyle(element);

    
}

function prevStyle(){
    var elements = document
}

