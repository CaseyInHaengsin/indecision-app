
class IndecisionApp extends React.Component {
    render(){
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}

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
                <Option />
            </div>
        );
    }
}


//Option -> Static text

class Option extends React.Component {
    render(){
        return (
            <div>
                An Option!
            </div>
        )
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                <p>Add an Option!</p>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))