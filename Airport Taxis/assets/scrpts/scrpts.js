const lessthan3 = document.getElementById("oneToThree");
const morethan3 = document.getElementById("fourToSaven");

function show(btn){
    if(btn.value == 1){
        lessthan3.style.display = "flex";
        morethan3.style.display = "none";
    }
    else if(btn.value == 2){
        lessthan3.style.display = "none";
        morethan3.style.display = "block";
        console.log(lessthan3.style);
    }
    else if (btn.value == 3){
        lessthan3.style.display = "flex";
        morethan3.style.display = "block";
    }
}

const searchType = document.getElementById("search__1");

function searchStyle(radio){
    if(radio.value == 1){
        searchType.style.display ="block";
        console.log(radio.value);
    }
    else searchType.style.display = "none";
}
