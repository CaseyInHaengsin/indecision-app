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
            "p",
            null,
            app.options.length
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
            { onclick: clearEm },
            "Clear all!"
        ),
        [React.createElement(
            "p",
            { key: "0" },
            "a"
        ), React.createElement(
            "p",
            { key: "1" },
            "b"
        ), React.createElement(
            "p",
            { key: "2" },
            "c"
        )]
    );

    ReactDOM.render(template, appRoot);
};

render();
