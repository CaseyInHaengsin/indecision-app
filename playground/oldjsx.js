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

const numbers = [55, 101, 1000];

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]

    alert(option)

};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <p>Location: {getLocation(user.location)}</p>
            <p>{app.options.length > 0 ? 'here are your options' : 'No options'}</p>
            <button disabled={app.options.length ==} onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>Option: {option}</li>
                    })
                }
            </ol>
            <form onSubmit={onformSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
                <button onClick={clearEm}>Clear all!</button>
                {
                    numbers.map((number) => {
                        return <p key={number}>Number: {number}</p>;
                    })
                }
        </div>
        );
        
        ReactDOM.render(template, appRoot);
};


render();