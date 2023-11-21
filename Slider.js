'use strict'
const Slider=document.getElementById('Slids');

const slides=Slider.querySelectorAll('.Slider__slid');
console.log(slides);

let arr1=[];

let carentSlide=0;

function nextSlied(){slides[carentSlide].classList.remove('.Slider__slid_showing');
carentSlide=++carentSlide%slides.length;

slides[carentSlide].classList.add('Slider__slid_showing');


};

