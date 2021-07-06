const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday"];

const date = new Date();
const dayName = dayNames[date.getDay()];
const monthName = monthNames[date.getMonth()];
const year = date.getFullYear();
const currentDate = date.getDate();

function functionDisplayDate() {

    const formattedCurrentDate = `${dayName}, ${currentDate} ${monthName} ${year}`;

    document.querySelector('.date').textContent = formattedCurrentDate;
    document.querySelector(".year").innerHTML = year;
}

function getWindChill(temperature, windSpeed) {
  return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75)  *  windSpeed ^ 0.16;
}

document.addEventListener("DOMContentLoaded", function() {
  const temperature = document.querySelector('.temp').innerText;
  const wind = document.querySelector('.wind').innerText;
  const chill = document.querySelector('.chill');
  functionDisplayDate();
  chill.innerHTML = `<b>${getWindChill(temperature, wind)} &deg; F</b>`;
});
