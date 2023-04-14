let searchInput = document.querySelector('.headerSearchInput');
let peopleNearbyDiv = document.getElementById("peopleNearbyDiv");

searchInput.addEventListener('focus', showPeopleNearby);
searchInput.addEventListener('blur', hidePeopleNearby);

function showPeopleNearby() {
  peopleNearbyDiv.style.display = "flex";
  flatpickr("#datePiker", {});
}

function hidePeopleNearby() {
  setTimeout(function() {
    peopleNearbyDiv.style.display = "none";
  }, 200);
}

function showSelectedLocation(selectedLocation) {
  searchInput.value = selectedLocation;
  hidePeopleNearby();
  localStorage.setItem("selectedLocationData", selectedLocation);
}
let retrievedData = localStorage.getItem("selectedLocationData");
if (retrievedData) {
  searchInput.value = retrievedData;
}

let numData = [0, 0, 1]; 
if (localStorage.getItem('numData')) {
  numData = JSON.parse(localStorage.getItem('numData'));
}
function handleAdultsChange(event) {
  if (event.target.classList.contains('plusAdult')) {
    let num = parseInt(event.target.previousElementSibling.textContent);
    num += 1;
    event.target.previousElementSibling.textContent = num;
    numData[0] = num;
  } else if (event.target.classList.contains('minusAdult')) {
    let num = parseInt(event.target.nextElementSibling.textContent);
    if (num > 0) {
      num -= 1;
      event.target.nextElementSibling.textContent = num;
      numData[0] = num;
    }
  }
  updateDisplay(); 
  event.stopPropagation();
}
function handleChildrenChange(event) {
  if (event.target.classList.contains('plusChildren')) {
    let num = parseInt(event.target.previousElementSibling.textContent);
    num += 1;
    event.target.previousElementSibling.textContent = num;
    numData[1] = num; 
  } else if (event.target.classList.contains('minusChildren')) {
    let num = parseInt(event.target.nextElementSibling.textContent);
    if (num > 0) {
      num -= 1;
      event.target.nextElementSibling.textContent = num;
      numData[1] = num;
    }
  }
  updateDisplay(); 
  event.stopPropagation();
}
function handleRoomsChange(event) {
  if (event.target.classList.contains('plusRooms')) {
    let num = parseInt(event.target.previousElementSibling.textContent);
    num += 1;
    event.target.previousElementSibling.textContent = num;
    numData[2] = num;
  } else if (event.target.classList.contains('minusRooms')) {
    let num = parseInt(event.target.nextElementSibling.textContent);
    if (num > 1) {
      num -= 1;
      event.target.nextElementSibling.textContent = num;
      numData[2] = num;
    }
  }
  updateDisplay();
  event.stopPropagation();
}
function updateDisplay() {
  document.getElementById('numShow').textContent = numData[0] + ' adults, ' + numData[1] + ' children, ' + numData[2] + ' room';
  localStorage.setItem('numData', JSON.stringify(numData));
}
document.querySelector('.plusAdult').addEventListener('click', handleAdultsChange);
document.querySelector('.minusAdult').addEventListener('click', handleAdultsChange);
document.querySelector('.plusChildren').addEventListener('click', handleChildrenChange);
document.querySelector('.minusChildren').addEventListener('click', handleChildrenChange);
document.querySelector('.plusRooms').addEventListener('click', handleRoomsChange);
document.querySelector('.minusRooms').addEventListener('click', handleRoomsChange);
