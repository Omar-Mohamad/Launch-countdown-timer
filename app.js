const timer = document.querySelector(".timer-container"),
  numbers = document.querySelectorAll(".num");

// getting todays date, year, month and day
let currentDate = new Date(),
  currentYear = currentDate.getFullYear(),
  currentMonth = currentDate.getMonth(),
  currentDay = currentDate.getDate();

// getting the date to countdown to it
const futureDate = new Date(currentYear, currentMonth, currentDay + 9);

// future time in milliseconds
const futureTime = futureDate.getTime();

function getRemainingTime() {
  // today in milliseconds
  const today = new Date().getTime();

  // remaining time for the countdown to end
  const remainingTime = futureTime - today;

  // values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000,
    oneHour = 60 * 60 * 1000,
    oneMinute = 60 * 1000;

  const days = Math.floor(remainingTime / oneDay),
    hours = Math.floor((remainingTime % oneDay) / oneHour),
    minutes = Math.floor((remainingTime % oneHour) / oneMinute),
    seconds = Math.floor((remainingTime % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function formatNum(num) {
    if (num < 10) {
      return (num = "0" + num);
    }
    return num;
  }

  numbers.forEach(function (num, index) {
    num.textContent = formatNum(values[index]);
  });

  if (remainingTime < 0) {
    clearInterval(countdown);
  }
}

const countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
