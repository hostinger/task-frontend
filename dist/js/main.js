var countDownDate = new Date("Mar 22, 2019 08:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (days < 0) {
    var i;
    for (i = 0; i < document.getElementsByClassName("countdown-item").length; i++) {
      document.getElementsByClassName("countdown-item")[i].style.display = "none";
    }
    document.getElementById("countdown-0-message").style.display = "block";
    document.getElementById("countdown-button").setAttribute("disabled", "");
    document.getElementById("countdown-button").innerHTML = "GAME OVER";
  }

}, 1000);

function openModal () {
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
    
}

function closeModal () {
    document.getElementById("modal").style.display = "none";
    document.body.style.overflow = "visible";
}


function box1 () {
    document.getElementById("box1").style.display = "block";
}

function box1None () {
    document.getElementById("box1").style.display = "none";

}
function box2 () {
    document.getElementById("box2").style.display = "block";
}

function box2None () {
    document.getElementById("box2").style.display = "none";

}

function box3 () {
    document.getElementById("box3").style.display = "block";
}

function box3None () {
    document.getElementById("box3").style.display = "none";

}
function box4 () {
    document.getElementById("box4").style.display = "block";
}

function box4None () {
    document.getElementById("box4").style.display = "none";

}
function box5 () {
    document.getElementById("box5").style.display = "block";
}

function box5None () {
    document.getElementById("box5").style.display = "none";

}