
import React from 'react'

import Movies from './Movies';
import lordOfTheRings from './images/Lordoftherings.jpg';
import avengers from './images/avengers-infinity.jpg';
import starwars from './images/Star Wars.jpg';
import spiderMan from './images/spider-man.jpg';
import batman from './images/Batman.jpg';
import starTrek from './images/Star Trek.jpg';

export default function MoviesGallery () {
    return (  
      <div className='moviesDisplay'>
        <div className='movieContainer'>
          <Movies id='lordRings' name='The Lord of the Rings: The Fellowship of the Ring (2001)' image={lordOfTheRings} />
          <Movies id='avengers'  name='Avengers: Infinity War (2018)' image={avengers} />
          <Movies id='starWars'  name='Star Wars: Episode IV - A New Hope (1977)' image={starwars} />
          <Movies id='spiderman' name='Spider-Man (2016)' image={spiderMan} />
          <Movies id='batman'    name='Batman Begins (2005)' image={batman} />   
          <Movies id='starTrek'  name='Star Trek II: The Wrath of Khan (1982)' image={starTrek} />  
        </div>
       
    </div>
  )
}