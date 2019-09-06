

class CalendarModel{
    constructor(){
        // Properties

        // Methods
        this.deadline;
        this.calculateTime;
        this.updateclock;
    }

    // Create a new deadline here
    deadline(){
       let deadline = "2019-05-30 16:40";

       return deadline;
    }
    // Calculates time
    calculateTime(endtime){
        let current = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor( (current/1000) % 60 );
        let minutes = Math.floor( (current/1000/60) % 60 );
        let hours = Math.floor( (current/(1000*60*60)) % 24 );
        let days = Math.floor( current/(1000*60*60*24) );

        return {
            'total':    current,
            'days':     days,
            'hours':    hours,
            'minutes':  minutes,
            'seconds':  seconds
        }
    }

}

export default CalendarModel;