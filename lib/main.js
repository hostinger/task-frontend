"use strict";

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

// let endDate = Date.parse('25 Jul 2019 00:00:00 GMT+0300');
// let endDate = Date.parse('27 Jul 2019 00:00:00 GMT+0300');
// let endDate = Date.parse('27 Sep 2019 00:00:00 GMT+0300');
var endDate = Date.parse('01 Jan 2020 00:00:00 GMT+0300');
var t = {};
var menuIcon = document.getElementsByClassName('nav__menu-icon')[0];
var menuIconClose = document.getElementsByClassName('nav__menu-icon')[1];
var navItems = document.getElementsByClassName('nav__item');
var menuOpen = false;
var mql = window.matchMedia('(min-width: 980px)');
console.log(mql.matches);

function changeManuIcon() {
  if (menuOpen) {
    menuIcon.setAttribute('id', 'hidden');
    menuIconClose.removeAttribute('id', 'hidden');
  } else {
    menuIcon.removeAttribute('id', 'hidden');
    menuIconClose.setAttribute('id', 'hidden');
  }
}

menuIcon.addEventListener('click', function () {
  menuOpen = true;
  changeManuIcon();
  console.log(navItems.length);

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.remove('nav__item_toggle');
  }
});
menuIconClose.addEventListener('click', function () {
  menuOpen = false;
  changeManuIcon();

  for (var i = 0; i < navItems.length; i++) {
    navItems[i].classList.add('nav__item_toggle');
  }
});

function timer() {
  var days, hours, minutes, seconds, referenceTime;
  referenceTime = Date.parse(new Date());
  timeDifference = endDate - referenceTime;
  seconds = Math.floor(timeDifference / 1000 % 60);
  minutes = Math.floor(timeDifference / 1000 / 60 % 60);
  hours = Math.floor(timeDifference / (1000 * 60 * 60) % 24);
  days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  t = {
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
  updateSaleCounterDOM(t);
}

timer();
setInterval(timer, 1000);

function updateSaleCounterDOM(t) {
  var digitsInDays = t.days.toString().length;

  if (t.days > 0) {
    if (digitsInDays === 1) {
      document.getElementsByClassName('counter__days')[0].innerHTML = "<h2>".concat('0' + t.days, " </h2><h5>days</h5>");
    } else {
      document.getElementsByClassName('counter__days')[0].innerHTML = "<h2> ".concat(('0' + t.days).slice(-digitsInDays), "</h2><h5>days</h5>");
    }
  } else {
    document.getElementsByClassName('counter__days')[0].innerHTML = '<h2>00</h2><h5>days</h5>';
  }

  document.getElementsByClassName('counter__hours')[0].innerHTML = "<h2>".concat(('0' + t.hours).slice(-2), "</h2><h5>hours</h5>");
  document.getElementsByClassName('counter__minutes')[0].innerHTML = "<h2>".concat(('0' + t.minutes).slice(-2), "</h2><h5>minutes</h5>");
  document.getElementsByClassName('counter__seconds')[0].innerHTML = "<h2>".concat(('0' + t.seconds).slice(-2), "</h2><h5>seconds</h5>");
}