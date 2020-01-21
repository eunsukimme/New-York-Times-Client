import React, { Component } from "react";
import styled from "styled-components";
import Article from "./Article";
import logo from "../logo.svg";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.colors.powderWhite};
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
      return (
        <Article
          main_headline={article.headline.main}
          print_headline={article.headline.print_headline}
          abstract={article.abstract}
          image_src={
            article.multimedia[0]
              ? `https://nytimes.com/${article.multimedia[0].url}`
              : logo
          }
          web_url={article.web_url}
          byline={article.byline.original}
          subsection_name={article.subsection_name}
          pub_date={article.pub_date}
        />
      );
    });

    this.props.AddArticles(articleComponents);
    this.props.UnsetLoading();
  }

  render() {
    return (
      <Container>
        <SearchContainer>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" onChange={this.handleChange.bind(this)}></input>
            <button onClick={this.handleSubmit.bind(this)}>submit</button>
          </form>
        </SearchContainer>
        <ArticleContainer>
          {this.props.loading ? "searching articles..." : this.props.articles}
          {/* <Article
            main_headline="South Korean Leader Considers Letting Its Tourists Visit North Korea"
            print_headline="South Korean Leader Mulls Tourist Visits to the North"
            abstract="Kim Jong-un has been trying to attract more foreign tourists to ease the pain of sanctions; South Korea says it may allow visits to the North."
            image_src="https://static01.nyt.com/images/2020/01/14/world/14skorea-promo/14skorea-promo-threeByTwoSmallAt2X-v3.jpg?quality=75&auto=webp&disable=upscale"
            web_url="https://www.nytimes.com/2020/01/14/world/asia/south-korea-tourists-north-korea.html?searchResultPosition=1"
            byline="By Choe Sang-Hun"
            subsection_name="Asia Pacific"
            pub_date="January 15, 2020, Page A7"
          /> */}
        </ArticleContainer>
      </Container>
    );
  }
}

export default Main;
