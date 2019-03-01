import React from "react";
import Home from "./components/containers/Home"
import About from "./components/About";
import Signup from "./components/Signup";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
class App extends React.Component {
    render(){
        return (
            <Router>
              <div className="App">
                <Switch>
                  <Route exact={true} path="/about" component={About} />
                  <Route exact={true} path="/register" component={Signup} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </div>
            </Router>
          );
    }

}
export default App;