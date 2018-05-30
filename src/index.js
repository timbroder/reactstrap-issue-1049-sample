import React from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';


import { setGlobalCssModule } from 'reactstrap/lib/utils';

setGlobalCssModule(bootstrap);

// console.log(bootstrap);

const App = (
  <Navbar color="light" light expand="md">
    <Button color="danger">Danger!</Button>
    <NavbarBrand href="/">reactstrap</NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse navbar>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/components/">Components</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </Collapse>
  </Navbar>
);

ReactDOM.render(App, document.getElementById('root'));
