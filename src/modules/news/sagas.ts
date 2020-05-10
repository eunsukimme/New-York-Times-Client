import { take, call, put } from "redux-saga/effects";
import { GET_NEWS } from "./constants";
import { getNewsApi } from "../../lib/api/news";
import { getNewsFailure, getNewsSuccess } from "./actions";
import { parseNews } from "./utils";

export function* handleGetNews() {
  while (true) {
    try {
      const {
        payload: { keyword, page, more },
      } = yield take(GET_NEWS);
      const response: any = yield call(getNewsApi, keyword, more ? page : 0);
      console.log(response);
      if (response.docs) {
        const parsedNews = response.docs.map((news: any) => parseNews(news));
        yield put(getNewsSuccess(parsedNews, more));
      } else {
        yield put(getNewsFailure("Failed to get news."));
      }
    } catch (e) {
      console.log(e);
      yield put(getNewsFailure("Please try again."));
    }
  }
}
