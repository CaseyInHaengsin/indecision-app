
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>What will you do?</h2>
            </div>
        );
    }
    
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>What should I do? </button>
            </div>
        );
    }
}

//Options -> Options component here
class Options extends React.Component {
    render(){
        return (
            <div>
                <p>Here are your options!</p>
            </div>
        );
    }
}


//AddOption -> 

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <p>Add an Option!</p>
            </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'))