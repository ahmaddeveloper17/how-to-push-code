let hoursElement = document.getElementById("hours");

let minutesElement = document.getElementById("minutes");

let secondsElement = document.getElementById("seconds");

let ampmElement = document.getElementById("ampm");

setInterval(
  function () {
    let date = new Date();
    let currentHours = date.getHours();
    let amPm = "AM";
    if (currentHours>11) {
      amPm = "PM";
      if (currentHours>12) {
        currentHours -= 12
      }
    }
    hoursElement.innerHTML = currentHours;
    minutesElement.innerHTML = date.getMinutes();
    secondsElement.innerHTML = date.getSeconds();
    ampmElement.innerHTML = amPm ; 
  },1000
);