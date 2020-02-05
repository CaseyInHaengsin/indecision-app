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

const addOne = () => {
    count++;
    console.log(count);
    
    renderCounterApp()
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
    
};

renderCounterApp();