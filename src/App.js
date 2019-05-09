import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Sketches from './components/Sketches'
import Resume from './components/Resume'

import './App.css' 
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <div className="App_content">
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/work" component={Work} />
          <Route path="/resume" component={Resume} />
          <Route path="/sketches" component={Sketches} />
        </div>
      </div>
    </Router>
  );
}

export default App;
