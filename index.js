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

//GSAP scrolling

let middleSection = gsap.timeline({
  scrollTrigger: {
    trigger: '.image-text-container',
    start: '-180% 70%',
    end: '390% 40%',
    toggleActions: 'restart restart none none',
    scrub: true
  }
})

middleSection.to('.image-text-container', {
  y: -500,
  opacity: 1
})

middleSection.to('.image-text-container-2', {
  y: -300,
  opacity: 1
})

middleSection.to('.image-text-container-3', {
  y: -350,
  opacity: 1
})

middleSection.to('.final-call', {
  y: -150,
  opacity: 1
})

// When the user scrolls the page, execute stickNavbar
window.onscroll = function () {
  stickNavbar()
};

// Get the navbar
let navbar = document.getElementById('outer-navi')

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}