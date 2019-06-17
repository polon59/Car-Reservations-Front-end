import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/common/navbar/Navbar'
import Home from './components/home/Home';
import Offer from './components/offer/Offer';
import Contact from './components/contact/Contact';
import DBAccess from './Fetch/DBAccess';
import './App.css';

class App extends React.Component{

  constructor(props){
    super();
    this.DBAccess = new DBAccess();
  }

  render(){
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
                <Offer DBAccess = {this.DBAccess}/>}
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
  
}

export default App;
