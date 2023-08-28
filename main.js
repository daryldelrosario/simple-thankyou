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

function getRandomPicture() {
    return `https://source.unsplash.com/random?t=${Date.now()}`;
}

function changeBackgroundColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

async function changeBackgroundImg() {
    const imgSrc = getRandomPicture();

    document.body.style.backgroundColor = "transparent";

    const img = new Image();
    img.src = imgSrc;
    await img.decode();
    
    document.body.style.backgroundImage = `url(${imgSrc})`;
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
background.addEventListener("click", changeBackgroundImg);
refresh.addEventListener("click", promptRefresh);