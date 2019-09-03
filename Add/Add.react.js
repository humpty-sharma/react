import React from 'react';



class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            result: 0
           
        }
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        this.setState({result: Number(params.number1) + Number(params.number2)})
    }

    render() {
        return (
            <div >
                <h1> Add Result: {this.state.result}</h1>
                
            </div>
        );
    }
}

export default Add;