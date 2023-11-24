//Smooth scroll

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//gsap fake horizontal scroll effect

let slider = document.querySelector('.slider')
let sections = gsap.utils.toArray('.slider section')

let tl = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth,
    markers: true
  }
})

//Changes how far to the right you can scroll
tl.to(slider, {
  xPercent: -81
})


sections.forEach((stop, index) => {
  tl.from(stop.querySelector('.content'), {
    yPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: stop.querySelector('.content'),
      start: 'left center',
      end: 'cetner center',
      containerAnimation: tl,
      scrub: true
    }
  })
})