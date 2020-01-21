import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

const Container = styled.div`
  width: 100%;
  max-width: 840px;
  padding: 24px 0px;

  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.powderGrey};

  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    flex-direction: column;
  }
`;
const DateContainer = styled.div`
  width: 14%;
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    width: 100%;
  }
`;
const ArticleContainer = styled.div`
  width: 86%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    width: 100%;
  }
`;
const ArticleMain = styled.a`
  max-width: 470px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
`;
const ImageContainer = styled.div`
  margin-left: 40px;
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    margin: 18px 0px 10px 10px;
  }
`;
const Image = styled.img`
  width: 200px;

  @media (max-width: ${props => props.theme.screenSizes.DESKTOP}) {
    width: 165px;
  }
  @media (max-width: ${props => props.theme.screenSizes.TABLET}) {
    width: 140px;
  }
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    width: 120px;
  }
`;
const Title = styled.div`
  margin-bottom: 5px;
  font-size: ${props => props.theme.fontSizes.main_headline[0]};
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    font-size: ${props => props.theme.fontSizes.main_headline[1]};
  }
`;
const Info = styled.div`
  margin-bottom: 5px;
  font-size: ${props => props.theme.fontSizes.info[0]};
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    font-size: ${props => props.theme.fontSizes.info[1]};
  }
`;
const Date = styled(Info)`
  padding-right: 5px;
  color: ${props => props.theme.colors.grey};
`;
const Abstract = styled(Info)`
  font-family: Gelasio;
  color: ${props => props.theme.colors.lightDark};
  font-size: ${props => props.theme.fontSizes.abstract[0]};
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    font-size: ${props => props.theme.fontSizes.abstract[1]};
  }
`;
const SubsectionName = styled(Info)`
  color: ${props => props.theme.colors.lightDark};
`;
const Line = styled.div`
  width: 80px;
  border-top: 1px solid lightgrey;
  margin: 15px 0px;
`;
const PrintHeadline = styled.div`
  max-width: 360px;
  font-size: ${props => props.theme.fontSizes.print_hl[0]};
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    font-size: ${props => props.theme.fontSizes.print_hl[1]};
  }
`;

class Article extends Component {
  render() {
    const date = moment(this.props.pub_date);
    const month = moment.months(date.get("month"));
    const day = date.get("date");

    return (
      <Container>
        <DateContainer>
          <Date>
            {month} {day}
          </Date>
        </DateContainer>
        <ArticleContainer>
          <ArticleMain
            href={this.props.web_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SubsectionName>{this.props.subsection_name}</SubsectionName>
            <Title>{this.props.main_headline}</Title>
            <Abstract>{this.props.abstract}</Abstract>
            <Info>{this.props.byline}</Info>
            <Line></Line>
            <PrintHeadline>
              {this.props.print_headline
                ? `PRINT EDITION ${this.props.print_headline}`
                : undefined}
            </PrintHeadline>
          </ArticleMain>
          <ImageContainer>
            <Image src={this.props.image_src} alt="" />
          </ImageContainer>
        </ArticleContainer>
      </Container>
    );
  }
}

export default Article;
