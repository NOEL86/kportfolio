import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/About" component={About} />
        <Route exact path="/checkIn" component={CheckIn} />
        <Route exact path="/signOut" component={SignOut} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
