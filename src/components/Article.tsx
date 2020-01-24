import React from "react";
import styled from "styled-components";
import moment from "moment";
import ArticleInfo from "../interfaces/ArticleInfo";

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
  display: flex;
  flex-direction: column;
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
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
    margin: 18px 0px 10px 10px;
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
const FavoriteIcon = styled.i`
  font-size: ${props => props.theme.fontSizes.small};
  @media (max-width: ${props => props.theme.screenSizes.PHONE}) {
    font-size: ${props => props.theme.fontSizes.tiny};
  }
`;

const Abstract = styled(Info)`
  font-family: ${props => props.theme.fonts.abstract};
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

interface ArticleProps {
  articleInfo: ArticleInfo;
  favorites: { [id: string]: any };
  AddFavorite: (id: string, articleInfo: object) => void;
  RemoveFavorite: (id: string) => void;
}

function Article({
  articleInfo,
  favorites,
  AddFavorite,
  RemoveFavorite
}: ArticleProps) {
  const handleAdd = () => {
    AddFavorite(articleInfo.id, articleInfo);
  };

  const handleRemove = () => {
    RemoveFavorite(articleInfo.id);
  };

  return (
    <Container>
      <DateContainer>
        <Date>
          {moment
            .months(moment(articleInfo.pub_date).get("month"))
            .substring(0, 3)}{" "}
          {moment(articleInfo.pub_date).get("date")}{" "}
          {moment(articleInfo.pub_date).get("year")}
        </Date>
        {articleInfo.id in favorites && favorites[articleInfo.id] ? (
          <FavoriteIcon
            className="fas fa-star"
            onClick={handleRemove}
          ></FavoriteIcon>
        ) : (
          <FavoriteIcon
            onClick={handleAdd}
            className="far fa-star"
          ></FavoriteIcon>
        )}
      </DateContainer>
      <ArticleContainer>
        <ArticleMain
          href={articleInfo.web_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SubsectionName>
            {articleInfo.section_name
              ? articleInfo.section_name
              : articleInfo.subsection_name}
          </SubsectionName>
          <Title>{articleInfo.main_headline}</Title>
          <Abstract>
            {articleInfo.abstract && articleInfo.abstract.length <= 20
              ? articleInfo.abstract
              : `${articleInfo.abstract.substring(0, 20)}...더보기`}
          </Abstract>
          <Info>{articleInfo.byline}</Info>
          <Line></Line>
          <PrintHeadline>
            {articleInfo.print_headline
              ? `PRINT EDITION ${articleInfo.print_headline}`
              : undefined}
          </PrintHeadline>
        </ArticleMain>
        <ImageContainer>
          <Image src={articleInfo.image_src} alt="" />
        </ImageContainer>
      </ArticleContainer>
    </Container>
  );
}

export default Article;
