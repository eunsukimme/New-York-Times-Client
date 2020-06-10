import client from "./client";

export const getNewsApi = (keyword: string, page: number) =>
  client.get(`/search/v2/articlesearch.json?q=${keyword}&page=${page}`);

export const getSectionsApi = () =>
  client.get(`/news/v3/content/section-list.json`);

export const getRecentNewsApi = (source: string, section: string) =>
  client.get(`/news/v3/content/all/all.json`);
