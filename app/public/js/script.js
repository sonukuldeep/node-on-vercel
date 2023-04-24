// getting cards to listen to
const cards = document.querySelectorAll(".animate-on-scroll");

const windowHeight = window.innerHeight // gets viewport height

const animateProperty = {
    scale: '--scale',
    ease: '--easeIn',
    scroll: '--scroll'
}

function animateFunction(element, property, delay = 1, propertyVariable = "") {
    const top = element.getBoundingClientRect().top // gets element top relative to view port
    const topFactor = delay // lower value to delay animation and vice versa
    const range = topFactor * windowHeight - top // if window - top is + then object is in view 
    const step = range / windowHeight // responsible for a steady increment/decrement from 0-1 during scroll. nothing else 
    if (range > 0 && range <= windowHeight) { // animate only when object is in view and in limit 
        document.body.style.setProperty(property + propertyVariable, step) //sets css variable that can be used for animation
    }
}


window.addEventListener(
    "scroll",
    () => {
        animateFunction(cards[0], animateProperty.ease, 1)
        animateFunction(cards[1], animateProperty.ease, 1, propertyVariable = 1)
        // animateFunction(cards[2], animateProperty.ease, 1, propertyVariable = 1) // uses the same property as cards[1]
        animateFunction(cards[3], animateProperty.ease, 1, propertyVariable = 2)
        animateFunction(cards[4], animateProperty.ease, 1, propertyVariable = 3)
        animateFunction(cards[5], animateProperty.ease, 1, propertyVariable = 4)
        animateFunction(cards[6], animateProperty.ease, 1, propertyVariable = 5)
        // animateFunction(cards[7], animateProperty.ease, 1,)
        animateFunction(cards[9], animateProperty.ease, 1, propertyVariable = 6)
        animateFunction(cards[10], animateProperty.scale, 0.7)
        animateFunction(cards[11], animateProperty.ease, 1, propertyVariable = 7)
        animateFunction(cards[12], animateProperty.ease, 1, propertyVariable = 8)
        animateFunction(cards[13], animateProperty.ease, 1, propertyVariable = 9)
        animateFunction(cards[14], animateProperty.scroll, 0.5)



        // scaleFunction(0)
        // scrollFunction(1)
    },
    false
);
