import React, {Component} from 'react';


class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: "00",
            minutes: "00",
            hours: "00",
            days: "00"
        };

    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.setState({days, hours, minutes, seconds})
    }

    render() {
        return (
            <div id="countdown" className="pl-md-2">
                <div className="time-box">
                    <span id="days" className="timer p-3">{this.leading(this.state.days)}</span>
                    <p>Days</p>
                </div>
                <div className="time-box">
                    <span id="hour" className="timer p-3">{this.leading(this.state.hours)}</span>
                    <p>Hours</p>
                </div>
                <div className="time-box">
                    <span id="min" className="timer p-3">{this.leading(this.state.minutes)}</span>
                    <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span id="sec" className="timer p-3">{this.leading(this.state.seconds)}</span>
                    <p>Seconds</p>
                </div>
            </div>
        );
    }
}

export default Countdown;
