import React, { Component } from 'react';


class Clock extends Component {
     constructor(props) {
     super(props);
     this.state = {
               days: 0,
               hours: 0,
               minutes: 0,
               seconds: 0,
          };
     }
     componentWillMount() {
          this.getTimeUntil(this.props.deadline);
     }
     componentDidMount() {
          setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
     }  
     leading0(num) {
          return num < 10 ? '0' + num : num;
     }
     getTimeUntil(deadline) {
          const time = Date.parse(deadline) - Date.parse(new Date());
          if(time < 0) {
               this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
          
          } else {
               const seconds = Math.floor((time/1000)%60);
               const minutes = Math.floor((time/1000/60)%60);
               const hours = Math.floor((time/(1000*60*60))%24);
               const days = Math.floor(time/(1000*60*60*24));
               this.setState({ days, hours, minutes, seconds });
          }
     }

     render () {
        const countDown = this.state;
        return (
                <div className="counter">
                    <div className="arrow-right"></div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.leading0(this.state.days)} 
                        </div>
                        <div className="counter__block--text">
                            Days
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.leading0(this.state.hours)}
                        </div>
                        <div className="counter__block--text">
                            Hours
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.leading0(this.state.minutes)}
                        </div>
                        <div className="counter__block--text">
                            Minutes
                        </div>
                    </div>
                    <div className="counter__block">
                        <div className="counter__block--number">
                            {this.leading0(this.state.seconds)}
                        </div>
                        <div className="counter__block--text">
                            Seconds
                        </div>
                    </div>
                    <div className="arrow-left"></div>
                </div>
        );
    }
}

export default Clock;