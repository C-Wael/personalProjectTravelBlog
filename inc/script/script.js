const slideOne = document.getElementById("slideOne");
const slideTwo = document.getElementById("slideTwo");
const arrowLeftOne = document.getElementById("arrowLeftOne");
const arrowLeftTwo = document.getElementById("arrowLeftTwo");
const arrowRightOne = document.getElementById("arrowRightOne");
const arrowRightTwo = document.getElementById("arrowRightTwo");


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

let currentIndexOne = 0;

const imageChangerOneLeft = () => {
    currentIndexOne = 2;
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

arrowLeftOne.addEventListener("click", imageChangerOneLeft);
arrowRightOne.addEventListener("click", imageChangerOneRight);
