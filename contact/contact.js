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


// Scroll To Bottom For Enquire Button

document.getElementById('submit-button').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  })
})


// Add email information
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "mydummyemail@gmail.com",
    Password: "password",
    To: 'enquiryemail@gmail.com',
    From: document.getElementById("email").value,
    Subject: "New Enquiry",
    Body: "Name: " + document.getElementById("name").value +
      "<br> Email: " + document.getElementById("email").value +
      "<br> Phone Number: " + document.getElementById("phone").value +
      "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Successfully!")
  );
}


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