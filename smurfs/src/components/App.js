import React, { Component } from "react";
import SmurfList from '../components/SmurfList';
import AddSmurf from '../components/AddSmurf'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddSmurf />
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfList />
      </div>
    );
  }
}

export default App;
