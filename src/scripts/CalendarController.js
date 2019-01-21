
import CalendarModel from "./models/CalendarModel";
import CalendarView from "./views/CalendarView";


let calendarModel = new CalendarModel;
let calendarView  = new CalendarView;

class CalendarController{
    constructor(){
        // Properties

        // Methods
        this.init();
        
    }
    init(){

        let deadline = calendarModel.deadline();
        let timeInterval = setInterval(() => {
        let    current =  calendarModel.calculateTime(deadline);
        let    print = calendarView.printClock(current);

        if(current.total <= 0){
            clearInterval(timeInterval);
        }
        }, 1000);      
    }
}

export default CalendarController;