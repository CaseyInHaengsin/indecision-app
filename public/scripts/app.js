'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'this is some info!'
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
