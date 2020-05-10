import { produce } from "immer";
import { createReducer } from "typesafe-actions";
import {
  NewsActions,
  getNews,
  getNewsFailure,
  getNewsSuccess,
  changeField,
  toggleFavorite,
} from "./actions";
import { AsyncType } from "../types";

/**
 * State Typescript Type & Initial vlue
 */
export type NewsDataState = {
  id: string;
  web_url: string;
  section_name: string;
  subsection_name: string;
  main_headline: string;
  abstract: string;
  byline: string;
  print_headline: string;
  image_src: string;
  pub_date: string;
};
export type NewsState = {
  originKeyword: string;
  keyword: string;
  page: number;
  data: NewsDataState[];
  favorites: NewsDataState[];
  getNews: {
    status: AsyncType;
    error: string;
  };
  [field: string]: any;
};
const initialState: NewsState = {
  originKeyword: "",
  keyword: "",
  page: 0,
  data: [],
  favorites: [],
  getNews: {
    status: AsyncType.INIT,
    error: "",
  },
};

/** reducer */
const reducer = createReducer<NewsState, NewsActions>(initialState)
  .handleAction(changeField, (state, { payload }) =>
    produce(state, (draft) => {
      draft[payload.key] = payload.value;
    })
  )
  .handleAction(toggleFavorite, (state, { payload }) =>
    produce(state, (draft) => {
      if (payload.action === "add") {
        draft.favorites = state.favorites.concat(
          state.data.filter((news) => news.id === payload.news_id)
        );
      } else if (payload.action === "remove") {
        draft.favorites = state.favorites.filter(
          (news) => news.id !== payload.news_id
        );
      }
    })
  )
  .handleAction(getNews, (state) =>
    produce(state, (draft) => {
      draft.getNews.status = AsyncType.WAITING;
    })
  )
  .handleAction(getNewsSuccess, (state, { payload }) =>
    produce(state, (draft) => {
      draft.originKeyword = state.keyword;
      draft.getNews.status = AsyncType.SUCCESS;
      // more 인 경우 추가, 그렇지 않으면 새로 저장
      payload.more
        ? (draft.data = state.data.concat(payload.news))
        : (draft.data = payload.news);
      // page 추가
      payload.more ? (draft.page = state.page + 1) : (draft.page = 1);
    })
  )
  .handleAction(getNewsFailure, (state, { payload }) =>
    produce(state, (draft) => {
      draft.getNews.status = AsyncType.FAILURE;
      draft.getNews.error = payload;
    })
  );

export default reducer;
