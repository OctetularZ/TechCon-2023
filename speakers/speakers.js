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
let BG = document.querySelector('.BG')
let sections = gsap.utils.toArray('.slider section')
let mask = document.querySelector('.mask')

let tl = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  scrollTrigger: {
    trigger: BG,
    pin: true,
    scrub: 2,
    end: () => "+=" + slider.offsetWidth
  }
})

//Scroll progress bar
tl.to(mask, {
  width: '100%',
  scrollTrigger: {
    trigger: BG,
    start: 'top left',
    end: 'bottom+=3400px top',
    scrub: 1
  }
})

//Changes how far to the right you can scroll
tl.to(slider, {
  xPercent: -66.7
})


sections.forEach((stop, index) => {
  tl.from(stop.querySelector('.content'), {
    yPercent: -50,
    opacity: 0,
    scrollTrigger: {
      trigger: stop.querySelector('.content'),
      start: '-500px center',
      end: '550px center',
      containerAnimation: tl,
      scrub: true
    }
  })
  tl.from(stop.querySelector('img'), {
    xPercent: 40,
    yPercent: -100,
    ease: 'elastic.out(1,1)',
    scrollTrigger: {
      trigger: stop.querySelector('img'),
      scrub: 2,
      containerAnimation: tl
    }
  })
})

// Add scroll snapping later if there is time