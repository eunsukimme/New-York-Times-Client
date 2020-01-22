function ArticleReducer(state = [], action) {
  if (action.type === "SET_ARTICLES") {
    return action.new_articles;
  }
  if (action.type === "ADD_ARTICLES") {
    return [...state, ...action.new_articles];
  }
  return state;
}

export default ArticleReducer;
