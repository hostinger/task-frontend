import './otherImports';
import { CountDown } from "./CountDown";
import { menuToggle } from './MenuToggle';


document.addEventListener('DOMContentLoaded', () => {
    // Timer
    const nyCounter = new CountDown(
        "2019-05-01T15:00:00.000Z",
        ".banner-ny__offer-timer"
      );
    // Menu toggle
    menuToggle();
})
