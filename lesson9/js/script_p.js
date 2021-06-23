// function
function getNumberOfDays(start, end) {
  const date1 = new Date(start);
  const date2 = new Date(end);

  // One day in milliseconds
  const oneDay = 1000 * 60 * 60 * 24;

  // Calculating the time difference between two dates
  const diffInTime = date2.getTime() - date1.getTime();

  // Calculating the no. of days between two dates
  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
}

// Display date
function functionDisplay() {
    document.querySelector(".year").innerHTML = new Date().getFullYear();
    document.querySelector(".date").innerHTML = document.lastModified;
}
document.addEventListener("DOMContentLoaded", function() {
    functionDisplay();

    // Checking if local Storage is supported
    if (typeof(Storage) !== "undefined") {
      // Retrieve last date
      var lastDate = Date.parse(localStorage.getItem("lastdate"));
      // Today
      var today = Date.now()
      // If there is no date in local Storage...
      if (!lastDate) {
        lastDate = Date.now();
      }
      // Calculate
      var days = getNumberOfDays(lastDate, today);
      console.log(days);
      document.querySelector("#days").innerHTML = days;
      // Store
      localStorage.setItem("lastdate", today);
    } else {
      document.querySelector("#days").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
});
