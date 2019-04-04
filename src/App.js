import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MoviesGallery from './MoviesGallery';
import Details from './Details';

import './App.css';






class App extends Component {
  render() {
    return (
      <Router>
      
          <div className="App">
             <br/><br/><br/>
              <Route exact path='/' component={MoviesGallery} />
              <Route exact path='/Details' component={Details} />

            
          </div>

      </Router>

    );
  }
}

 


    


   






export default App;


