<template>
    <div class="offer-timer">
        <span class="arrow-right"></span>
        <div class="timer">
            <div class="time">
                <div class="count">{{timeToExpire.days}}<br><span>Days</span></div>
            </div>
            <div class="time">
                <div class="count">{{timeToExpire.hours}}<br><span>Hours</span></div>
            </div>
            <div class="time">
                <div class="count">{{timeToExpire.minutes}}<br><span>Minutes</span></div>
            </div>
            <div class="time">
                <div class="count">{{timeToExpire.seconds}}<br><span>Seconds</span></div>
            </div>
        </div>
        <span class="arrow-left"></span>
    </div>
</template>

<script>
    export default {
        name: "BannerTimer",
        computed:{
            timeToExpire() {
                return this.parseExpirationDate(this.$store.state.timeToExpire)
            }
        },

        methods: {
            //Adds a zero to given number string if number is single digit
          addZero(number){
              if(number < 10){
                  return "0" + number
              }
              else return number
            },

            parseExpirationDate(millis){
                let time = {days: 0, hours: 0, minutes: 0, seconds: 0};
                let timeInMillis = millis
                time.days = this.addZero(Math.floor(timeInMillis/ (1000*60*60*24)))
                let daysInMillis = time.days * 1000*60*60*24
                time.hours = this.addZero(Math.floor((timeInMillis - daysInMillis)/(1000*60*60)))
                let hoursInMillis = time.hours * 1000*60*60
                time.minutes = this.addZero(Math.floor((timeInMillis - daysInMillis - hoursInMillis)/ (1000*60)))
                let minutesInMillis = time.minutes * 1000*60
                time.seconds = this.addZero(Math.floor((timeInMillis- daysInMillis - hoursInMillis - minutesInMillis)/1000))
                return time;
            }
        },
        created() {
            this.$store.dispatch("startTime")
        }
    }


</script>

<style scoped lang="scss">
    @import "../assets/styles/components/bannerTimer";
</style>