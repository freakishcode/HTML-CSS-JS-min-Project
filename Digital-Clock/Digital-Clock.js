// TODO: Applied js for Switch Clock Format
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  } else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
});

// TODO: Get current time in js
function clock() {
  let todaysTime = new Date();

  let hours = todaysTime.getHours();
  let minutes = todaysTime.getMinutes();
  let seconds = todaysTime.getSeconds();
  let period = "AM";

  // Set the time period(AM/PM)
  if (hours >= 12) {
    period = "PM";
  }

  // Set To 12-Hour Clock Format
  let formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  // Adding the 0 for the value lower than 10
  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // COLLECT DOM and inserting Text(Time section) to it
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;
}

let updateClock = setInterval(clock, 1000);

// TODO: Get current Date in js
let todaysDate = new Date();

const dayNumber = todaysDate.getDate();
const year = todaysDate.getFullYear();
const dayName = todaysDate.toLocaleString("default", { weekday: "long" });
const monthName = todaysDate.toLocaleString("default", { month: "short" });

// COLLECT DOM and inserting Text(Date section) to it
document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
// document.querySelector(".year").innerHTML = year;

// Applied js for display  threeDot toggler content
const threeDotBnt = document.querySelector(".threeDots");
const dotMenu = document.querySelector(".dot-menu");

threeDotBnt.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

// click any where to close threeDot toggler content
document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});
