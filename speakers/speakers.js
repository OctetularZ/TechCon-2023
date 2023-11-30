//Adds Smooth scroll to the web page

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//GSAP scrolling animation for the home page scrolling through the text and image sections and the final call to action section in the top to bottom of the page

let image_slider = gsap.timeline({
  scrollTrigger: {
    trigger: '.section-one',
    start: '-90% 70%',
    end: '620% 40%',
    toggleActions: 'restart restart none none',
    scrub: true
  }
})

// Moves the sections up by a y-value and increases the opacity to 1 from 0 (which is set in the CSS).
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


// Add hamburger icon to open the navbar menu when a certain screen size is met and an exit button to exit the menu when it is open. (for responsiveness)

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