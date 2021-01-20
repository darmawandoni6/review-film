import React, { useState } from "react";
import { withRouter } from "react-router-dom";
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
  NavbarText,
} from "reactstrap";

const CustomNavbar = (props) => {
  const { history, location } = props;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar expand="md" className="mb-3 custom-navbar">
      <div className="container">
        <NavbarBrand href="/">Review Film</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Film
              </DropdownToggle>
              <DropdownMenu left>
                <DropdownItem onClick={() => history.push("/admin/add-film")}>
                  Add Film
                </DropdownItem>
                <DropdownItem onClick={() => history.push("/admin/list-film")}>
                  List Film
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/">GitHub</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default withRouter(CustomNavbar);
