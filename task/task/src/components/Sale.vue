<template>
    <div class="row padding">
        <div class="col-md-6">
            <h1 class="padding">New Year Offer <br><span style="color:#fd5052">{{discount}}% OFF</span> Web Hosting</h1>
            <div class="countdown">
                <div class="arrow-to-right"></div>
                <div class="days"><div>{{days}}</div><div class="countdown-text">days</div></div>
                <div class="hours"><div>{{hours}}</div><div class="countdown-text">hours</div></div>
                <div class="minutes"><div>{{minutes}}</div><div class="countdown-text">minutes</div></div>
                <div class="seconds"><div>{{seconds}}</div><div class="countdown-text">seconds</div></div>
                <div class="arrow-to-left"></div>
            </div>
            <b-button variant="primary" class="get-started">Get Started Now</b-button>
        </div>
        <div class="col-md-6"></div>
    </div>
</template>

<script>
export default {
 name: "Sale",
 data() {
     return {
         discount: 82,
         days: 20,
         hours: 0,
         minutes: 0,
         seconds: 0
     }
 },
 methods: {
     countDown() {
        let countDownDate = new Date().getTime() + 1728000000;
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            
            this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
        }, 1000);
     }
 },
 beforeMount(){
     this.countDown()
 }
}
</script>

<style scoped lang="scss">
    .padding {
        padding: 3rem 0 0 0;
    }
    h1 {
        text-align: left;
        font-weight: 600;
    }
    .arrow-to-right {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 0 10px 15px;
        border-color: transparent transparent transparent #fd5052;
    }
    .arrow-to-left {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 15px 10px 0;
        border-color: transparent #fd5052 transparent transparent;
    }
    .countdown {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.8em;
    }
    .countdown-text {
        font-size: 0.4em;
        font-weight: 600;
        margin-top: -5px;
        text-transform: uppercase;
    }
    .days, .hours, .minutes, .seconds {
        display: block;
    }
    .get-started { 
        float: left;
        margin-top: 15px;
        text-transform: uppercase;
        font-weight: 400;
        padding: 15px 40px;
        background: #fd5052;
    }
    .get-started:hover {
        background-color: #fd5052 !important;
        opacity: 0.8;
    }
</style>
