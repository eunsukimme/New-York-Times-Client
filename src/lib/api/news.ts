import client from "./client";

export const getNewsApi = (keyword: string, page: number) =>
  client.get(`/articlesearch.json?q=${keyword}&page=${page}`);
