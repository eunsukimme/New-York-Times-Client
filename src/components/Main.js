import React, { Component } from "react";
import styled from "styled-components";
import Article from "../containers/Article";
import logo from "../logo.svg";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 140px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class Main extends Component {
  state = {
    keyword: "",
    page: 0
  };

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.SetLoading();

    const API_KEY = "p4LaTU4dxb4aQMyqjWkXl6nDJiMx5d3Z";
    const firstQueryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.keyword}&page=${this.state.page}&api-key=${API_KEY}`;
    const secondQueryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
      this.state.keyword
    }&page=${this.state.page + 1}&api-key=${API_KEY}`;

    const first10articles = await fetch(firstQueryUrl).then(res => res.json());
    const second10articles = await fetch(secondQueryUrl).then(res =>
      res.json()
    );

    // 각 요청의 응답을 하나로 합친다
    const totalArticles = first10articles.response.docs.concat(
      second10articles.response.docs
    );
    console.log(totalArticles);

    const articleComponents = totalArticles.map(article => {
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
    });

    this.props.SetArticles(articleComponents);
    this.props.UnsetLoading();
  }

  render() {
    return (
      <Container>
        <SearchContainer>
          <StyledForm onSubmit={this.handleSubmit.bind(this)}>
            <StyledInput
              type="text"
              value={this.state.keyword}
              placeholder={"keyword to search"}
              onChange={this.handleChange.bind(this)}
            ></StyledInput>
            <StyledIcon
              className="fas fa-search"
              onClick={this.handleSubmit.bind(this)}
            ></StyledIcon>
          </StyledForm>
        </SearchContainer>
        <ArticleContainer>
          {this.props.loading ? "searching articles..." : this.props.articles}
        </ArticleContainer>
      </Container>
    );
  }
}

export default Main;
