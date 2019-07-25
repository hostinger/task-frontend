// let endDate = Date.parse('25 Jul 2019 00:00:00 GMT+0300');
// let endDate = Date.parse('27 Jul 2019 00:00:00 GMT+0300');
// let endDate = Date.parse('27 Sep 2019 00:00:00 GMT+0300');
let endDate = Date.parse('01 Jan 2020 00:00:00 GMT+0300');
let t = {};

setInterval(function counter() {
    let days, hours, minutes, seconds, referenceTime;

    referenceTime = Date.parse(new Date());
    timeDifference = endDate - referenceTime;

    seconds = Math.floor( (timeDifference/1000) % 60 );
    minutes = Math.floor( (timeDifference/1000/60) % 60 );
    hours = Math.floor( (timeDifference/(1000*60*60)) % 24 );
    days = Math.floor((timeDifference/(1000*60*60*24)));
    
    t = {
        'days': days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };

    updateSaleCounterDOM(t);
})(), 1000;

function updateSaleCounterDOM(t) {

    let digitsInDays = t.days.toString().length;
    if (t.days > 0) {
        if (digitsInDays === 1) {
            document.getElementsByClassName('counter__days')[0].innerHTML = ('0' + t.days);
        } else {
            document.getElementsByClassName('counter__days')[0].innerHTML = ('0' + t.days).slice(-(digitsInDays));
        }
    } else {
        document.getElementsByClassName('counter__days')[0].innerHTML = '00';
    }

    document.getElementsByClassName('counter__hours')[0].innerHTML = ('0' + t.hours).slice(-2);
    document.getElementsByClassName('counter__minutes')[0].innerHTML = ('0' + t.minutes).slice(-2);
    document.getElementsByClassName('counter__seconds')[0].innerHTML = ('0' + t.seconds).slice(-2);
}

