import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import Recipes from './pages/Recipes'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'



class App extends Component {
  constructor(props){
    super(props)

  }

  render() {

    return (
      <div>
        <div className="Header">
          <Header />
        </div>
          <div> <Navbar /> </div>

        <Router>
          <Switch>
            <div className="Body">
              <Route exact path="/about" component={About} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/recipes" component={Recipes} />
            </div>
          </Switch>
        </Router>


        <div className="Footer">
        </div>
        <Footer />
      </div>
    );


  }
}


export default App;
