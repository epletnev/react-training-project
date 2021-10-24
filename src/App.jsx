import "./App.css";
import React, { Component } from "react";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Career from "./Components/Career/Career.jsx";
import Contact from "./Components/Contact/Contact";
import Team from "./Components/Team/Team.jsx";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
            <Link to="/career">CAREER</Link>
            <Link to="/contact">CONTACT US</Link>
            <Link to="/team">OUR TEAM</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/career" component={Career} />
            <Route path="/contact" component={Contact} />
            <Route path="/team" component={Team} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
