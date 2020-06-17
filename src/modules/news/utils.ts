import logo from "../../logo.svg";

export const parseNews = (news: any) => {
  return {
    id: news._id,
    main_headline: news.headline.main,
    print_headline: news.headline.print_headline,
    abstract: news.abstract,
    image_src: news.multimedia[0]
      ? `https://nytimes.com/${news.multimedia[0].url}`
      : logo,

    web_url: news.web_url,
    byline: news.byline.original,
    section_name: news.section_name,
    subsection_name: news.subsection_name,
    pub_date: news.pub_date,
  };
};

export const parseTopNews = (news: any) => {
  return {
    id: news.uri,
    main_headline: news.title,
    abstract: news.abstract,
    image_src: news.multimedia[0] ? `${news.multimedia[0].url}` : logo,
    web_url: news.short_url,
    byline: news.byline,
    section_name: news.section,
    subsection_name: news.subsection,
    pub_date: news.published_date,
  };
};
