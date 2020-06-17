import { take, call, put } from "redux-saga/effects";
import { GET_NEWS, GET_SECTIONS, SET_SECTION } from "./constants";
import {
  getNewsApi,
  getSectionsApi,
  getTopStoriesApi,
} from "../../lib/api/news";
import {
  getNewsFailure,
  getNewsSuccess,
  getSectionsFailure,
  getSectionsSuccess,
  getTopNewsOfTheSectionFaiulre,
  getTopNewsOfTheSectionSuccess,
} from "./actions";
import { parseNews, parseTopNews } from "./utils";
import { defaultErrorMsg } from "../../setting/config";

/** GET_NEWS action 이 dispatch 되면 api 를 호출하는 함수 */
export function* handleGetNews() {
  while (true) {
    try {
      const {
        payload: { keyword, page, more },
      } = yield take(GET_NEWS);
      const response: any = yield call(getNewsApi, keyword, more ? page : 0);
      const newses = response["response"].docs;
      if (newses) {
        const parsedNews = newses.map((news: any) => parseNews(news));
        yield put(getNewsSuccess(parsedNews, more));
      } else {
        yield put(getNewsFailure("Failed to get news."));
      }
    } catch (e) {
      console.log(e);
      yield put(getNewsFailure(defaultErrorMsg));
    }
  }
}
/** GET_SECTIONS action 이 dispatch 되면 api 를 호출하는 saga  */
export function* handleGetSections() {
  while (true) {
    try {
      yield take(GET_SECTIONS);
      const response: any = yield call(getSectionsApi);
      if (response.status === "OK") {
        const parsedSections = response.results.map(
          (data: any) => data.display_name
        );
        yield put(getSectionsSuccess(parsedSections));
      } else {
        yield put(getSectionsFailure(""));
      }
    } catch (e) {
      console.log(e);
      yield put(getSectionsFailure(defaultErrorMsg));
    }
  }
}

/** SET_SECTION action 이 disptch 되면 api 를 호출하는 saga */
export function* handleGetTopNews() {
  while (true) {
    try {
      const { payload } = yield take(SET_SECTION);
      const response: any = yield call(getTopStoriesApi, payload);
      if (response.status === "OK") {
        const parsedTopNews = response.results.map((data: any) =>
          parseTopNews(data)
        );
        yield put(getTopNewsOfTheSectionSuccess(parsedTopNews));
      } else {
        yield put(getTopNewsOfTheSectionFaiulre("Failed to fetch top news."));
      }
    } catch (e) {
      console.log(e);
      yield put(getTopNewsOfTheSectionFaiulre(defaultErrorMsg));
    }
  }
}
