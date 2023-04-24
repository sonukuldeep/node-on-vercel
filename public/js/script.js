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
}, false);
