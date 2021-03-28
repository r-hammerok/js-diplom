'use strict';

import selectClub from './modules/selectClub';
import togglePopups from './modules/togglePopups';
import mainSlider  from './modules/mainSlider';
import UniSlider from './modules/uniSlider';
import calcCards from './modules/calcCards';
import sendForm from './modules/sendForm';
import maskPhone from './modules/maskPhone';
import toggleMenu from './modules/toggleMenu';
import validaionInput from './modules/validationInput';
import scrollToTop from './modules/scrollToTop';
import smoothScrolling from './modules/smoothScrolling';


// Select club
selectClub();

// Toggle popups
togglePopups();

// Main slider
mainSlider();

// Gallery slider
const galleryOptions = {
    main: '#gallery .wrapper',
    wrap: '#gallery .gallery-slider',
    dotsClassName: 'slider-dots',
    slideToShow: 1,
    infinity: true
};
const gallerySlider = new UniSlider(galleryOptions);
gallerySlider.init();

// Service slider
const serviceOptions = {
    main: '#services .services-slider__wrap',
    wrap: '#services .services-slider',
    slideToShow: 5,
    prefixClassName: 'srv-',
    infinity: true,

    responsive: [
        {
            breakpoint: 1200,
            slidesToShow: 4
        },
        {
            breakpoint: 992,
            slidesToShow: 3
        },
        {
            breakpoint: 768,
            slidesToShow: 2
        },
        {
            breakpoint: 480,
            slidesToShow: 1
        }
    ]
};
const serviceSlider = new UniSlider(serviceOptions);
serviceSlider.init();

// Advantages slider
const advantagesOptions = {
    main: '.advantages-slider .wrapper',
    wrap: '.advantages-slider #adv-slider',
    slideToShow: 3,
    prefixClassName: 'adv-',
    infinity: true
};
const advantagesSlider = new UniSlider(advantagesOptions);
advantagesSlider.init();

// Calculate Cards
calcCards('ТЕЛО2019');

// Mask phone
maskPhone('input[type="tel"]');

// Send form
sendForm();

// Togle menu
toggleMenu();

// Valiadtion input
validaionInput();

// Scroll to top
scrollToTop();

// Smooth scrolling
smoothScrolling();