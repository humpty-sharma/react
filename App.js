import React from 'react';
import './App.css';
import Header from './Header/Header.react';
import Navigation from './Navigation/Navigation.react';
import Input from './Input/Input.react';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Input></Input>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
