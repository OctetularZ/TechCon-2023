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