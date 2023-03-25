let getl = document.getElementById('get-location');
let setl = document.getElementById('set-location');
let innerMap = document.getElementById('map');
let headingText = document.getElementById('heading-text')
// function to get location
function getLocation()
{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCurrentPosition);
      } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
}
// function to get current location
function getCurrentPosition(position)
{
   showPosition(position);

   // Now setting up longitude and latitude with local storage
   let lati = localStorage.getItem("lat");
   let longi = localStorage.getItem("long");
   console.log(lati);
   console.log(longi);
   innerMap.innerHTML = `<div class="main-map-div">
       <iframe src="https://maps.google.com/maps?q=${lati},${longi}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
   </div>`
}
// function to show position
function showPosition(position)
{
    localStorage.setItem("long",position.coords.longitude);
    localStorage.setItem("lat",position.coords.latitude);
}
// function for enabling button
function enabledButton()
{
    document.getElementById('get-location').disabled = false;
}
if(localStorage.getItem("long") && localStorage.getItem("lat"))
{
    document.getElementById('get-location').disabled = "true";
    let lati = localStorage.getItem("lat");
    let longi = localStorage.getItem("long");
    innerMap.innerHTML = `<div class="main-map-div">
        <iframe src="https://maps.google.com/maps?q=${lati},${longi}&hl=en&z=14&amp;output=embed" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>`
}
else
{
    document.getElementById('get-location').addEventListener('click' , () => {
        getLocation();
    })
}

setl.addEventListener('click' , () => {
    localStorage.clear();
    enabledButton();
    // after removing data from local storage it will show the dummy location also
    headingText.innerText = "As there is no Data so it will show dummy location";
    innerMap.innerHTML = `<div class="main-map-div">
    <iframe src="https://maps.google.com/maps?q=35.856737, 10.606619&z=15&output=embed" width="360" height="270" frameborder="0" style="border:0"></iframe>
</div>`
})
