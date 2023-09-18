gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.enable', {
    y: -20,
},
    {
        y: 0,
        stagger: 1,
        opacity: 1,
    }
)

gsap.to('.enable-1', {
    opacity: 1,
    stagger: 0.2
})

ScrollTrigger.observe({
    target: window,
    type: 'pointer',
    onMove: ({ deltaX, deltaY }) => {
        gsap.to('.pointer-animation', { x: 0.2 * deltaX, y: deltaY * 0.2 })
        gsap.to('.pointer-animation-1', { y: 0.2 * deltaX, x: deltaY * 0.2 })
    }
})

const height = `${window.innerHeight + 76}px`
gsap.to('.nav-animation', {
    scrollTrigger: {
        trigger: '.nav-animation',
        start: "top bottom",
        end: `${height} top`,
        toggleClass: 'activate',
    }
})
/**
 * Description:- pass class name to animate the element
 * @param {string} className - Pass the class name to animate
 * @returns {void}
 */
function scrollAnimation(className) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            start: "top 80%",
            end: 'top center',
            // markers: true
        }
    })

    tl.fromTo(className, {
        opacity: 0,
        y: -80
    }, {
        opacity: 1,
        y: 0,
        stagger: 0.5
    })
}

scrollAnimation('.scroll-trigger')
scrollAnimation('.scroll-trigger-1')
scrollAnimation('.scroll-trigger-2')
scrollAnimation('.scroll-trigger-3')
scrollAnimation('.scroll-trigger-4')
scrollAnimation('.scroll-trigger-5')


function animatateFrom(classname, x) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: classname,
            start: "top center",
            end: "top center",
            // markers: true
        }
    })

    tl.fromTo(classname, {
        // opacity: 0,
        xPercent: x,
    }, {
        opacity: 1,
        xPercent: 0,
    })
}

animatateFrom('.scroll-trigger-6', -100)
animatateFrom('.scroll-trigger-7', 100)
scrollAnimation('.scroll-trigger-8')
scrollAnimation('.scroll-trigger-9')
scrollAnimation('.scroll-trigger-10')
