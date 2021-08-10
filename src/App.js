import React, { Component } from "react";
import "./App.css";

import Input from "./components/Input";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";

// const app = new Clarify.app({
//   apikey: "a5a3ec42f22a40ac80c01102da546b71",
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onRouteChange = () => {
    this.setState({ route: "/" });
  };
  onSubmit = () => {
    console.log("click");
    // app.models
    //   .predict(
    //     "a5a3ec42f22a40ac80c01102da546b71",
    //     "https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=6&m=1179420343&s=612x612&w=0&h=y7GrwxrbixTWvJfaeiu55rWXMGYr6oP583uzJJ4-Kis="
    //   )
    //   .then(
    //     function (response) {},
    //     function (err) {}
    //   );
  };
  render() {
    return (
      <div className="app-body">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Input
                onInputChange={this.onInputChange}
                onSubmit={this.onSubmit}
              />
            </Route>
            <Route
              path="/signin"
              component={SignIn}
              onRouteChange={this.onRouteChange}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
