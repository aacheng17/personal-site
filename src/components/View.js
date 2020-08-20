import React, { Component } from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import "./style/View.css"
import Page from "./Page.js"
import SparklesButton from "./SparklesButton.js"

class View extends Component {
  constructor(props) {
    super(props)
    this.handleSparkles = this.handleSparkles.bind(this)
  }

  handleSparkles() {
    this.props.onSparkles();
  }

  render() {
    var pages = this.props.pages;

    var navList = [];
    for (var i=0;i<pages.length;i++) {
      var page = pages[i];
      var currentPage = this.props.location.pathname === pages[i].path;
      navList.push(
        <li key={`navList${i}`}>
          <Link className="Nav-link" to={page.path}
            style={{
              fontWeight: (currentPage ? "bold" : "normal"),
              fontSize: (currentPage ? "20px" : "inherit")
            }}
          >
            {page.navLink}
          </Link>
        </li>
      );
    }
    /*
    navList.push(
      <li key='navListSparkles'>
        <SparklesButton className='Nav-link' onClick={this.handleSparkles}/>
      </li>
    );
    */

    return (
      <>
        <ul className="Nav-list">
          {navList}
        </ul>
        <hr />
        <Page slides={pages[this.props.index].slides} />
      </>
    );
  }
}

export default withRouter(View);