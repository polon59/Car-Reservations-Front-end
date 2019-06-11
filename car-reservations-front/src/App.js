import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/common/navbar/Navbar'
import Home from './components/home/Home';
import Offer from './components/offer/Offer';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Route 
            exact path="/" 
            render={(props) => 
              <Home/>
              }
          />
          <Route 
            path="/offer"
            render={(props) => 
              <Offer/>}
          />
          <Route 
            path="/contact" 
            render={(props) => 
              <Contact/>}
          />
        </div>
      </Router>
  );
}

export default App;
