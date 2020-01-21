import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Container = styled.header`
  width: 100%;
  height: 7vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 30px;
`;

const Navigation = styled.nav``;

class Header extends Component {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="THe New York Times" />
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </Navigation>
      </Container>
    );
  }
}

export default Header;
