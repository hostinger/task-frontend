import React, { Component } from 'react'

export default class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 29, minutes: 18, hours: 16, days: 0 }
    }

    // BANNER COUNTDOWN TIMER
    timer() {
        const { seconds, minutes, hours, days } = this.state
        this.setState({
            seconds: seconds - 1
        })

        // SUBTRACTING ONE MINUTE RIGHT AFTER SECONDS REACH ZERO AND ATTEMPT TO GO LOWER
        if (this.state.seconds < 0) {
            clearInterval(this.intervalId);
            this.setState({ minutes: minutes - 1, seconds: 59 })
            // ---------------------------------------------------------------------------------------
            // SUBTRACTING ONE HOUR RIGHT AFTER MINUTES AND SECONDS REACH ZERO AND ATTEMPT TO GO LOWER
            if (minutes === 0 && seconds === 0) {
                this.setState({ hours: hours - 1, minutes: 59 })
            }
            // ---------------------------------------------------------------------------------------
            // SUBTRACTING ONE DAY RIGHT AFTER HOURS, MINUTES AND SECONDS REACH ZERO AND ATTEMPT TO GO LOWER
            if (hours === 0 && minutes === 0 && seconds === 0) {
                this.setState({ days: days - 1, hours: 23, minutes: 59 })
            }
            // ---------------------------------------------------------------------------------------
            // RESETTING DAYS, HOURS, MINUTES AND SECONDS ONCE THEY REACH ZERO AND TRY GOING LOWER
            if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                alert('You really waited this long?')
                this.setState({
                    days: 30, hours: 23, minutes: 59, seconds: 59
                })
            }
            this.intervalId = setInterval(this.timer.bind(this), 1000);
        }
    }

    // OPENS A PAGE WHEN USER CLICKS THE GET STARTED BUTTON
    openPage = () => {
        window.open('https://www.hostinger.com/#pricing', '_blank');
    }

    // STARTS THE COUNTDOWN WHEN THE COMPONENT IS LOADED
    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    // STOPS THE COUNTDOWN WHEN THE COMPONENT IS UNLOADED
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        // Destructurization
        const { seconds, minutes, hours, days } = this.state
        // ----------------
        return (
            <div class="container">
                <div class="main-banner">
                    <div class="banner">
                        <div class="banner-left-col">
                            <div class="title">New Years Offer</div>
                            <div class="title"><span>82% OFF </span>Web Hosting</div>
                            <div class="timer-row timer-holder-left">
                                <div class="triangle-right"></div>
                                <div class="timer-item">
                                    <div class="timer-digit">{days < 10 ? `0${days}` : days}</div>
                                    <div class="timer-date">DAYS</div>
                                </div>
                                <div class="timer-item">
                                    <div class="timer-digit">{hours < 10 ? `0${hours}` : hours}</div>
                                    <div class="timer-date">HOURS</div>
                                </div>
                                <div class="timer-holder-right">
                                    <div class="timer-item">
                                        <div class="timer-digit">{minutes < 10 ? `0${minutes}` : minutes}</div>
                                        <div class="timer-date">MINUTES</div>
                                    </div>
                                    <div class="timer-item">
                                        <div class="timer-digit">{seconds < 10 ? `0${seconds}` : seconds}</div>
                                        <div class="timer-date">SECONDS</div>
                                    </div>
                                    <div class="triangle-left"></div>
                                </div>
                            </div>
                            <div class="button-holder">
                                <a href="/" class="btn-getstarted" onClick={this.openPage.bind(this)}>Get Started Now</a>
                            </div>
                        </div>
                        <div class="banner-right-col">
                            <div class="price-container">
                                <div class="col-dollar">$</div>
                                <div class="col-digit tooltip-save">
                                    <div class="tooltiptext col-12">SAVE 82%</div>
                                    1
                                </div>
                                <div class="price-right-holder">
                                    <div class="col-cents">45</div>
                                    <div class="col-period">/mo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-perks">
                    <li><i class="fas fa-check mr-1"></i> Guaranteed 99.9% Uptime</li>
                    <li><i class="fas fa-check mr-1"></i> Superior Speed Performance</li>
                    <li><i class="fas fa-check mr-1"></i> 24/7 Support Chat</li>
                    <li><i class="fas fa-check mr-1"></i> 30-Day Money-Back Guarantee</li>
                </div>
            </div>
        )
    }
}
