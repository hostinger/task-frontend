Vue.component('count-down', {
    template: 
    `
    <div class="timer">
    <div class="time-icon"><i class="fas fa-caret-right"></i></div>
    <div class="time">
        <div class="time-val">{{days}}</div>
        <div class="time-title">days</div>
    </div>
    <div class="time">
        <div class="time-val">{{hours}}</div>
        <div class="time-title">hours</div>
    </div>
    <div class="time">
        <div class="time-val">{{minutes}}</div>
        <div class="time-title">minutes</div>
    </div>
    <div class="time">
        <div class="time-val">{{seconds}}</div>
        <div class="time-title">seconds</div>
    </div>
    <div class="time-icon"><i class="fas fa-caret-left"></i></div>
</div> 
    `,
    data() {
        return{
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        }
    },
    
    methods: {
        countDown: function() {
            // Show numbers instantly !
            this.calcTime();

            var timer = setInterval(function() {
                this.calcTime();        
            }.bind(this), 1000);
            
        },
        calcTime: function(){
            var countDownDate = new Date("March 31, 2019 23:59:59").getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
          
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
            this.days = checkTime(days);
            this.hours = checkTime(hours);
            this.minutes = checkTime(minutes);
            this.seconds = checkTime(seconds);

            function checkTime(i) {
                if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
                return i;
            }
        }
    },
    mounted: function(){
        this.countDown();
    },

})
var app = new Vue({
    el: '#app',
})

function navbar() {
    var navToggler = document.getElementById('navbarToggle');
    var collapseNav = document.getElementsByClassName('navbar-nav');
  //   console.log('veikiu');
  
    navToggler.onclick = function () {
      if (collapseNav[0].classList) {
        collapseNav[0].classList.toggle('hide');
      } else {
          
        // For IE9
        var classes = collapseNav[0].className.split(" ");
        var i = classes.indexOf('hide');   
        if (i >= 0) {
          collapseNav[0].className = collapseNav[0].className.replace(/\bhide\b/g, "");
        } else {
          collapseNav[0].className += " " + "hide";
        }
      }
    };
}
  
  
navbar();