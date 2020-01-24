import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Article from "../containers/Article";
import ArticleInfo from "../interfaces/ArticleInfo";

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
interface FavoriteProps {
  favorites: { [id: string]: ArticleInfo };
}

function Favorites({ favorites }: FavoriteProps) {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const new_favorites = Object.entries(favorites).map(
      // Object.entries는 argument로 주어진 오브젝트의 key: value를 배열[key, value]로 반환한다
      // 그러므로 el은 article_id와 articleInfo로 구성된 배열 [article_id, articleInfo] 이다
      el => {
        return <Article key={el[0]} articleInfo={el[1]} />;
      }
    );
    setArticles(new_favorites);
  }, [favorites]);

  return (
    <Container>
      <HeadContainer>Favorite Articles</HeadContainer>
      <ArticleContainer>{articles}</ArticleContainer>
    </Container>
  );
  // }
}

export default Favorites;
