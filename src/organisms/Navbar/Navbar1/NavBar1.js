import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../../../atoms/Logo/Logo";
import "./NavBar1.css";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
// import AddBook from "../AddBook/AddBook";
// import BasicModal from "../Explore/Exploremodal";
import Library from "../../AllBooks/Library";
import SimpleTabs from "../../MyLibrary/BooksCollection";
// import { TextField } from "@material-ui/core";
// import Searchbar from "../Search/SearchBar";
import Auto from "../../Search/Auto";

export default class NavBar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.state = {
      explore: false,
    };
    this.state = {
      value: 0,
    };
    this.state = {
      extra: 0,
    };
  }
  modelsetfun = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  modelexplorefun = () => {
    this.setState({
      explore: !this.state.explore,
    });
  };

  modelvaluefun = () => {
    this.setState({
      value: 2,
    });
  };
  modelextrafun = () => {
    this.setState({
      extra: 1,
    });
  };

  render() {
    return (
      // <div className="center-navbar1">
      //   <Auto />
      // </div>
      <Router className="center-navbar">
        <Navbar variant={"light"} expand="lg">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mr-auto my-2 my-lg-0 " navbarScroll>
              <Nav.Link to="/selectedbook">
                <Auto />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          {/* <Route path="/addbook"></Route>
            <Route path="/myLibrary">
              <MyLibrary />
              <SimpleTabs search="Entrepreneurship" />
            </Route> */}
          <Route path="/selectedbook">{/* <Library /> */}</Route>
        </Switch>
      </Router>
    );
  }
}
