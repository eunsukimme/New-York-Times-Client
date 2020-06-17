import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
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
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    height: 24px;
  }
`;
const Navigation = styled.nav`
  width: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 2vh;
  right: 20px;
`;
const FavoriteIcon = styled.i`
  font-size: ${(props) => props.theme.fontSizes.middle};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

function Header() {
  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="The New York Times" />
      </Link>
      <Navigation>
        <Link to="/search">
          <FavoriteIcon className="fas fa-search"></FavoriteIcon>
        </Link>
        <Link to="/favorites">
          <FavoriteIcon className="fas fa-star"></FavoriteIcon>
        </Link>
      </Navigation>
    </Container>
  );
}

export default Header;
