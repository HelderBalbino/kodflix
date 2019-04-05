
import React from 'react'
import { Link } from 'react-router-dom'

export default function Movies(props) {
    return (
      <Link to={`${props.id}`} className='moviePosters'>
        <div className='moviePosters'>
          <img src={props.image} alt={`${props.name} + Movie`}/>
            <div className='overlay'> 
              <h1>{props.name}</h1>
            </div>
        </div>
      </Link>
      );  
  }