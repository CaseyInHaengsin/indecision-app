/*
Command to generate JSX file - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
*/


const app = {
    title: 'Indecision App',
    subtitle: "This is the app, yo!"
};
const user = {
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

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>Location: {getLocation(user.location)}</p>
        
    </div>
    );

let count = 0; 
const someId = 'myidhere';
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id={someId} className="button">+1</button>
    </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);