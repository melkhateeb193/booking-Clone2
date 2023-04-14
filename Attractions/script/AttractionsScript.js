"use strict";


function DisplayFunction() {
    var collapses = document.getElementsByClassName("collapse");
    console.log(collapses);
    for (var element of collapses) {
        console.log(element.getAttribute("class"));
        element.setAttribute("class", "collapse");
    }
}

