'use strict';

var app = {
    title: 'Indecision App',
    subtitle: "This is the app!"
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
