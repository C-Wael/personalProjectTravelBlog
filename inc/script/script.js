// Getting the elements from the DOM.
const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const arrowLeftOne = document.getElementById("arrowLeftOne");
const arrowLeftTwo = document.getElementById("arrowLeftTwo");
const arrowRightOne = document.getElementById("arrowRightOne");
const arrowRightTwo = document.getElementById("arrowRightTwo");

// Arrays of the srcs for my sliders
const sliderArrOne = [
    "inc/img/1.jpg",
    "inc/img/2.jpeg",
    "inc/img/3.jpeg"
];

const sliderArrTwo = [
    "inc/img/4.jpeg",
    "inc/img/5.jpeg",
    "inc/img/6.jpeg"
];

// index for the sliders
let currentIndexOne = 0;
let currentIndexTwo = 0;

// Generic function to change the image
const changeImage = (currentIndex, sliderArr, slide, direction) => {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = sliderArr.length - 1;
    } else if (currentIndex >= sliderArr.length) {
        currentIndex = 0;
    }
    slide.src = sliderArr[currentIndex];
    return currentIndex;
};

// Event listeners for the sliders buttons
arrowLeftOne.addEventListener("click", () => {
    currentIndexOne = changeImage(currentIndexOne, sliderArrOne, slideOne, -1);
});
arrowRightOne.addEventListener("click", () => {
    currentIndexOne = changeImage(currentIndexOne, sliderArrOne, slideOne, 1);
});
arrowLeftTwo.addEventListener("click", () => {
    currentIndexTwo = changeImage(currentIndexTwo, sliderArrTwo, slideTwo, -1);
});
arrowRightTwo.addEventListener("click", () => {
    currentIndexTwo = changeImage(currentIndexTwo, sliderArrTwo, slideTwo, 1);
});
