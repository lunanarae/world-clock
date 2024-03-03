function updateTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = document.querySelector("#london-date");
  londonDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let londonTimeElement = document.querySelector("#london-time");
  londonTimeElement.innerHTML = moment()
    .tz("Europe/London")
    .format("h:mm:ss[<small>]A[</small>]");
  let melbourneElement = document.querySelector("#melbourne");
  let melbourneDateElement = document.querySelector("#melbourne-date");
  melbourneDateElement.innerHTML = moment().format("MMMM Do YYYY");
  let melbourneTimeElement = document.querySelector("#melbourne-time");
  melbourneTimeElement.innerHTML = moment()
    .tz("Australia/Melbourne")
    .format("h:mm:ss[<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
