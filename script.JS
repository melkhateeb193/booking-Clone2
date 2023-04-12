var searchInput = document.querySelector('.headerSearchInput');
searchInput.addEventListener('click', showPeopleNearby);
searchInput.addEventListener('blur', hidePeopleNearby); 

function showPeopleNearby() {
  var peopleNearbyDiv = document.getElementById("peopleNearbyDiv");
  peopleNearbyDiv.style.display = "flex";
}

function hidePeopleNearby() {
  var peopleNearbyDiv = document.getElementById("peopleNearbyDiv");
  peopleNearbyDiv.style.display = "none";
}

