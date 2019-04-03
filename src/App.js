import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import lordOfTheRings from './images/Lordoftherings.jpg';
import avengers from './images/avengers-infinity.jpg';
import starwars from './images/Star Wars.jpg';
import spiderMan from './images/spider-man.jpg';
import batman from './images/Batman.jpg';
import starTrek from './images/Star Trek.jpg';



class App extends Component {
  render() {
    return (
      
<div className="App">
      <br/><br/><br/>

  <div className='movieContainer'>

        <Movies name='The Lord of the Rings: The Fellowship of the Ring (2001)' image={lordOfTheRings} />
        <Movies name='Avengers: Infinity War (2018)' image={avengers} />
        <Movies name='Star Wars: Episode IV - A New Hope (1977)' image={starwars} />

  </div>

  <div className='movieContainer'>

        <Movies name='Spider-Man (2016)' image={spiderMan} />
        <Movies name='Batman Begins (2005)' image={batman} />   
        <Movies name='Star Trek II: The Wrath of Khan (1982)' image={starTrek} />
      
  </div>

    
</div>

    );
  }
}

export default App;


