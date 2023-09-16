gsap.registerPlugin(ScrollTrigger)

gsap.to('.ease-in', {
    duration: 1,
    opacity: 1,
    scale: 1
})

// gsap.to('.animation-on-enter', {
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.animation-on-enter',
//         start: 'top 90%',
//         end: 'top 40%',
//         markers: true,
//         toggleClass: 'activate',
//     }
// })


/**
 * Description:- Pass class name to this function to animate it when it enters viewport
 * @param {string} className 
 * @returns {void}
 */
function scrollTrigger(className, end = "bottom 70%") {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            // markers: true,
            start: "top 70%",
            end,
            scrub: 1,

        },
        defaults: {
            stagger: 1,
        }
    })

    tl.to(className, {
        width: '100%', scale: 1, opacity: 1,
    })
}

/**
 * Description:- Pass class name to this function to animate it when it enters viewport
 * @param {string} className 
 * @returns {void}
 */
function opacity(className) {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: className,
            start: "top 70%",
            end: "top 70%",
            scrub: 1,
            // markers: true,
        },
    })

    tl.to(className, {
        opacity: 1,
    })
}


scrollTrigger(".scroll-trigger")
scrollTrigger(".scroll-trigger-2")
scrollTrigger(".scroll-trigger-3")
scrollTrigger(".scroll-trigger-4", "500% 70%")
scrollTrigger(".scroll-trigger-5")
scrollTrigger(".scroll-trigger-6")
scrollTrigger(".scroll-trigger-7")
scrollTrigger(".scroll-trigger-8")
scrollTrigger(".scroll-trigger-9")
scrollTrigger(".scroll-trigger-10")
scrollTrigger(".scroll-trigger-11")
scrollTrigger(".scroll-trigger-12")
scrollTrigger(".scroll-trigger-13")
scrollTrigger(".scroll-trigger-14")
scrollTrigger(".scroll-trigger-15")
opacity(".enable1")
opacity(".enable2")
opacity(".enable3")
opacity(".enable4")
opacity(".enable5")
opacity(".enable6")
opacity(".enable7")
opacity(".enable8")
opacity(".enable9")
opacity(".enable10")
opacity(".enable11")
opacity(".enable12")
opacity(".enable13")
opacity(".enable14")
opacity(".enable15")


ScrollTrigger.observe({
    target: window,
    type: "pointer",
    onMove: ({ deltaX, deltaY }) => {
        gsap.to('.pointer-animation', { x: deltaX * 0.4, y: deltaY * 0.4, })
        gsap.to('.pointer-animation-1', { y: deltaX * 0.4, x: deltaY * 0.4, })
    }
})


// make hamberger icon work
const navBtn = document.querySelector('.menu-button.w-nav-button')
const nav = document.querySelector('.w-nav-overlay')
const headerContainer = document.querySelector('.container-header')

navBtn.addEventListener('click', () => {
    const btnStatus = navBtn.getAttribute('data-open')
    if (btnStatus === 'close') {
        nav.setAttribute('style', `display: block; width: ${window.innerWidth}px; height: 100vh; background-color: #ffffff; position: fixed`)
        headerContainer.setAttribute('style', 'position: fixed; width: 100%; z-index: 10')
        navBtn.setAttribute('data-open', 'open')
    }
    else {
        window.scroll(0, 0);
        nav.setAttribute('style', `display: none;`)
        headerContainer.setAttribute('style', '')
        navBtn.setAttribute('data-open', 'close')
    }

})