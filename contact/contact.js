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


// Scroll To Bottom of the page with Enquire Button when clicked on the contact page

document.getElementById('submit-button').addEventListener('click', function () {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  })
})


// This is here to allow for the developer to add their email information so they can receive the data submitted by the user through the form on the register page via email
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

// Add event listener for form submission
let contactForm = document.getElementById("contact-form")
contactForm.onsubmit = function () {
  sendEmail()
}


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