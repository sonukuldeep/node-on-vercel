"use strict";
var cards = document.querySelectorAll(".animate-on-scroll");
var scrollCard = document.querySelector(".animate-on-scroll.scroll-1");
var windowHeight = window.innerHeight;
var AnimateProperty;
(function (AnimateProperty) {
    AnimateProperty["scale"] = "--scale";
    AnimateProperty["ease"] = "--easeIn";
    AnimateProperty["scroll"] = "--scroll";
})(AnimateProperty || (AnimateProperty = {}));
function animateFunction(element, property, delay, propertyVariable) {
    if (delay === void 0) { delay = 1; }
    if (propertyVariable === void 0) { propertyVariable = ""; }
    var top = element.getBoundingClientRect().top;
    var topFactor = delay;
    var range = topFactor * windowHeight - top;
    var step = range / windowHeight;
    if (range > 0 && range <= windowHeight) {
        document.body.style.setProperty("".concat(property).concat(propertyVariable), step.toString());
    }
}
window.addEventListener("scroll", function () {
    cards[0] && animateFunction(cards[0], AnimateProperty.ease, 1);
    cards[1] && animateFunction(cards[1], AnimateProperty.ease, 1, 1);
    cards[3] && animateFunction(cards[3], AnimateProperty.ease, 1, 2);
    cards[4] && animateFunction(cards[4], AnimateProperty.ease, 1, 3);
    cards[5] && animateFunction(cards[5], AnimateProperty.ease, 1, 4);
    cards[6] && animateFunction(cards[6], AnimateProperty.ease, 1, 5);
    cards[9] && animateFunction(cards[9], AnimateProperty.ease, 1, 6);
    cards[10] && animateFunction(cards[10], AnimateProperty.scale, 0.7);
    cards[11] && animateFunction(cards[11], AnimateProperty.ease, 1, 7);
    cards[12] && animateFunction(cards[12], AnimateProperty.ease, 1, 8);
    cards[13] && animateFunction(cards[13], AnimateProperty.ease, 1, 9);
    animateFunction(scrollCard, AnimateProperty.scroll, 0.5);
});
var hamburger = document.querySelector(".hamburger .svg");
var pagesBlock = document.querySelector(".pages");
hamburger === null || hamburger === void 0 ? void 0 : hamburger.addEventListener("click", function () {
    pagesBlock === null || pagesBlock === void 0 ? void 0 : pagesBlock.classList.toggle("active");
});
var slider = document.querySelectorAll('.w-slider-mask .w-slide');
function getActiveSlide() {
    var activeSlide = 0;
    slider.forEach(function (slide, index) {
        if (slide.classList.contains('active')) {
            activeSlide = index;
        }
    });
    return activeSlide;
}
var SlideDirection;
(function (SlideDirection) {
    SlideDirection[SlideDirection["RIGHT"] = 0] = "RIGHT";
    SlideDirection[SlideDirection["LEFT"] = 1] = "LEFT";
})(SlideDirection || (SlideDirection = {}));
function slideFunction(slide) {
    var activeSlide = getActiveSlide();
    slider[activeSlide].classList.toggle('active');
    if (slide === SlideDirection.RIGHT) {
        if (activeSlide === 2) {
            slider[activeSlide - 2].classList.toggle('active');
        }
        else {
            slider[activeSlide + 1].classList.toggle('active');
        }
    }
    else if (slide === SlideDirection.LEFT) {
        if (activeSlide === 0) {
            slider[activeSlide + 2].classList.toggle('active');
        }
        else {
            slider[activeSlide - 1].classList.toggle('active');
        }
    }
}
var rightArrow = document.querySelector('.right-arrow .arrow-nav');
var leftArrow = document.querySelector('.left-arrow .arrow-nav');
rightArrow === null || rightArrow === void 0 ? void 0 : rightArrow.addEventListener('click', function () { return slideFunction(SlideDirection.RIGHT); });
leftArrow === null || leftArrow === void 0 ? void 0 : leftArrow.addEventListener('click', function () { return slideFunction(SlideDirection.LEFT); });
