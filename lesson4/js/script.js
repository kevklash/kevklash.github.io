function functionDisplay() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];

    const date = new Date();
    const dayName = dayNames[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const currentDate = date.getDate();

    const formattedCurrentDate = `${dayName}, ${currentDate} ${monthName} ${year}`;

    document.querySelector('.date').textContent = formattedCurrentDate;
    document.querySelector(".year").innerHTML = year;
}
document.addEventListener("DOMContentLoaded", function() {
    functionDisplay();
});
