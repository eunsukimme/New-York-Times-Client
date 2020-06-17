import React, { useEffect } from "react";
import styled from "styled-components";
import { useNews } from "../hooks";
import { News, Loader } from "../components";
import { AsyncType } from "../modules/types";
import { Category } from "../components/button";
import { NewsDataState } from "../modules/news/reducer";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CategoryContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #eeeeee;
`;
const NewsContainer = styled.div`
  width: 90%;
  min-height: 78vh;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Main() {
  const {
    news,
    handleGetSections,
    handleSetSection,
    handleChangeNewsField,
  } = useNews();

  /** section list 를 불러오는 함수 */
  useEffect(() => {
    handleGetSections();
  }, [handleGetSections]);

  /** 컴포넌트가 unmount 되면 처리해준다 */
  useEffect(() => {
    return () => {
      handleChangeNewsField("data", []);
    };
  }, [handleChangeNewsField]);

  return (
    <Container>
      <CategoryContainer>
        {news.sections.map((category) => (
          <Category
            onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleSetSection(category)
            }
            key={category}
            name={category}
          />
        ))}
      </CategoryContainer>
      <NewsContainer>
        {news.data.map((_news: NewsDataState) => (
          <News key={_news.id} newsInfo={_news} />
        ))}
        {/* {news.data.length > 0 && news.getNews.status !== AsyncType.WAITING && (
          <ShowMoreButton onClick={LoadMoreArticles}>SHOW MORE</ShowMoreButton>
        )} */}
      </NewsContainer>
      {/* loader */}
      <Loader
        visible={
          news.getSections.status === AsyncType.WAITING ||
          news.getTopNews.status === AsyncType.WAITING
        }
      />
    </Container>
  );
}

export default Main;
