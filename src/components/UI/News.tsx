import React, { useMemo } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNews } from "../../hooks";
import { NewsDataState } from "../../modules/news/reducer";

const Container = styled.div`
  width: 100%;
  max-width: 840px;
  padding: 24px 0px;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.powderGrey};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    flex-direction: column;
  }
`;
const DateContainer = styled.div`
  width: 14%;
  display: flex;
  flex-direction: column;
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;
const ArticleContainer = styled.div`
  width: 86%;
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
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
`;
const Image = styled.img`
  width: 200px;

  @media (max-width: ${(props) => props.theme.screenSizes.DESKTOP}) {
    width: 165px;
  }
  @media (max-width: ${(props) => props.theme.screenSizes.TABLET}) {
    width: 140px;
  }
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    width: 120px;
    margin: 18px 0px 10px 10px;
  }
`;
const Title = styled.div`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSizes.main_headline[0]};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.main_headline[1]};
  }
`;
const Info = styled.div`
  margin-bottom: 5px;
  font-size: ${(props) => props.theme.fontSizes.info[0]};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.info[1]};
  }
`;
const Date = styled(Info)`
  padding-right: 5px;
  color: ${(props) => props.theme.colors.grey};
`;
const FavoriteIcon = styled.i`
  font-size: ${(props) => props.theme.fontSizes.small};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.tiny};
  }
`;
const Abstract = styled(Info)`
  font-family: ${(props) => props.theme.fonts.abstract};
  color: ${(props) => props.theme.colors.lightDark};
  font-size: ${(props) => props.theme.fontSizes.abstract[0]};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.abstract[1]};
  }
`;
const SubsectionName = styled(Info)`
  color: ${(props) => props.theme.colors.lightDark};
`;
const Line = styled.div`
  width: 80px;
  border-top: 1px solid lightgrey;
  margin: 15px 0px;
`;
const PrintHeadline = styled.div`
  max-width: 360px;
  font-size: ${(props) => props.theme.fontSizes.print_hl[0]};
  @media (max-width: ${(props) => props.theme.screenSizes.PHONE}) {
    font-size: ${(props) => props.theme.fontSizes.print_hl[1]};
  }
`;

type NewsProps = {
  newsInfo: NewsDataState;
};

function News({ newsInfo }: NewsProps) {
  const { news, handleToggleFavorite } = useNews();
  const isFavorited = useMemo(() => newsInfo.id in news.favorites, [
    news.favorites,
    newsInfo.id,
  ]);

  return (
    <Container>
      <DateContainer>
        <Date>
          {moment
            .months(moment(newsInfo.pub_date).get("month"))
            .substring(0, 3)}{" "}
          {moment(newsInfo.pub_date).get("date")}{" "}
          {moment(newsInfo.pub_date).get("year")}
        </Date>
        <FavoriteIcon
          className={isFavorited ? "fas fa-star" : "far fa-star"}
          onClick={
            isFavorited
              ? () => handleToggleFavorite(newsInfo.id, "remove")
              : () => handleToggleFavorite(newsInfo.id, "add")
          }
        ></FavoriteIcon>
      </DateContainer>
      <ArticleContainer>
        <ArticleMain
          href={newsInfo.web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SubsectionName>
            {newsInfo.section_name
              ? newsInfo.section_name
              : newsInfo.subsection_name}
          </SubsectionName>
          <Title>{newsInfo.main_headline}</Title>
          <Abstract>
            {newsInfo.abstract && newsInfo.abstract.length <= 20
              ? newsInfo.abstract
              : `${newsInfo.abstract.substring(0, 20)}...more`}
          </Abstract>
          <Info>{newsInfo.byline}</Info>
          <Line></Line>
          <PrintHeadline>
            {newsInfo.print_headline
              ? `PRINT EDITION ${newsInfo.print_headline}`
              : undefined}
          </PrintHeadline>
        </ArticleMain>
        <ImageContainer>
          <Image src={newsInfo.image_src} alt="" />
        </ImageContainer>
      </ArticleContainer>
    </Container>
  );
}

export default News;
