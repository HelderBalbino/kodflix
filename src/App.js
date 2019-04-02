import React, { Component } from 'react';
import './App.css';

import lordOfTheRings from './images/Lordoftherings.jpg';
import avengers from './images/avengers-infinity.jpg';
import starwars from './images/Star Wars.jpg';
import spiderMan from './images/spider-man.jpg';
import batman from './images/Batman.jpg';
import starTrek from './images/Star Trek.jpg';
import limitless from './images/limitless.jpg';
import godzilla from './images/godzilla.jpg';



class App extends Component {
  render() {
    return (
      
<div className="App">

<div>
      <img src={lordOfTheRings} alt='Lord of the rings'/>
      <img src={avengers} alt='Avengers'/>
      <img src={starwars} alt='Avengers'/>
      <img src={spiderMan} alt='Spider man'/>
      <img src={batman} alt='Batman'/>
      <img src={starTrek} alt='Star Trek'/>
      <img src={limitless} alt='limitless'/>
      <img src={godzilla} alt='godzilla'/>

      

      

</div>



    <div className='container'>
      <div className='movieName'>The Lord of the Rings: The Fellowship of the Ring (2001)</div>
      <div className='movieName'>Avengers: Infinity War (2018)</div>
      <div className='movieName'>Star Wars: Episode IV - A New Hope (1977)</div>
    </div>

    <div className='container'>
      <div className='movieName'>Spider-man</div>
      <div className='movieName'>Star Trek II: The Wrath of Khan (1982)</div>
      <div className='movieName'>limitless</div>
      <div className='movieName'>godzilla</div>
    </div>

     
      
</div>

    );
  }
}

export default App;
