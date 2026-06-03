const container = document.getElementById("img-container");
const nextBtn = document.getElementById("next-btn");
const backBtn = document.getElementById("back-btn");

//Image collection
const images = ["https://i.pinimg.com/736x/7d/dc/d8/7ddcd8224c0dcdfe09c2a75dd9bb0157.jpg", "https://i.pinimg.com/736x/05/e7/17/05e71716e5a61dded9fa5a84060bc487.jpg", "https://i.pinimg.com/736x/e5/81/13/e58113372e300b799c2bb15c041634b3.jpg"];

//Event listeners
nextBtn.addEventListener("click", clickNext);
backBtn.addEventListener("click", clickBack);

//Sets the background to first image in collection
container.style.backgroundImage = "url('" + images[0] + "')";

let index = 0;
let indexMsg = " of " + images.length;
container.textContent = index + 1 + indexMsg;


function clickNext() {
    console.log("Clicked next");
    if (images[index + 1] === undefined) {
        return;
    } else {
        index += 1;
        container.style.backgroundImage = "url('" + images[index] + "')";
        container.textContent = index + 1 + indexMsg;
    }
}

function clickBack() {
    console.log("Clicked back")
    if (index - 1 < 0) {
        return;
    } else {
        index -= 1;
        container.style.backgroundImage = "url('" + images[index] + "')";
        container.textContent = index + 1 + indexMsg;
    }
}








