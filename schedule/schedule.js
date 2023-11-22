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

function filter() {
  // Declare variables
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("FilterInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("schedule-table-id");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

let input = document.getElementById("FilterInput")
input.onkeyup = function () {
  filter()
}