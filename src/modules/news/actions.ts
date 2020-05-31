import { createAction, ActionType } from "typesafe-actions";
import {
  GET_NEWS,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS,
  CHANGE_FIELD,
  TOGGLE_FAVORITE,
  GET_SECTIONS,
  GET_SECTIONS_FAILURE,
  GET_SECTIONS_SUCCESS,
} from "./constants";

/**
 * Actions creator
 */
/** get news */
export const getNews = createAction(
  GET_NEWS,
  (keyword: string, page: number, more?: boolean) => ({ keyword, page, more })
)();
export const getNewsSuccess = createAction(
  GET_NEWS_SUCCESS,
  (news: any, more?: boolean) => ({ news, more })
)();
export const getNewsFailure = createAction(
  GET_NEWS_FAILURE,
  (error: string) => error
)();
/** change field */
export const changeField = createAction(
  CHANGE_FIELD,
  (key: string, value: any) => ({ key, value })
)();
/** toggle favorite */
export const toggleFavorite = createAction(
  TOGGLE_FAVORITE,
  (news_id: string, action: "add" | "remove") => ({ news_id, action })
)();
/** get sections list */
export const getSections = createAction(GET_SECTIONS)();
export const getSectionsSuccess = createAction(
  GET_SECTIONS_SUCCESS,
  (sections: string[]) => sections
)();
export const getSectionsFailure = createAction(
  GET_SECTIONS_FAILURE,
  (error: string) => error
)();

/**
 * Actions Typescript type
 */
const actions = {
  getNews,
  getNewsFailure,
  getNewsSuccess,
  changeField,
  toggleFavorite,
  getSections,
  getSectionsFailure,
  getSectionsSuccess,
};
export type NewsActions = ActionType<typeof actions>;
