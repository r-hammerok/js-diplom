class GallerySlider {
    constructor({main, wrap, prev, next, dots, slideToShow = 1, position = 0, infinity = false}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.dots = document.querySelector(dots);
        this.slides = this.wrap.children;
        this.slidesToShow = slideToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
    }

    init() {
        this.addGalClass();
        this.addStyle();
        if (!this.next || !this.prev) {
            this.addArrow();
        }
        if (!this.dots) {
            this.addDots();
        }
        this.controlSlider();
    }

    addGalClass() {
        this.main.classList.add('gal-slider');
        this.wrap.classList.add('gal-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('gal-slider__item');
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = 'galSlider-style';
        style.textContent = `
            .gal-slider {
                overflow: hidden !important;
                position: relative !important;
            }
            .gal-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-chahge: transform !important;
                padding: 0 !important;
                max-width: none !important;
             }
            .gal-slider__item {
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;

        document.head.appendChild(style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    renderSlider() {
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }

    prevSlider() {
        if (this.options.position === 0 && !this.options.infinity) {
            return;
        }
        --this.options.position;

        if (this.options.position < 0) {
            this.options.position = this.options.maxPosition;
        }
        this.renderSlider();
    }

    nextSlider() {

        if (this.options.position === this.options.maxPosition && !this.options.infinity) {
            return;
        }

        ++this.options.position;

        if (this.options.position > this.options.maxPosition) {
            this.options.position = 0;
        }
        this.renderSlider();
    }

    addArrow() {
        this.prev = document.createElement('div');
        this.next = document.createElement('div');

        this.prev.className = 'fa fa-chevron-left gal-slider__prev';
        this.next.className = 'fa fa-chevron-right gal-slider__next';

        const style = document.createElement('style');
        style.textContent = `
            .gal-slider__prev,
            .gal-slider__next {
                position: absolute;
                top: 50%;
                margin-top: -18px;
                z-index: 100;
                cursor: pointer;
                padding: 13px 15px;
                background-color: #ffd11a;
                border-radius: 50%;

            }
            .gal-slider__next {
                right: 10%;
            }
            .gal-slider__prev {
                left: 10%;
            }
        `;

        document.head.appendChild(style);

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);
    }

    addDots() {
        this.dots = document.createElement('div');
        this.dots.className = 'slider-dots gal-slider-dots';

        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('div');
            dot.className = 'gal-slider-dots__item';
            this.dots.appendChild(dot);
        }

        const dotWidth = 30;
        const containerDotsWidth = dotWidth * (this.slides.length + 1);

        const style = document.createElement('style');
        style.textContent = `
            .gal-slider-dots {
                display: inline-flex;
                justify-content: center;
                left: 0 !important;
                right: 0 !important;
                margin: 0 auto !important;
                width: 20% !important;
            }
            .gal-slider-dots__item {
                padding-bottom: 5px;
                background-color: #ffd11a;
                width: ${dotWidth}px;
            }
            .gal-slider-dots__item:not(:last-child) {
                margin-right: 10px;
            }
        `;

        document.head.appendChild(style);

        this.main.appendChild(this.dots);
    }

}

export default GallerySlider;