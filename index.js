const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//GSAP scrolling
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.image-text-container',
    start: '-150% 70%',
    end: '-75% 40%',
    toggleActions: 'restart restart none none',
    scrub: true,
    markers: true
  }
})

tl.to('.image-text-container', {
  y: -500
})