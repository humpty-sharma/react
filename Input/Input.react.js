import React from 'react';
import {Link} from 'react-router-dom';


class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            number1: 0,
            number2: 0,
            result: 0
        }
    }

    onChange1= (event) =>{
        
        this.setState({number1: event.target.value, result: this.state.number2 + (event.target.value)});
        console.log(this.state.number1);
    }

    onChange2= (event) =>{
        this.setState({number2: event.target.value, result: this.state.number1 + (event.target.value)});
        console.log(this.state.number2);
    }

    render() {
        return (
            <div >
                <div>
                <input type="text" id="value" name="number1" onChange={this.onChange1} placeholder="Number1"></input>
                <input type="text" id="value" name="number1" onChange={this.onChange2} placeholder="Number2"></input>
                <Link to={`/add/${this.state.number1}/${this.state.number2}`}>Add</Link>
                <Link to={`/subtract/${this.state.number1}/${this.state.number2}`}>Subtract</Link>
                <Link to={`/multiply/${this.state.number1}/${this.state.number2}`}>Multiply</Link>
                <Link to={`/Divide/${this.state.number1}/${this.state.number2}`}>Divide</Link>
                </div>
            </div>
        );
    }
}

export default Input;