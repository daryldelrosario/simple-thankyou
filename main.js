/* DOCUMENT VARIABLES */
const button = document.getElementById("btn-changer");
const background = document.getElementById("bg-changer");
const refresh = document.getElementById("refresh-button");

/* MAIN FUNCTIONS*/
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

function changeButtonColor() {
    const newColor = getRandomColor();
    button.style.backgroundColor = newColor;
}

function promptRefresh() {
    const shouldRefresh = window.confirm("Do you want to refresh the page?");

    if(shouldRefresh) {
        location.reload();
    }
}

/* FUNCTION APPLICATION */
button.addEventListener("click", changeButtonColor);
background.addEventListener("click", changeBackgroundColor);
refresh.addEventListener("click", promptRefresh);