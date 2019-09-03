import React from 'react';
import  {Route,Switch}  from 'react-router-dom';
import Add from '../Add/Add.react';
import Subtract from '../Subtract/Subtract.react';
import Multiply from '../Multiply/Multiply.react';
import Divide from '../Divide/Divide.react';
import Show from '../Show/Show.react';
import Input from '../Input/Input.react';


const Navigation = () => {

    return (
        <div >
             <main>
                <Switch>
                <Route exact path="/"  component={Input}></Route>
                <Route exact path="/add/:number1/:number2"  component={Add}></Route>
                <Route path="/subtract/:number1/:number2"  component={Subtract}></Route>
                <Route exact path="/multiply/:number1/:number2"  component={Multiply}></Route>
                <Route exact path="/divide/:number1/:number2"  component={Divide}></Route>
                <Route exact path="/result"  component={Show}></Route>
                </Switch>
            </main>
        </div>
    );

}

export default Navigation;