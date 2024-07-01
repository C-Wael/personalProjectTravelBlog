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

// First slider left and right buttons
const imageChangerOneLeft = () => {
    currentIndexOne--;
    if (currentIndexOne < 0) {
        currentIndexOne = sliderArrOne.length - 1;
    }
    slideOne.src = sliderArrOne[currentIndexOne];
}

const imageChangerOneRight = () => {
    currentIndexOne++;
    if (currentIndexOne >= sliderArrOne.length) {
        currentIndexOne = 0;
    }
    slideOne.src = sliderArrOne[currentIndexOne];
};

// Second slider left and right buttons
const imageChangerTwoLeft = () => {
    currentIndexTwo--;
    if (currentIndexTwo < 0) {
        currentIndexTwo = sliderArrTwo.length -1;
    }
    slideTwo.src = sliderArrTwo[currentIndexTwo];
}

const imageChangerTwoRight = () => {
    currentIndexTwo++;
    if (currentIndexTwo >= sliderArrTwo.length) {
        currentIndexTwo = 0;
    }
    slideTwo.src = sliderArrTwo[currentIndexTwo];
};

// Event listeners for the sliders buttons
arrowLeftOne.addEventListener("click", imageChangerOneLeft);
arrowRightOne.addEventListener("click", imageChangerOneRight);
arrowLeftTwo.addEventListener("click", imageChangerTwoLeft);
arrowRightTwo.addEventListener("click", imageChangerTwoRight);
