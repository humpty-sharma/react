import React from 'react';



class Subtract extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            result: 0
           
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        this.setState({result: (params.number1)-(params.number2)})
    }

    render() {
        return (
            <div >
                <h1> Subtract Result: {this.state.result}</h1>
                
            </div>
        );
    }
}


export default Subtract;