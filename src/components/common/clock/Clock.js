import React from 'react';

class Clock extends React.Component {
    state = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            const endDate = new Date("June 1, 2019 12:00:00").getTime();
            const now = new Date().getTime();
            const interval = endDate - now;
            if (interval <= 0) return;
            this.setState({interval});
            const days = Math.floor(interval / (1000 * 60 * 60 * 24));
            this.setState({days});
            const hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.setState({hours});
            const minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
            this.setState({minutes});
            const seconds = Math.floor((interval % (1000 * 60)) / 1000);
            this.setState({seconds});
        }, 1000);
    }

    render() {

        return (
            <div className="countDown promo-info__countDown">
                <div className="countDown__wrapper">
                    <p className="countDown__number">{("0" + this.state.days).slice(-2)}</p>
                    <p className="countDown__label">days</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">{("0" + this.state.hours).slice(-2)}</p>
                    <p className="countDown__label">hours</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">{("0" + this.state.minutes).slice(-2)}</p>
                    <p className="countDown__label">minutes</p>
                </div>
                <div className="countDown__wrapper">
                    <p className="countDown__number">{("0" + this.state.seconds).slice(-2)}</p>
                    <p className="countDown__label">seconds</p>
                </div>
            </div>
        )
    }
}

export default Clock


// ---alternative, but does not work with EI9------


// import React from 'react';
// import Countdown, {zeroPad} from 'react-countdown-now';
//
// const renderer = ({days, hours, minutes, seconds}) => {
//     return (
//         <div className="countDown promo-info__countDown">
//             <div className="countDown__wrapper">
//                 <p className="countDown__number">{zeroPad(days, 2)}</p>
//                 <p className="countDown__label">days</p>
//             </div>
//             <div className="countDown__wrapper">
//                 <p className="countDown__number">{zeroPad(hours, 2)}</p>
//                 <p className="countDown__label">hours</p>
//             </div>
//             <div className="countDown__wrapper">
//                 <p className="countDown__number">{zeroPad(minutes, 2)}</p>
//                 <p className="countDown__label">minutes</p>
//             </div>
//             <div className="countDown__wrapper">
//                 <p className="countDown__number">{zeroPad(seconds, 2)}</p>
//                 <p className="countDown__label">seconds</p>
//             </div>
//         </div>
//     )
// };
//
// const Clock = () => {
//     return (
//         <Countdown date={Date.now() + 58709000} renderer={renderer}/>
//     )
// };
//
// export default Clock