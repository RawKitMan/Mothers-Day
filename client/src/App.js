import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import p1 from "./pages/p1";
import p2 from "./pages/p2";
import p3 from "./pages/p3";
import './App.css';



function App() {
  
  return (
    <Router>
      <div className="row mb-5">
        <div className="col mb-5"></div>
      </div>
      <div className="row">
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={Start} />
            <Route path="/p1" exact component={p1} />
            <Route path="/p2" exact component={p2} />
            <Route path="/p3" exact component={p3} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
