const smoothScrolling = () => {
    const scrollTo = (blockId = '', behavior = 'smooth', block = 'start') => {
        document.querySelector(blockId).scrollIntoView({
            behavior: behavior,
            block: block
        });
    };

    document.querySelector('body').addEventListener('click', (event) => {

        const target = event.target;

        let targetScroll;
        if (target.closest('li.scroll')) {
            const a = target.closest('li.scroll').querySelector('a');
            const href = a.getAttribute('href');
            if (href && href[0] === '#') {
                targetScroll = href;
            }
        }
        if (target.closest('a#totop')) {
            targetScroll = 'body';
        }

        if (targetScroll) {
            event.preventDefault();
            scrollTo(targetScroll);
        }
    });

};

export default smoothScrolling;