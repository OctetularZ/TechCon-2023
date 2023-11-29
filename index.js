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
    end: '340% 40%',
    toggleActions: 'restart restart none none',
    scrub: true
  }
})

middleSection.to('.image-text-container', {
  y: -400,
  opacity: 1
})

middleSection.to('.image-text-container-2', {
  y: -250,
  opacity: 1
})

middleSection.to('.image-text-container-3', {
  y: -300,
  opacity: 1
})

middleSection.to('.final-call', {
  y: -100,
  opacity: 1
})

// Add Hamburger menu

function addMenu() {
  let menu = document.getElementById('menu-dd')
  menu.classList.add('hb-btn-pressed')
}

function removeMenu() {
  let menu = document.getElementById('menu-dd')
  menu.classList.remove('hb-btn-pressed')
}

let dropD = document.getElementById("dropdown")
dropD.onclick = function () {
  addMenu()
}

let exit = document.getElementById("exit-menu")
exit.onclick = function () {
  removeMenu()
}