import React from 'react';

let Clock = () => {
    // Credits: https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
    let countDownDate = new Date("May 2, 2019 07:30:00").getTime();

// Update the count down every 1 second
    let x = setInterval(function() {

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="clock"
        // document.getElementById("clock").innerHTML = days + "d " + hours + "h "
        //     + minutes + "m " + seconds + "s ";
        let id = document.getElementById("clock");
        if ( id !== null ) {
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("clock").innerHTML = "EXPIRED";
        }
    }, 1000);
    return (
        <div className={'clock'} id={'clock'}>
            <div className={'arrow'}>
                <div></div>
            </div>
            <div className={'time'}>
                <div className={'value'} id={'days'}></div>
                <div className={'unit'}>days</div>
            </div>
            <div className={'time'}>
                <div className={'value'} id={'hours'}></div>
                <div className={'unit'}>hours</div>
            </div>
            <div className={'time'}>
                <div className={'value'} id={'minutes'}></div>
                <div className={'unit'}>minutes</div>
            </div>
            <div className={'time'}>
                <div className={'value'} id={'seconds'}></div>
                <div className={'unit'}>seconds</div>
            </div>
            <div className={'arrow'}>
                <div></div>
            </div>
        </div>
    )
}

export default Clock;