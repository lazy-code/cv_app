import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, MenuList, MenuItem } from "@material-ui/core";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Resume from "./components/Resume";
import "./App.css";

export default function App () {
  return (
    <Container fixed>
      <Router>
        <MenuList>
          <MenuItem component={Link} to="/">Registration</MenuItem>
          <MenuItem component={Link} to="/login">Login</MenuItem>
          <MenuItem component={Link} to="/cv">CV</MenuItem>
        </MenuList>
        
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cv" component={Resume} />
          <Route component={Login} />
        </Switch>
      </Router>
    </Container>
    
  );
}
