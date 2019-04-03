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
      <br/><br/><br/>
  <div className='movieContainer'>

      <div className='moviePosters'>
        <img src={lordOfTheRings} alt='Lord of the rings'/>
        <div className='overlay'> 
          <h1>The Lord of the Rings: The Fellowship of the Ring (2001)</h1>
        </div>
      </div>
      <div className='moviePosters'>
        <img src={avengers} alt='Avengers'/>
        <div className='overlay'> 
          <h1>Avengers: Infinity War (2018)</h1>
        </div>
      </div>
      <div className='moviePosters'>
        <img src={starwars} alt='Avengers'/>
        <div className='overlay'> 
          <h1>Star Wars: Episode IV - A New Hope (1977))</h1>
        </div>
      </div>
      
      
      
  </div>

  <div className='movieContainer'>

      <div className='moviePosters'>
        <img src={spiderMan} alt='Spider man'/>
        <div className='overlay'> 
          <h1>Spider-Man (2016)</h1>
        </div>
      </div>
      <div className='moviePosters'>
      < img src={batman} alt='Batman'/>
      <div className='overlay'> 
          <h1>Batman Begins (2005)</h1>
        </div>
      </div>
      <div className='moviePosters'>
        <img src={starTrek} alt='Star Trek'/>
        <div className='overlay'> 
          <h1>Star Trek II: The Wrath of Khan (1982)</h1>
        </div>
      </div>
  
      
      
      

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
