import { take, call, put } from "redux-saga/effects";
import { GET_NEWS } from "./constants";
import { getNewsApi } from "../../lib/api/news";
import { getNewsFailure, getNewsSuccess, changeField } from "./actions";
import { parseNews } from "./utils";

export function* handleGetNews() {
  while (true) {
    try {
      const {
        payload: { keyword, page },
      } = yield take(GET_NEWS);
      const response: any = yield call(getNewsApi, keyword, page);
      console.log(response);
      if (response.docs) {
        const parsedNews = response.docs.map((news: any) => parseNews(news));
        put(changeField("page", page + 1)); // add page count
        yield put(getNewsSuccess(parsedNews));
      } else {
        yield put(getNewsFailure("Failed to get news."));
      }
    } catch (e) {
      console.log(e);
      yield put(getNewsFailure("Please try again."));
    }
  }
}
