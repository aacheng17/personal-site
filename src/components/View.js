import React, { Component } from "react";
import {
  Link,
  withRouter
} from "react-router-dom";
import "./style/View.css"
import Page from "./Page.js"

class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
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
              fontSize: (currentPage ? "120%" : "inherit")
            }}
          >
            {page.navLink}
          </Link>
        </li>
      );
    }

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