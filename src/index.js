function updateTime() {
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = document.querySelector("#london-date");
    londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
    let londonTimeElement = document.querySelector("#london-time");
    londonTimeElement.innerHTML = moment()
      .tz("Europe/London")
      .format("h:mm:ss[<small>]A[</small>]");
  }
  let melbourneElement = document.querySelector("#melbourne");
  if (melbourneElement) {
    let melbourneDateElement = document.querySelector("#melbourne-date");
    melbourneDateElement.innerHTML = moment().format("MMMM Do YYYY");
    let melbourneTimeElement = document.querySelector("#melbourne-time");
    melbourneTimeElement.innerHTML = moment()
      .tz("Australia/Melbourne")
      .format("h:mm:ss[<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
 <div>
  <h2>${cityName}</h2><div class="date" id="city-date">
     ${cityTime.format("MMMM Do YYYY")}
   </div>
    </div>
         <div class="time" id="city-time">${cityTime.format(
           "h:mm:ss"
         )}<small>${cityTime.format("A")}</small></div>
        

  </div>
        <a href="https://showworldclock.netlify.app/"> All cities</a>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
