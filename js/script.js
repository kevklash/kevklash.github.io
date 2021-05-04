function functionDisplay() {
    document.querySelector(".year").innerHTML = new Date().getFullYear();
    document.querySelector(".date").innerHTML = document.lastModified;
}
document.addEventListener("DOMContentLoaded", function() {
    functionDisplay();
});