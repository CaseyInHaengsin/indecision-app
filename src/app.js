
//Stateless function component



class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component did update');
    }
    componentWillUnmount(){
        console.log('will unmount');
    }

    handleDeleteOptions(){ this.setState(() => ({ options: [] })); }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);

    }
    handleAddOption(option){
        if (!option){
            return "Enter a valid add item";
        }
        else if (this.state.options.indexOf(option) > -1){
            return "This option already exists";

        }
        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
        
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({ 
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            }) }))
    }

    render(){
        const title = "Indecision";
        const subtitle = "What will you do? Dude";
        
        return (
            <div className="four wide column centered grid">
                <Header className="ui header" subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}    
                />
                <Options 
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision App",
    subtitle: "test"
}

const Action = (props) => {
    return (
        <div>
            <button className="ui button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                    What should I do? 
            </button>
            </div>
    )
}

const Options = (props) => {
    return (
        <div>
            {
            props.options.map((option) => (
                <Option  
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />))
            }
            <br></br>
            <button className="ui button" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    );
}
//Options -> Options component here

//Option -> Static text

const Option = (props) => {
    return (
        
        <div className="ui grid">
            <div className="three column row">
            
            <div className="column" >{props.optionText}</div>
                <button className="ui button" 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                    
                    >
                Remove</button>
                
            </div>
        </div>
        
    )
}



class AddOption extends React.Component {
    constructor(props){
        super(props);
        
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }

    }
    handleAddOption(e){
        e.preventDefault();
        if (e.target.elements.option.value){
            
            let opt = e.target.elements.option.value.trim();
            //this code is passing the option to the root component
            const error = this.props.handleAddOption(opt);
            e.target.elements.option.value = "";

            this.setState(() => ({ error }))
            
            
        }
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                
                <h5>Add an Option!</h5>
                <br></br>
                <form className="ui form" onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button className="ui button">Submit</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp options={['clown', 'test']} />, document.getElementById('app'))