class UniSlider {
    constructor({main, wrap, prev, next, dotsClassName, prefixClassName = 'uni-', slideToShow = 1, position = 0, infinity = false}) {
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.dotsClassName = dotsClassName;
        this.prefixClassName = prefixClassName;
        this.dots = null;
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
        this.addClass();
        this.addStyle();
        if (!this.next || !this.prev) {
            this.addArrow();
        }
        if (this.dotsClassName) {
            this.addDots();
            this.markActiveDot();
        }
        this.controlSlider();
    }

    addClass() {
        this.main.classList.add(this.prefixClassName + 'slider');
        this.wrap.classList.add(this.prefixClassName + 'slider__wrap');
        for (const item of this.slides) {
            item.classList.add(this.prefixClassName + 'slider__item');
        }
    }

    addStyle() {
        const style = document.createElement('style');
        style.id = this.prefixClassName + 'id-slider-style';
        style.textContent = `
            .${this.prefixClassName}slider__item {
                flex: 0 0 ${this.options.widthSlide}%;
            }
        `;

        document.head.insertAdjacentElement('beforeend', style);
    }

    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }

    renderSlider() {
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        if (this.dots) {
            this.markActiveDot();
        }
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

        this.prev.className = `fa fa-chevron-left ${this.prefixClassName}slider__prev`;
        this.next.className = `fa fa-chevron-right ${this.prefixClassName}slider__next`;

        this.main.insertAdjacentElement('beforeend', this.prev);
        this.main.insertAdjacentElement('beforeend', this.next);
    }

    addDots() {
        this.dots = document.createElement('div');
        this.dots.className = this.prefixClassName + this.dotsClassName;

        for (let i = 0; i < this.slides.length; i++) {
            const dot = document.createElement('div');
            dot.className = this.prefixClassName + this.dotsClassName + '__item';
            dot.dataset.sliderIndex = i;
            this.dots.insertAdjacentElement('beforeend', dot);
        }
        this.main.insertAdjacentElement('beforeend', this.dots);
        this.dots.addEventListener('click', (event) => {
            this.clickDot(event.target);
        });
    }

    clickDot(target) {
       const indexSlider = target.dataset.sliderIndex;
       if (!indexSlider || indexSlider === this.options.position) {
           return;
       }
       this.options.position = +indexSlider;
       this.renderSlider();
    }

    markActiveDot() {
        const dots = this.dots.querySelectorAll('div');
        const activeDotClassName = this.prefixClassName + this.dotsClassName + '__item_active';
        dots.forEach((item, index) => {
            if (index === this.options.position) {
                item.classList.add(activeDotClassName);
            } else if (item.classList.contains(activeDotClassName)) {
                item.classList.remove(activeDotClassName);
            }
        });
    }

}

export default UniSlider;