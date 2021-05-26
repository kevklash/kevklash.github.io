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

function displayAnnoucement(){
  if (dayName === "Tuesday"){
    const announcement = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.querySelector('.announcement').style.display = 'block';
    document.querySelector('.announcement').innerHTML = announcement;
  }
}

document.addEventListener("DOMContentLoaded", function() {
    functionDisplayDate();
    displayAnnoucement();
});
