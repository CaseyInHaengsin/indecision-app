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
    if (location){
        return location;
    }
    else{
        return `Unknown`;
    }
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>Location: {getLocation(user.location)}</p>
        
    </div>
    );

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);