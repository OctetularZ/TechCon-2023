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

let image_slider = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-one',
    start: '-90% 70%',
    end: '620% 40%',
    toggleActions: 'restart restart none none',
    scrub: true
  }
})

image_slider.to('.section-one', {
  y: -100,
  opacity: 1
})

image_slider.to('.section-two', {
  y: -150,
  opacity: 1
})

image_slider.to('.section-three', {
  y: -150,
  opacity: 1
})

image_slider.to('.section-four', {
  y: -150,
  opacity: 1
})

image_slider.to('.section-five', {
  y: -150,
  opacity: 1
})

// Add scroll snapping later if there is time


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