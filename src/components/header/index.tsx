import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='header_wrap'>
        <Navbar bg='light' expand='sm'>
          {/* <Container> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <NavLink className='header_name' to='/'>
                Dashboard
              </NavLink>
              <NavLink className='header_name' to='/admin/editProduct'>
                Create/Edit product
              </NavLink>
              <NavLink className='header_name' to='/admin/viewProduct'>
                View Product
              </NavLink>
              <NavLink className='header_name' to='/admin/product'>
                Product
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {/* </Container> */}
        </Navbar>
      </div>
    </>
  );
};
export default Header;
