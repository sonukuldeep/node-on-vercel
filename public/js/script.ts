// getting cards to listen to
const cards = document.querySelectorAll(".animate-on-scroll");
const scrollCard = document.querySelector(".animate-on-scroll.scroll-1");
const windowHeight = window.innerHeight // gets viewport height

enum AnimateProperty {
    scale = '--scale',
    ease = '--easeIn',
    scroll = '--scroll'
}
type AnimateFunctionProps = {
    element: NodeListOf<Element>;
    property: AnimateProperty;
    delay: number;
    propertyVariable: string;
}

function animateFunction(element: Element, property: AnimateProperty, delay = 1, propertyVariable: number | string = "") {
    const top = element.getBoundingClientRect().top // gets element top relative to view port
    const topFactor = delay // lower value to delay animation and vice versa
    const range = topFactor * windowHeight - top // if window - top is + then object is in view 
    const step = range / windowHeight // responsible for a steady increment/decrement from 0-1 during scroll. nothing else 
    if (range > 0 && range <= windowHeight) { // animate only when object is in view and in limit 
        document.body.style.setProperty(`${property}${propertyVariable}`, step.toString()) //sets css variable that can be used for animation
    }
}

window.addEventListener(
    "scroll",
    () => {
        cards[0] && animateFunction(cards[0], AnimateProperty.ease, 1)
        cards[1] && animateFunction(cards[1], AnimateProperty.ease, 1, 1)
        // animateFunction(cards[2], AnimateProperty.ease, 1, 1) // uses the same property as cards[1]
        cards[3] && animateFunction(cards[3], AnimateProperty.ease, 1, 2)
        cards[4] && animateFunction(cards[4], AnimateProperty.ease, 1, 3)
        cards[5] && animateFunction(cards[5], AnimateProperty.ease, 1, 4)
        cards[6] && animateFunction(cards[6], AnimateProperty.ease, 1, 5)
        // animateFunction(cards[7], AnimateProperty.ease, 1,)
        cards[9] && animateFunction(cards[9], AnimateProperty.ease, 1, 6)
        cards[10] && animateFunction(cards[10], AnimateProperty.scale, 0.7)
        cards[11] && animateFunction(cards[11], AnimateProperty.ease, 1, 7)
        cards[12] && animateFunction(cards[12], AnimateProperty.ease, 1, 8)
        cards[13] && animateFunction(cards[13], AnimateProperty.ease, 1, 9)
        animateFunction(scrollCard!, AnimateProperty.scroll, 0.5)

    },
    false
);



const hamburger = document.querySelector(".hamburger .svg");
const pagesBlock = document.querySelector(".pages");
hamburger?.addEventListener("click", () => {
    pagesBlock?.classList.toggle("active");
});


const slider = document.querySelectorAll('.w-slider-mask .w-slide')

function getActiveSlide(): number {
    let activeSlide = 0
    slider.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeSlide = index
        }
    })
    return activeSlide
}
enum SlideDirection {
    RIGHT, LEFT
}
function slideFunction(slide: SlideDirection) {
    const activeSlide = getActiveSlide()
    slider[activeSlide].classList.toggle('active')
    if (slide === SlideDirection.RIGHT) {
        if (activeSlide === 2) {
            slider[activeSlide - 2].classList.toggle('active')
        }
        else {
            slider[activeSlide + 1].classList.toggle('active')
        }
    }
    else if (slide === SlideDirection.LEFT) {
        if (activeSlide === 0) {

            slider[activeSlide + 2].classList.toggle('active')
        } else {
            slider[activeSlide - 1].classList.toggle('active')
        }
    }

}

const rightArrow = document.querySelector('.right-arrow .arrow-nav')
const leftArrow = document.querySelector('.left-arrow .arrow-nav')

rightArrow?.addEventListener('click', () => slideFunction(SlideDirection.RIGHT))
leftArrow?.addEventListener('click', () => slideFunction(SlideDirection.LEFT))