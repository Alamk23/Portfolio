import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavContainer className="navbar fixed-top navbar-expand-lg navbar-light bg-white p-md-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ronaldo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <UL className="navbar-nav">
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Home
              </A>
            </LI>
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                About
              </A>
            </LI>
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Services
              </A>
            </LI>
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Projects
              </A>
            </LI>
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="myblog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                My Blog
              </A>
            </LI>
            <LI className="nav-item">
              <A
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                Contact
              </A>
            </LI>
          </UL>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;

const UL = styled.ul`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-end;
`;

const NavContainer = styled.nav`
  font-family: "Poppins", sans-serif;
  box-shadow: 5px 14px 30px rgba(0, 0, 0, 0.1);
`;

const LI = styled.li`
  font-family: "Poppins", sans-serif;

  display: table-cell;
  position: relative;
  color: #000;
  font-weight: 500;
  transition: 0.5s ease-in-out;
  margin-left: 1rem;
`;
const A = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  color: #000;

  text-decoration: none;
  letter-spacing: 0.3em;

  display: inline-block;
  position: relative;
  .active {
    color: blue;
  }

  &::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: blue;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover::after {
    width: 95%;
    left: 0;
  }
`;
