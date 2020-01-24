import React from "react";
import styled from "styled-components";
import Article from "../containers/Article";
import logo from "../logo.svg";
import Loading from "../assets/loading.gif";

const Container = styled.div`
  width: 100%;

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
  background-color: ${props => props.theme.colors.powderWhite};
`;
const StyledForm = styled.form`
  width: 86%;
  max-width: 680px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.colors.powderGrey};

  :focus {
    border-bottom: 2px solid lightgrey;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 46px;
  border: none;
  outline: none;

  font-family: ${props => props.theme.fonts.keyword};
  font-size: ${props => props.theme.fontSizes.middle};
  font-weight: bold;
  background-color: transparent;
`;
const StyledIcon = styled.i`
  cursor: pointer;
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSizes.middle};
`;
const ArticleContainer = styled.div`
  width: 90%;
  min-height: 78vh;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoadingImage = styled.img`
  width: 80px;
`;
const LoadingMessage = styled.div`
  font-family: ${props => props.theme.fonts.keyword};
  font-size: ${props => props.theme.fontSizes.small};
`;
const ShowMoreButton = styled.div`
  margin-top: 30px;
  padding: 14px 20px;
  cursor: pointer;

  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.powderGrey};
  transition: 0.4s;

  :hover {
    background-color: ${props => props.theme.colors.powderGrey};
  }
`;

interface MainProps {
  keyword: string;
  page: number;
  loading: boolean;
  articles: Array<React.ReactNode>;
  SetKeyword: (keyword: string) => void;
  SetPage: (page: number) => void;
  SetLoading: () => void;
  UnsetLoading: () => void;
  AddArticles: (articles: Array<React.ReactNode>) => void;
  SetArticles: (articles: Array<React.ReactNode>) => void;
}

function Main({
  keyword,
  page,
  loading,
  articles,
  SetKeyword,
  SetPage,
  SetLoading,
  UnsetLoading,
  AddArticles,
  SetArticles
}: MainProps) {
  /**
   *
   * @param {React.FormEvent<HTMLInputElement>} e
   * @dev   input 태그 값의 변화가 있을 때마다 호출되고 state의 keyword를 변경한다
   */
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    SetKeyword(e.currentTarget.value);
  };

  /**
   * @dev   API를 호출하여 주어진 keyword로 검색된 기사들을 가져온다
   */
  const fetchArticles = async (page: number) => {
    const API_KEY = "p4LaTU4dxb4aQMyqjWkXl6nDJiMx5d3Z";
    const firstQueryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page}&api-key=${API_KEY}`;
    const secondQueryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${keyword}&page=${page +
      1}&api-key=${API_KEY}`;

    const first10articles = await fetch(firstQueryUrl).then(res => res.json());
    const second10articles = await fetch(secondQueryUrl).then(res =>
      res.json()
    );

    // 각 요청의 응답을 하나로 합친다
    const totalArticles = first10articles.response.docs.concat(
      second10articles.response.docs
    );

    SetPage(page + 2); // 기사를 가져온 다음에는 항상 다음 가져올 페이지를 저장한다
    return totalArticles;
  };

  /**
   *
   * @param {fetchArticles 함수의 결과로 받은 기사 오브젝트 배열} totalArticles
   * @dev   주어진 article 오브젝트에서 필요한 데이터를 추출하고 react 컴포넌트로 변환하는 함수
   */
  const convertArticlesToComponents = async (totalArticles: Array<any>) => {
    let articleComponents: React.ReactNode[] = await totalArticles.map(
      async article => {
        const articleInfo = {
          id: article._id,
          main_headline: article.headline.main,
          print_headline: article.headline.print_headline,
          abstract: article.abstract,
          image_src: article.multimedia[0]
            ? `https://nytimes.com/${article.multimedia[0].url}`
            : logo,

          web_url: article.web_url,
          byline: article.byline.original,
          section_name: article.section_name,
          subsection_name: article.subsection_name,
          pub_date: article.pub_date
        };
        return <Article key={article._id} articleInfo={articleInfo} />;
      }
    );
    articleComponents = await Promise.all(articleComponents);

    return articleComponents;
  };

  /**
   *
   * @param {React.SyntheticEvent} e
   * @dev   keyword로 검색하였을 때 호출되는 함수
   */
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault(); // 이벤트의 전달(새로고침)을 방지
    SetLoading(); // 기사를 가져올 때 동안 로딩 화면을 띄우도록 한다
    SetArticles([]); // 기존에 저장되있던 article을 초기화시킨다

    const totalArticles = await fetchArticles(0); // 키워드로 검색을 할 때는 0 페이지부터 가져온다
    const articleComponents = await convertArticlesToComponents(totalArticles);

    SetArticles(articleComponents); // 검색 결과를 바탕으로 현재 state를 업데이트 시킨다
    UnsetLoading(); // 로딩 화면 해제
  };

  /**
   * @dev   SHOW MORE 버튼을 누르면 호출되는 함수. 다음 페이지의 기사 20개를 가져온다
   */
  const LoadMoreArticles = async () => {
    SetLoading(); // 기사를 가져올 때 동안 로딩 화면을 띄우도록 한다

    const totalArticles = await fetchArticles(page);
    const articleComponents = await convertArticlesToComponents(totalArticles);

    AddArticles(articleComponents); // 새롭게 load한 articles를 state에 추가한다
    UnsetLoading(); // 로딩 화면 해제
  };

  return (
    <Container>
      <SearchContainer>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            value={keyword}
            placeholder={"keyword to search"}
            onChange={handleChange}
          ></StyledInput>
          <StyledIcon
            className="fas fa-search"
            onClick={handleSubmit}
          ></StyledIcon>
        </StyledForm>
      </SearchContainer>
      <ArticleContainer>
        {articles}
        {loading ? (
          <LoadingContainer>
            <LoadingImage src={Loading} alt="loading..." />
            <LoadingMessage>Searching Articles...</LoadingMessage>
          </LoadingContainer>
        ) : (
          undefined
        )}
        {articles && articles.length > 0 && !loading ? (
          <ShowMoreButton onClick={LoadMoreArticles}>SHOW MORE</ShowMoreButton>
        ) : (
          undefined
        )}
      </ArticleContainer>
    </Container>
  );
}

export default Main;
