'use strict';

import selectClub from './modules/selectClub';
import togglePopups from './modules/togglePopups';
import toggleGift from './modules/toggleGift';
import mainSlider  from './modules/mainSlider';
import GallerySlider from './modules/gallerySlider';


// Select club
selectClub();

// Toggle popups
togglePopups();

// Toggle gift
// toggleGift();

// Main slider
mainSlider();

// Gallery slider
const options = {
    main: '#gallery .wrapper',
    wrap: '#gallery .gallery-slider',
    slideToShow: 1,
    infinity: true
};
const gallerySlider = new GallerySlider(options);
gallerySlider.init();
