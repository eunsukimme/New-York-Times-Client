import { createStore } from "redux";
const initialState = {
  loading: false,
  articles: []
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
  if (action.type === "SET_ARTICLE") {
    return {
      ...state,
      articles: action.new_articles
    };
  }
  return state;
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
