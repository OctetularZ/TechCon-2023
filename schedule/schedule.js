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


// Filer for the schedule table to enable the user to filer the table for a certain day (i.e. Wednesday, Tuesday, etc)
function filter() {
  // Declaring variables
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

// Adds the event listener to input box used for filtering the table on the schedule page
let input = document.getElementById("FilterInput")
input.onkeyup = function () {
  filter()
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