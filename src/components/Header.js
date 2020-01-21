import React, { Component } from "react";
import styled from "styled-components";
import logo from "../logo.svg";

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

class Header extends Component {
  render() {
    return (
      <Container>
        <Logo src={logo} alt="THe New York Times" />
      </Container>
    );
  }
}

export default Header;
