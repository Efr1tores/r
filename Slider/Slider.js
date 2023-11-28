'use strict'
const Slider = document.getElementById('slides');

const slides = Slider.querySelectorAll('.slider__slide');

const arrowPrev = document.getElementById('arrow-prev');

const arrowNext = document.getElementById('arrow-next');

let currentSlide = 0;


let slideInterval;

const slideTime = 2000;
function continueSlideInterval() {
    slideInterval = setInterval(nextSlied, slideTime);

}
function stopSlide() { clearInterval(slideInterval); };

function slideReset() { slides[currentSlide].classList.remove('.slider__slide_showing'); };

function slideSet() { slides[currentSlide].classList.add('slider__slide_showing'); };

function showNextSlide() { stopSlide(); nextSlied(); }

function showPrevSlides() { stopSlide(); slideReset(); slideSet(); }

function nextSlied() {
    slideReset();
    currentSlide = (currentSlide + 1) % slides.length;
    slideSet();

};


continueSlideInterval();
Slider.addEventListener('mouseover', stopSlide);
Slider.addEventListener('mouseover', continueSlideInterval);

arrowNext.addEventListener('click', showNextSlide);
arrowPrev.addEventListener('click',showPrevSlides);
