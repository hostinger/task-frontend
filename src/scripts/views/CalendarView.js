
const DOMstrings = {
    calendarTimerHolder:    ".calendar-timer__holder",
    calenderTimerDays:      ".calendar-timer-days",
    calenderTimerHours:     ".calendar-timer-hours",
    calenderTimerMinutes:   ".calendar-timer-minutes",
    calenderTimerSeconds:   ".calendar-timer-seconds",
};


class CalendarView{
    constructor(){
        // Properties
        this.calendarTimerHolder    = DOMstrings.calendarTimerHolder;
        this.calenderTimerDays      = document.querySelector(DOMstrings.calenderTimerDays);
        this.calenderTimerHours     = document.querySelector(DOMstrings.calenderTimerHours);
        this.calenderTimerMinutes   = document.querySelector(DOMstrings.calenderTimerMinutes);
        this.calenderTimerSeconds   = document.querySelector(DOMstrings.calenderTimerSeconds);
        
        // Methods
        this.printClock;
    }

    printClock(current){
            this.calenderTimerDays.innerHTML = ('0' + current.days).slice(-2);
            this.calenderTimerHours.innerHTML = ('0' + current.hours).slice(-2);
            this.calenderTimerMinutes.innerHTML = ('0' + current.minutes).slice(-2);
            this.calenderTimerSeconds.innerHTML = ('0' + current.seconds).slice(-2);
    }
}
export default CalendarView;