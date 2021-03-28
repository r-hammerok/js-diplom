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
    infinity: true
};
const serviceSlider = new UniSlider(serviceOptions);
serviceSlider.init();

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