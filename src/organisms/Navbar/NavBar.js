import React, { Component } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";
import "./NavBar.css"
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import AddBook from "../AddBook/AddBook"
import BasicModal from "../Explore/Exploremodal";
import Library from "../AllBooks/Library";
import SimpleTabs from "../MyLibrary/BooksCollection";
import { TextField } from "@material-ui/core";
import Searchbar from "../Search/SearchBar";
import Auto from "../Search/Auto";
import NavBar1 from "./Navbar1/NavBar1";
import BookSearch from "../../molecules/BookInfoSearch/BookSearch";



export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.state = {
      explore: false,
    };
    this.state={
      value:0,
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

  modelvaluefun=()=>{
    this.setState({
      value: 2,
    });
  };
  modelextrafun=()=>{
     this.setState({
       extra: this.state.extra+1,
     });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar variant={"light"} expand="lg" className="center-navbar">
            <Navbar.Brand href="#">
              <Logo />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="mr-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Button type="submit" variant="h5">
                    <SearchSharpIcon onClick={this.modelextrafun} />
                    {/* {this.state.extra == 1 && <Auto/>} */}
                    {/* {this.state.extra == 1 && <NavBar1 />} */}
                  </Button>
                </Nav.Link>

                {this.state.extra % 2 == 1 && (
                  // <Nav.Link >
                  //   <NavBar1 />
                  //   </Nav.Link>

                  <Nav.Link as={Link} to="/myLibrary"> 
                      <NavBar1 />
                  </Nav.Link>
                )}

                {this.state.extra % 2 != 1 && (
                  <Nav>
                    <Nav.Link as={Link}>
                      <BasicModal />
                    </Nav.Link>
                    <Nav.Link as={Link} to="/myLibrary">
                      <Button variant="h5" onClick>
                        Library
                      </Button>
                    </Nav.Link>
                    <Nav.Link>
                      <Button variant="h5" onClick={this.modelsetfun}>
                        AddBook
                      </Button>
                      {this.state.modal && (
                        <AddBook modelsetfun={this.modelsetfun} />
                      )}
                    </Nav.Link>
                  </Nav>
                )}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Switch>
            <Route path="/addbook">{/* <AddBook/> */}</Route>
            <Route path="/myLibrary">
              {/* <MyLibrary /> */}
              <SimpleTabs search="Entrepreneurship" />
            </Route>
            <Route path="/">
              {/* <GridCard />    dont remove it from here*/}
              <Library />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
