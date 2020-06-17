import { all } from "redux-saga/effects";
import { combineReducers } from "redux";
import newsReducer from "./news/reducer";
import {
  handleGetNews,
  handleGetSections,
  handleGetTopNews,
} from "./news/sagas";

/** root reducer */
const rootReducer = combineReducers({
  news: newsReducer,
});
export default rootReducer;
/** root state */
export type RootState = ReturnType<typeof rootReducer>;
/** root saga */
export function* rootSaga() {
  yield all([
    /** news */
    handleGetNews(),
    handleGetSections(),
    handleGetTopNews(),
  ]);
}
