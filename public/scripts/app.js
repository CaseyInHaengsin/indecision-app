"use strict";

/*
Command to generate JSX file - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

var app = {
    title: 'Indecision App',
    subtitle: "This is the app, yo!"
};
var user = {
    name: "casey",
    age: "Unknown",
    location: "Wherever"
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return "Unknown";
    }
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(user.location)
    )
);

var count = 0;
var someId = 'myidhere';

var addOne = function addOne() {
    count++;
    console.log(count);

    renderCounterApp();
};

var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;

    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { onClick: addOne },
            "+1"
        ),
        React.createElement(
            "button",
            { onClick: minusOne },
            "-1"
        ),
        React.createElement(
            "button",
            { onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
