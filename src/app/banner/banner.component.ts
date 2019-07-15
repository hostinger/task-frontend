import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent {
  nye = new Date("December 31, 2019 23:59:59");

  timeTillNYE;

  upDateClock() {
    let days, hours, minutes, seconds;
    const futureTime = new Date(this.nye).getTime();
    const currentTime = new Date().getTime();
    let milliSeconds = Math.floor((futureTime - currentTime) / 1000);

    days = Math.floor(milliSeconds / 86400);
    milliSeconds -= days * 86400;
    hours = Math.floor(milliSeconds / 3600) % 24;
    milliSeconds -= hours * 3600;
    minutes = Math.floor(milliSeconds / 60) % 60;
    milliSeconds -= minutes * 60;
    seconds = milliSeconds % 60;

    this.timeTillNYE = {
      daysLeft: days,
      hoursLeft: hours,
      minutesLeft: minutes,
      secondsLeft: seconds
    };
  }

  makeTwoDigits(n) {
    return (n < 10 ? "0" : "") + n;
  }

  constructor() {
    setInterval(() => {
      this.upDateClock();
    }, 1000);
    this.upDateClock();
  }
}
