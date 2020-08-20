import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dots from "./components/Dots.js"
import pages from "./Pages.js"
import View from "./components/View.js"

function handlSparkles() {

}

var routes = [];
for (var i=0;i<pages.length;i++) {
  var page = pages[i];
  routes.push(
    <Route exact path={page.path} key={`route${i}`}>
      <View onclick={this.handleSparkles} index={i} pages={pages}/>
    </Route>
  );
}

export default function App() {
  return (
    <div className="div-app">
      <Dots />
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}