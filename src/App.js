import React from 'react';
import Footer from './components/footer/footer'
import Home from "./pages/home"
// import Contact from "./pages/contact"
import Work from "./pages/portfolio"
import Resume from "./pages/resume"
import About from "./pages/about"
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/work" component={Work} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Footer />
    </Router>
  );
}

export default App;
