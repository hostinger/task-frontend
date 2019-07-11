<template>
    <div class="col-md-6 col-sm-12 offer padding">
        <h1 class="center-text">New Year Offer <br><span style="color:#fd5052">{{offer.price.discount}}% OFF</span> Web Hosting</h1>
        <div class="countdown center-text">
            <div class="arrow-to-right"></div>
            <div class="days"><div>{{offer.days}}</div><div class="countdown-text">days</div></div>
            <div class="hours"><div>{{offer.hours}}</div><div class="countdown-text">hours</div></div>
            <div class="minutes"><div>{{offer.minutes}}</div><div class="countdown-text">minutes</div></div>
            <div class="seconds"><div>{{offer.seconds}}</div><div class="countdown-text">seconds</div></div>
            <div class="arrow-to-left"></div>
        </div>
        <div class="button">
            <b-button variant="primary" class="get-started">Get Started Now</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Offer",
    props: ["offer"],
    methods: {
        countDown() {
            let countDownDate = new Date().getTime() + 1728000000;
            let x = setInterval(() => {
                let now = new Date().getTime();
                let distance = countDownDate - now;
                
                this.offer.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                this.offer.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.offer.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                this.offer.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }, 1000);
        }
    },
    beforeMount(){
        this.countDown()
    }
}
</script>

<style scoped lang="scss">
.font-heavy {
    font-weight: 800;
}
.offer {
    color: #fff;
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

@media only screen and (max-width: 991px) {
    .countdown {
        width: 100%;
    }
    
    .center-text {
        text-align: center;
    }
    .button {
        display: flex;
        justify-content: center;
    }
}
</style>
