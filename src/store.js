import { combineReducers, createStore } from "redux";
import ArticleReducer from "./reducers/ArticleReducer";
import FavoriteReducer from "./reducers/FavoriteReducer";
import LoadingReducer from "./reducers/LoadingReducer";
function KeywordReducer(state = "", action) {
  if (action.type === "SET_KEYWORD") {
    return action.new_keyword;
  }
  return state;
}
function PageReducer(state = 0, action) {
  if (action.type === "SET_PAGE") {
    return action.new_page;
  }
  return state;
}

const rootReducer = combineReducers({
  keyword: KeywordReducer,
  page: PageReducer,
  articles: ArticleReducer,
  favorites: FavoriteReducer,
  loading: LoadingReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
