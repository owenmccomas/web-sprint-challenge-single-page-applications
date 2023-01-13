import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Lambda Eats</h1>
        <p>Food store</p>
        <div>
            <Route path='/'>
              <Link to='/'>
                <button>click</button>
              </Link>
              <Link to='/other-click'>
                <button>other click</button>
              </Link>
            </Route>
        </div>
      </div>
    </Router>
  );
};
export default App;

