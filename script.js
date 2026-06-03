const container = document.getElementById("img-container");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");
const indexDisplay = document.getElementById("index-display");

// Image collection
const images = [
    "https://i.pinimg.com/736x/7d/dc/d8/7ddcd8224c0dcdfe09c2a75dd9bb0157.jpg",
    "https://i.pinimg.com/736x/05/e7/17/05e71716e5a61dded9fa5a84060bc487.jpg",
    "https://i.pinimg.com/736x/e5/81/13/e58113372e300b799c2bb15c041634b3.jpg",
    "https://i.pinimg.com/736x/06/77/58/067758938991e3b0ee501a50607452ec.jpg"
];

// Event listeners
nextBtn.addEventListener("click", clickNext);
backBtn.addEventListener("click", clickBack);

// Sets the background to first image in collection
container.style.backgroundImage = "url('" + images[0] + "')";


let index = 0;
const indexMsg = " of " + images.length;
backBtn.disabled = true;
indexDisplay.textContent = index + 1 + indexMsg;


function clickNext() {
    console.log("Clicked next");
    if (images[index + 1] !== undefined) {
        index += 1;
        updateContent();
    }
    updateButtonStatus();
}

function clickBack() {
    console.log("Clicked back")
    if (index - 1 >= 0) {
        index -= 1;
        updateContent();
    }
    updateButtonStatus();
}

function updateButtonStatus() {
    const backDisabled = index <= 0;
    const nextDisabled = index >= images.length - 1;
    backBtn.disabled = backDisabled;
    nextBtn.disabled = nextDisabled;
}

function updateContent() {
    container.style.backgroundImage = "url('" + images[index] + "')";
    indexDisplay.textContent = index + 1 + indexMsg;
}








