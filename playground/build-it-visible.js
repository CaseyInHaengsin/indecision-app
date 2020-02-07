
class VisibilityToggle extends React.Component {
    handleToggleVisibility(){
        console.log('toggled');
        this.setState((prevState) => {
            return {
                visibility: prevState.visibility ? false : true
            }
            
        })
    }
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
   

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey, these are some details that are now visible!</p>
                    </div>
                )}
             
            </div>
        )
    }
}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));