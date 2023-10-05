import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';

class AppNav extends Component {
    state = {  } 
    render() { 
        return (
                <div>
                  <Navbar color='dark' dark expand="md">
                    <NavbarBrand href="/">Personal Expense Tracker App</NavbarBrand>
                   
                      <Nav className="ml-auto" navbar>
                        <NavItem>
                          <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/category">Categories</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/expenses">Expenses</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/graph">Graph</NavLink>
                        </NavItem>
                      </Nav>
                  </Navbar>
                </div>
        );
    }
}
 
export default AppNav;