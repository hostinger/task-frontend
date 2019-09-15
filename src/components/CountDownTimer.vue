<template>
    <time class="timer"
          aria-label="Time left"
    >
        <span class="timer__item">
            <span class="timer__value js-days">00</span>
            <span class="timer__label">Days</span>
        </span>
        <span class="timer__item">
            <span class="timer__value js-hours">00</span>
            <span class="timer__label">Hours</span>
        </span>
        <span class="timer__item">
            <span class="timer__value js-minutes">00</span>
            <span class="timer__label">Minutes</span>
        </span>
        <span class="timer__item">
            <span class="timer__value js-seconds">00</span>
            <span class="timer__label">Seconds</span>
        </span>
    </time>
</template>

<script>
export default {
    name: 'CountDownTimer',
    props: {
        endDate: {
            type: String,
            default: '',
        }
    },
    methods: {
        startCountDown(endDate) {
            const daysHolder = document.querySelector('.js-days');
            const hoursHolder = document.querySelector('.js-hours');
            const minutesHolder = document.querySelector('.js-minutes');
            const secondsHolder = document.querySelector('.js-seconds');
            const endTime = new Date(endDate).getTime();
            if (isNaN(endTime)) {
                return;
            }

            function updateTimeRemaining() {
                let days;
                let hours;
                let minutes;
                let seconds;
                const startTime = new Date().getTime();

                let timeRemaining = parseInt((endTime - startTime) / 1000);
                if (timeRemaining < 0) {
                    return;
                }

                days = parseInt(timeRemaining / 86400);
                timeRemaining = (timeRemaining % 86400);

                hours = parseInt(timeRemaining / 3600);
                timeRemaining = (timeRemaining % 3600);

                minutes = parseInt(timeRemaining / 60);
                timeRemaining = (timeRemaining % 60);

                seconds = parseInt(timeRemaining);

                daysHolder.innerHTML = parseInt(days, 10);
                hoursHolder.innerHTML = ('0' + hours).slice(-2);
                minutesHolder.innerHTML = ('0' + minutes).slice(-2);
                secondsHolder.innerHTML = ('0' + seconds).slice(-2);
            }

            setInterval(updateTimeRemaining, 1000);
        },
    },
    mounted() {
        this.startCountDown(this.endDate);
    },
}
</script>

<style scoped lang="scss">
.timer {
    display: flex;
    position: relative;
    align-items: center;
    max-width: 420px;

    &::before,
    &::after {
        content: '';
    }

    &::before {
        @include triangle('left', 10px, 15px, $color-highlight-red);
    }

    &::after {
        @include triangle('right', 10px, 15px, $color-highlight-red);
    }

    &__value {
        display: block; /* IE10 */
        font-size: $font-size-h2;
        line-height: 1.2;
    }

    &__label {
        display: block; /* IE10 */
        font-size: 13px;
        line-height: 1.4;
        text-transform: uppercase;
    }

    &__item {
        display: flex;
        flex: 1;
        flex-direction: column;
        font-weight: 700;
        text-align: center;
    }

    @include respond-to($media-lg, max) {
        &__value {
            font-size: $font-size-h3;
        }

        &__label {
            font-size: 12px;
        }
    }

    @include respond-to($media-md, max) {
        max-width: 350px;

        &::before {
            @include triangle('left', 7px, 11px, $color-highlight-red);
        }

        &::after {
            @include triangle('right', 7px, 11px, $color-highlight-red);
        }
    }

    @include respond-to($media-sm, max) {
        max-width: 320px;

        &__value {
            font-size: 22px;
        }

        &__label {
            font-size: 11px;
        }
    }
}
</style>