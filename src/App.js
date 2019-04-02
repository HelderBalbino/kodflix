import React, { Component } from 'react';
import lord from './images/lordoftherings.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="App">
      <img src={lord} alt="lord of the rings movie cover"/>
      <br/> <br/>

      <h1>Lord of the rings</h1>

    <div className="container">
      <div className="movieName">moulin rouge</div>
      <div className="movieName">avengers</div>
      <div className="movieName">Star wars</div>
      <div className="movieName">The lego movie</div>
    </div>
      
</div>
    );
  }
}

export default App;
