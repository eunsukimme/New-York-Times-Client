import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.powderWhite};
`;

class Footer extends Component {
  render() {
    return <Container>© 2020 Eunsu Kim All Rights Reserved</Container>;
  }
}

export default Footer;
