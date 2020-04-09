import React from 'react';
import Navbar from './components/navbar'
import Home from "./pages/home"
import Contact from "./pages/contact"
import Portfolio from "./pages/portfolio"
import Resume from "./pages/resume"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
    </Router>

  );
}

export default App;
