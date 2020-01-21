import React, { Component } from "react";
import styled from "styled-components";
import Article from "../containers/Article";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArticleContainer = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Favorites extends Component {
  render() {
    const favorites = [];
    for (let [article_id, articleInfo] of Object.entries(
      this.props.favorites
    )) {
      console.log(article_id, articleInfo);
      favorites.push(<Article key={article_id} articleInfo={articleInfo} />);
    }
    return (
      <Container>
        <ArticleContainer>{favorites}</ArticleContainer>
      </Container>
    );
  }
}

export default Favorites;
