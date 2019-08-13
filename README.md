#  Timer Widget
## Project Overview:
Page displays countdown timer. Project created as part of employment process to Hostinger.

## Project specifics
Design mockup was provided by Hostinger. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Implemented tasks: responsive design, timer countdown.
The structure of the app:
```bash
├── README.md - This file.
├── package.json
├── public
│   ├── logo-small.png
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── index.html
└── src
    ├── styles
    │   ├── assets #helper images for the app
    │   │   ├── background-big.jpg #background image of higher quality
    │   │   ├── background-medium.jpg #background image of lower quality
    │   │   ├── correct-symbol.svg #check mark icon (ref. flaticon.com)
    │   │   └── logo.svg #hostinger logo    
    │   ├── styles.scss #main styles for the app
    │   └── mixins.scss #scss mixins, helper file for styles
    ├── components #main components for the app
    │   ├── Navigation.js #navigation menu component, menu categories are rendered based on state
    │   ├── Offer.js #component containing main offer part
    │   ├── Timer.js #timer component, rendered based on end date state
    │   └── Footer.js #footer component
    ├── Widget.js # This is the root of the app.
    ├── helper.js # Contains JavaScript helper functions
    └── index.js # Used for DOM rendering only.
```
* To change navigation menu categories - update categories state in Widget.js
* To change the end date of the counter - update endDate state in Widget.js (takes in string, format year/month/day/hours/minutes)

## App preview
[Online demo](https://timer-widget-task.netlify.com/)

* In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
