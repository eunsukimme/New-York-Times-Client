import React, { Component } from "react";
import styled from "styled-components";
import Article from "../containers/Article";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadContainer = styled.div`
  width: 100%;
  height: 15vh;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${props => props.theme.fonts.search};
  font-size: ${props => props.theme.fontSizes.middle};
  font-weight: bold;
  background-color: ${props => props.theme.colors.powderWhite};
`;

const ArticleContainer = styled.div`
  width: 90%;
  min-height: 78vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

class Favorites extends Component {
  render() {
    const favorites = [];
    for (let [article_id, articleInfo] of Object.entries(
      this.props.favorites
    )) {
      favorites.push(<Article key={article_id} articleInfo={articleInfo} />);
    }
    return (
      <Container>
        <HeadContainer>Favorite Articles</HeadContainer>
        <ArticleContainer>{favorites}</ArticleContainer>
      </Container>
    );
  }
}

export default Favorites;
