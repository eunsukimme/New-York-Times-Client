import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { News, Loader } from "../components";
import useNews from "../hooks/useNews";
import { NewsDataState } from "../modules/news/reducer";
import { AsyncType } from "../modules/types";

const Container = styled.div`
  width: 100%;
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.powderWhite};
`;
const StyledForm = styled.form`
  width: 86%;
  max-width: 680px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.powderGrey};
  :focus {
    border-bottom: 2px solid lightgrey;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  outline: none;
  font-family: ${(props) => props.theme.fonts.keyword};
  font-size: ${(props) => props.theme.fontSizes.middle};
  font-weight: bold;
  background-color: transparent;
`;
const StyledIcon = styled.i`
  cursor: pointer;
  color: ${(props) => props.theme.colors.grey};
  font-size: ${(props) => props.theme.fontSizes.middle};
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
const ShowMoreButton = styled.div`
  margin-top: 30px;
  padding: 14px 20px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.powderGrey};
  transition: 0.4s;
  :hover {
    background-color: ${(props) => props.theme.colors.powderGrey};
  }
`;

export default function Export() {
  const { news, handleGetNews, handleChangeNewsField } = useNews();

  /**
   * input 태그 값의 변화가 있을 때마다 호출되고 state의 keyword를 변경한다
   * @param {React.FormEvent<HTMLInputElement>} e
   */
  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      handleChangeNewsField("keyword", e.currentTarget.value);
    },
    [handleChangeNewsField]
  );

  /**
   * keyword로 검색하였을 때 호출되는 함수
   * @param {React.SyntheticEvent} e
   */
  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault(); // 이벤트의 전달(새로고침)을 방지
      handleGetNews(news.keyword, news.page);
    },
    [handleGetNews, news.keyword, news.page]
  );

  /**
   * SHOW MORE 버튼을 누르면 호출되는 함수. 다음 페이지의 기사 20개를 가져온다
   */
  const LoadMoreArticles = useCallback(() => {
    handleGetNews(news.originKeyword, news.page, true);
  }, [handleGetNews, news.originKeyword, news.page]);

  /** 컴포넌트가 unmount 되면 처리해준다 */
  useEffect(() => {
    return () => {
      handleChangeNewsField("data", []);
    };
  }, [handleChangeNewsField]);

  return (
    <>
      <Container>
        <SearchContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              value={news.keyword}
              placeholder={"keyword to search"}
              onChange={handleChange}
            ></StyledInput>
            <StyledIcon
              className="fas fa-search"
              onClick={handleSubmit}
            ></StyledIcon>
          </StyledForm>
        </SearchContainer>
        <NewsContainer>
          {news.data.map((_news: NewsDataState) => (
            <News key={_news.id} newsInfo={_news} />
          ))}
          {news.data.length > 0 &&
            news.getNews.status !== AsyncType.WAITING && (
              <ShowMoreButton onClick={LoadMoreArticles}>
                SHOW MORE
              </ShowMoreButton>
            )}
        </NewsContainer>
      </Container>
      <Loader visible={news.getNews.status === AsyncType.WAITING} />
    </>
  );
}
