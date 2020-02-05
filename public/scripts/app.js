"use strict";

/*
Command to generate JSX file - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
*/

var app = {
    title: 'Indecision App',
    subtitle: "This is the app, yo!",
    options: []
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

var onformSubmit = function onformSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var appRoot = document.getElementById('app');

var clearEm = function clearEm() {

    app.options = [];
    render();
};

var numbers = [55, 101, 1000];

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);
};

var render = function render() {
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
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            { disabled: app.options.length == 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    "Option: ",
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onformSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        ),
        React.createElement(
            "button",
            { onClick: clearEm },
            "Clear all!"
        ),
        numbers.map(function (number) {
            return React.createElement(
                "p",
                { key: number },
                "Number: ",
                number
            );
        })
    );

    ReactDOM.render(template, appRoot);
};

render();
