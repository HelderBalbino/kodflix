import React, { Component } from 'react';
import './App.css';

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

  <div className='movieContainer'>
      <img className='moviePosters' src={lordOfTheRings} alt='Lord of the rings'/>
      <img className='moviePosters' src={avengers} alt='Avengers'/>
      <img className='moviePosters' src={starwars} alt='Avengers'/>
      
  </div>

  <div className='movieContainer'>
      <img className='moviePosters' src={spiderMan} alt='Spider man'/>
      <img className='moviePosters' src={batman} alt='Batman'/>
      <img className='moviePosters' src={starTrek} alt='Star Trek'/>

  </div>



    {/* <div className='movieTitlesContainer'>
      <div className='movieName'>The Lord of the Rings: The Fellowship of the Ring (2001)</div>
      <div className='movieName'>Avengers: Infinity War (2018)</div>
      <div className='movieName'>Star Wars: Episode IV - A New Hope (1977)</div>
    </div>

    <div className='container'>
      <div className='movieName'>Spider-man</div>
      <div className='movieName'>Star Trek II: The Wrath of Khan (1982)</div>
      
    </div> */}

     
      
</div>

    );
  }
}

export default App;
