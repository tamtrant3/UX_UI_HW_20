$('.burger').click(function() {
    $('.menu').slideToggle()
})

ScrollReveal().reveal('.casestudy, .softwares, #contact-section', {
    delay: 300,
    distance: '0px',
    duration: 1000,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 0.9,
    cleanup: true,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    afterReset: function (el) {},
    afterReveal: function (el) {
        ScrollReveal().clean(el);
    },
    beforeReset: function (el) {},
    beforeReveal: function (el) {},
}); 