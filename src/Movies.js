
import React from 'react'

export default function Movies(props) {
    return (
      <div className='moviePosters'>
        <div className='moviePosters'>
          <img src={props.image} alt={`${props.name} + Movie`}/>
            <div className='overlay'> 
              <h1>{props.name}</h1>
            </div>
        </div>
      </div>
      );  
  }