import './otherImports';
import { CountDown } from "./Coutndown";

document.addEventListener('DOMContentLoaded', () => {
    const nyCounter = new CountDown(
        "2019-05-01T15:00:00.000Z",
        ".banner-ny__offer-timer"
      );
})
