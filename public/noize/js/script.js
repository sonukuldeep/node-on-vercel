
ANIMATION_CLASS = '.animate__animated'
ANIMATION_TYPE = 'animate__fadeInUp'
const cards = document.querySelectorAll(ANIMATION_CLASS)
const windowHeight = window.innerHeight; // gets viewport height


function animateFunction(element, delay = 1) {
  const top = element.getBoundingClientRect().top; // gets element top relative to view port
  const topFactor = delay; // lower value to delay animation and vice versa
  const range = topFactor * windowHeight - top; // if window - top is + then object is in view

  if (range > 0) {
    element.classList.add(ANIMATION_TYPE)

  }
}

window.addEventListener(
  "scroll",
  () => {
    cards.forEach((card, index) => { if (index !== 0) animateFunction(card) })
  },
);