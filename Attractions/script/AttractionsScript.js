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
    console.log("AAA");
    element.addEventListener("focus",(event)=>{
        console.log("BBB");
        var btns = document.querySelectorAll("#btnc");
        console.log(btns);
        btns.forEach((els)=>{
            els.style.backgroundColor = "";
            els.childNodes.forEach((item)=>{
                console.log(item.innerHTML);
                item.style= "color: #717171";
            })
        });
        // document.getElementsByTagName("button")
        event.target.style.backgroundColor = "#F0F6FD";
        element.childNodes.forEach(el => {
            console.log(el);
            el.style= "color: blue";
        });
    })
}


function ChangeCurrency(element){
    console.log(element.lastChild);
    var currency = element.lastChild.innerHTML;
    console.log(currency);
    document.getElementById("currncy1").innerHTML = currency;
    SetCurrentStyle(element);
}


