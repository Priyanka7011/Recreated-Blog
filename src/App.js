import React from 'react';
import HomePage  from './home/home';
import Header from './header/header';
import Hero from './hero/hero';
import Contact from './contact/contact' ;
import Post from './Post/post';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Header/>
      <Hero/>
      <Router>
      <Switch>
      <Route path='/' exact component={HomePage}/>
      
      <Route path='/contact' exact component={Contact}/ >
      
      <Route path='/post' exact component={Post}/>
      
       
      </Switch>
      </Router>
    </div>
  );
}

export default App;
