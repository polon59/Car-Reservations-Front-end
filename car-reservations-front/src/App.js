import {BrowserRouter as Router,Route} from 'react-router-dom';
import React from 'react';
import Navbar from './components/common/navbar/Navbar'
import Home from './components/home/Home';
import Offer from './components/offer/Offer';
import Contact from './components/contact/Contact';
import DBAccess from './Fetch/DBAccess';
import ViewCar from './components/offer/ViewCar';
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
              exact path="/offer"
              render={(props) => 
                <Offer DBAccess = {this.DBAccess}/>}
            />
            <Route 
              path="/contact" 
              render={(props) => 
                <Contact/>}
            />
            <Route 
            path="/offer/carViewCar/:id" 
            render={(props) => 
                <ViewCar id={props.match.params.id} DBAccess = {this.DBAccess}/>}
            />
          </div>
        </Router>
    );
  }
  
}

export default App;
