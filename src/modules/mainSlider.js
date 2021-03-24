const mainSlider = () => {
    
    const slide = document.querySelectorAll('.main-slider .slide'),
        slider = document.querySelector('.main-slider');

    const prevSlide = (elem, index) => {
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index) => {
        elem[index].removeAttribute('style');
    };

    let currentSlide = 0,
        interval;

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', () => {
        autoPlaySlide();
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.closest('.main-slider')) {
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.closest('.main-slider')) {
            startSlide();
        }
    });


    startSlide(3000);

};

export default mainSlider;