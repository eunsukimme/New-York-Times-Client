import React from "react";
import styled from "styled-components";
import { useNews } from "../hooks";
import { News } from "../components";
import { NewsDataState } from "../modules/news/reducer";

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
  font-family: ${(props) => props.theme.fonts.search};
  font-size: ${(props) => props.theme.fontSizes.middle};
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.powderWhite};
`;
const ArticleContainer = styled.div`
  width: 90%;
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

function Favorites() {
  const { news } = useNews();

  return (
    <Container>
      <HeadContainer>Favorite Articles</HeadContainer>
      <ArticleContainer>
        {news.favorites.map((news: NewsDataState) => (
          <News key={news.id} newsInfo={news} />
        ))}
      </ArticleContainer>
    </Container>
  );
  // }
}

export default Favorites;
