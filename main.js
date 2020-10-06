var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
input.value = ''
color.value = '#b0b0b0'

var selected_cell = cells[0];
selected_cell.style.backgroundColor = "#000000";
selected_cell.style.color = "#ffffff";
for (let index = 0; index < cells.length; index++) {
    const element = cells[index];
    element.addEventListener("click", ()=>{
        selected_cell.style.backgroundColor = "";
        selected_cell.style.color = "#000000";
        element.style.backgroundColor = "#000000";
        element.style.color = "#ffffff";
        selected_cell = element;
    })
}

function inputSchedule()
{
    var string = input.value;
    selected_cell.firstElementChild.innerHTML = string;
    selected_cell.firstElementChild.style.color = color.value;
}

button.addEventListener("click", inputSchedule);

input.addEventListener("keyup", function(event){
    if(event.key === 'Enter')
    {
        inputSchedule();
    }
});




//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}