import React, { useState } from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dots from "./components/Dots.js"
import pages from "./Pages.js"
import View from "./components/View.js"

export default function App() {
  const [dots, setDots] = useState(undefined);
  const [dotsKey, setDotsKey] = useState(false);

  function handleSparkles(onOff) {
    if (onOff) {
      setDots(<Dots key={dotsKey}/>);
      setDotsKey(!dotsKey);
    } else {
      setDots("");
    }
  }

  var routes = [];
  for (var i=0;i<pages.length;i++) {
    var page = pages[i];
    routes.push(
      <Route exact path={page.path} key={`route${i}`}>
        <View onSparkles={handleSparkles} index={i} pages={pages}/>
      </Route>
    );
  }

  return (
    <div className="div-app">
      {dots}
      <Router>
        <Switch>
          {routes}
        </Switch>
      </Router>
    </div>
  );
}