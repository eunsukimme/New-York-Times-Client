import { createStore } from "redux";
const initialState = {
  loading: false,
  articles: [],
  favorites: {}
};
function reducer(state = initialState, action) {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === "UNSET_LOADING") {
    return {
      ...state,
      loading: false
    };
  }
  if (action.type === "SET_ARTICLES") {
    return {
      ...state,
      articles: action.new_articles
    };
  }
  if (action.type === "LOAD_ARTICLES") {
    return {
      ...state,
      articles: [...state.articles, action.new_articles]
    };
  }
  if (action.type === "ADD_FAVORITE") {
    return {
      ...state,
      favorites: { ...state.favorites, [action.article_id]: action.articleInfo }
    };
  }
  if (action.type === "REMOVE_FAVORITE") {
    const { [action.article_id]: value, ...remainFavorites } = state.favorites;
    return {
      ...state,
      favorites: remainFavorites
    };
  }
  return state;
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
