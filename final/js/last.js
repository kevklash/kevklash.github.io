function functionDisplay() {
    document.querySelector(".date").innerHTML = document.lastModified;
}
document.addEventListener("DOMContentLoaded", function() {
    functionDisplay();
});
