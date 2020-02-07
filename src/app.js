
const obj = {
    name: "Vikram",
    getName(){
        return this.name;
    }
}

const getName = obj.getName.bind();

console.log(obj.getName());
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
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
    
}

class Action extends React.Component {
    handlePick(){
        alert('Handle pick!');

    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do? </button>
            </div>
        );
    }
}

//Options -> Options component here
class Options extends React.Component {

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);

    }
    handleRemoveAll(){
        console.log(this.props.options);
    
    }

    render(){
        
        
        return (
            <div>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option}/>)
                }
                <button onClick={this.handleRemoveAll}>Remove All</button>
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