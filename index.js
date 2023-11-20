import Lenis from '@studio-freight/lenis'
import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


//GSAP scrolling
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.image-text-container',
    start: 'top center',
    end: 'bottom center',
    toggleActions: 'restart restart none none',
    scrub: true,
    markers: false
  }
})

tl.to('.image-text-container', {
  y: 400
})


// Lenis - Enables Smooth Scrolling
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)