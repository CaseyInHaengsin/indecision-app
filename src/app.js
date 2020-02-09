

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Thing One", "Thing two", "Thing nine"]
        }
    }
    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }
    render(){
        const title = "Indecision";
        const subtitle = "What will you do? Dude";
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        
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
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What should I do? 
                </button>
            </div>
        );
    }
}

//Options -> Options component here
class Options extends React.Component {
    render(){
        
        
        return (
            <div>
                {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        );
    }
}


//Option -> Static text

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        if (e.target.elements.option.value){
            
            let opt = e.target.elements.option.value.trim();
            
        }
    }

    render(){
        return (
            <div>
                <p>Add an Option!</p>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))