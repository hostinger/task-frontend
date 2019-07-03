// MODAL SCRIPT

function openModal () {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";   
}

function closeModal () {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "visible";
}

// NAV-BUTTON HOVER ANIMATION (OPTIMIZED)

var navItem = document.getElementsByClassName('nav-item')
for (var i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('mouseover', function () {
this.getElementsByClassName("nav-item-box")[0].style.display='block'
  })
  navItem[i].addEventListener('mouseout', function () {
    this.getElementsByClassName("nav-item-box")[0].style.display='none'
      })
}