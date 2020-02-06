
class IndecisionApp extends React.Component {
    render(){
        const title = "Indecision";
        const subtitle = "What will you do? Dude";
        const options = ["Thing One", "Thing two", "Thing three"];
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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
                {this.props.options.length}
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