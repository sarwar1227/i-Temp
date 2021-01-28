import React from 'react';
import TempApp from './components/TempApp';
import Navbar from './components/Navbar';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import {Route,Switch} from 'react-router-dom';
const App=()=> {
  return (
    <>
     <Navbar/>
     <Switch>
        <Route exact path="/" component={TempApp}/>
        <Route exact path="/about" component={About}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
