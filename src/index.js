'use strict';

import selectClub from './modules/selectClub';
import togglePopups from './modules/togglePopups';
import toggleGift from './modules/toggleGift';
import mainSlider  from './modules/mainSlider';
import UniSlider from './modules/uniSlider';
import calcCards from './modules/calcCards';
import sendForm from './modules/sendForm';


// Select club
selectClub();

// Toggle popups
togglePopups();

// Toggle gift
// toggleGift();

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
calcCards('ТЕЛО2020');

// Send form
sendForm();