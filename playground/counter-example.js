
//Steps to create state

//1. Setup a state object
//2. Component rendered with default state values
//3. Change the state based on event
//5. Start again at 3

class Counter extends React.Component{
    constructor(props){
        super(props);
    
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }

    }

    handleAddOne(){
        this.setState((prevState) => {

            return {
                count: prevState.count + 1
            }
        })
    }
    
    handleMinusOne(){
        this.setState((prevState) => {
            
            
            return {
                count: prevState.count - 1
            }
        });
    }
    
    handleReset(){
        this.setState((prevState) => {
            return {
                count: 0
            }
        })
    }
    
    
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}


ReactDOM.render(<Counter/>, document.getElementById('app'));