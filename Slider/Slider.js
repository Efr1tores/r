'use strict'
const Slider = document.getElementById('slides');

const slides = Slider.querySelectorAll('.slider__slide');

const arrowPrev = document.getElementById('arrow-prev');

const arrowNext = document.getElementById('arrow-next');

const toggleRadio = document.getElementById('toggle_radio');

const toggleInput = toggleRadio.querySelectorAll('input');

let currentSlide = 0;


let slideInterval;


function nextSlied() {
    
    slideReset();
   currentSlide= (currentSlide+1)%slides.length;
    slideSet();

};

const slideTime = 2000;

function continueSlideInterval() {
    slideInterval = setInterval(nextSlied, slideTime);

}
function stopSlide() { clearInterval(slideInterval); }

function slideReset() { slides[currentSlide].classList.remove('slider__slide_showing'); }

function slideSet() { slides[currentSlide].classList.add('slider__slide_showing');
 toggleInput[currentSlide].checked=true};

function showNextSlide() { stopSlide(); nextSlied(); }

function showPrevSlides() { stopSlide(); slideReset(); 
    currentSlide= (currentSlide==0)?slides.length-1:currentSlide-1;
    slideSet(); //ggg
continueSlideInterval();
Slider.addEventListener('mouseover', stopSlide);
Slider.addEventListener('mouseout', continueSlideInterval);

arrowNext.addEventListener('click', showNextSlide);
arrowPrev.addEventListener('click', showPrevSlides);

function toggleSlide(event){stopSlide(); slideReset(); currentSlide=event.target.value;
slideSet();

}
toggleRadio.addEventListener('input',toggleSlide);
