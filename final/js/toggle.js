var container = document.getElementById("btnContainer");
var cards = document.getElementById("cards");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function set_grid(){
  cards.setAttribute('class', "cards");
}

function set_list(){
  cards.setAttribute('class', "cards_list");
}

const list_button = document.getElementById("list_button");
const grid_button = document.getElementById("grid_button");
list_button.addEventListener('click', () => { set_list() }, false);
grid_button.addEventListener('click', () => { set_grid() }, false);
