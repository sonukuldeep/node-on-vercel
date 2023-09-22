gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline({})

tl.fromTo('.animate-top', { y: -50, opacity: 0 }, { y: 0, opacity: 1 })

tl.fromTo('.animate-top-staggered', { opacity: 0 }, { opacity: 1 })

tl.fromTo('.animate-hero', { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.5 })

let moveCount = 1
const arrowLeft = document.querySelector(".w-slider-arrow-left")
const carousel = document.querySelector(".w-slider-mask")
const carouselItem = document.querySelector('.carousel-item.w-slide')
arrowLeft.addEventListener("click", () => {
    const carouselWrapper = document.querySelector(".blog-carousel")
    const rect = carouselItem.getBoundingClientRect()
    const margin = parseFloat(window.getComputedStyle(carouselItem).marginRight)
    const toMove = (rect.width + margin) / 2
    console.log(toMove * 2, carouselWrapper.clientWidth)
    if (moveCount < 6) {
        gsap.to(carousel, { x: `-=${toMove}` })
        moveCount++
    }
    else {
        gsap.to(carousel, { x: 0 })
        moveCount = 1
    }
})

const arrowRight = document.querySelector(".w-slider-arrow-right")
arrowRight.addEventListener("click", () => {
    const rect = carouselItem.getBoundingClientRect()
    const margin = parseFloat(window.getComputedStyle(carouselItem).marginRight)
    const toMove = (rect.width + margin) / 2
    if (moveCount > 1) {
        gsap.to(carousel, { x: `+=${toMove}` })
        moveCount--
    }
})

/**
 * Description:- Animate dom element when it comes into view port
 * @param {string} className 
 * @returns {void}
 */
function scrollAnimation(className) {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            start: "top 80%",
            end: "top center",
        }
    })

    tl.fromTo(className, {
        y: -20,
        opacity: 0
    },
        {
            stagger: 0.2,
            y: 0,
            opacity: 1
        })
}


scrollAnimation(".animate-on-scroll")
scrollAnimation(".animate-on-scroll-2")
scrollAnimation(".animate-on-scroll-3")
scrollAnimation(".animate-on-scroll-4")
scrollAnimation(".animate-on-scroll-5")

// hambvurger

const hamburger = document.querySelector(".menu-button.w-nav-button")
const dropDown = document.querySelector(".nav-menu.w-nav-menu")
hamburger.addEventListener("click", () => {
    dropDown.classList.toggle("activate")
    document.querySelector(".brand.w-nav-brand.w--current").classList.toggle("activate")
    document.querySelector(".menu-button.w-nav-button").classList.toggle("activate")
    document.querySelector(".nav-top").classList.toggle("activate")
})