/*
Command to generate JSX file - babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
*/


const app = {
    title: 'Indecision App',
    subtitle: "This is the app, yo!",
    options: []
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

const onformSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    
    }
    

}



const appRoot = document.getElementById('app');

const clearEm = () => {

    app.options = [];
    render();

};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>Location: {getLocation(user.location)}</p>
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <form onSubmit={onformSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
                <button onclick={clearEm}>Clear all!</button>
                {
                    [<p key="0">a</p>, <p key="1">b</p>, <p key="2">c</p>]
                }
        </div>
        );
        
        ReactDOM.render(template, appRoot);
};


render();