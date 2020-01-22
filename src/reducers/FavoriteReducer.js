function FavoriteReducer(state = {}, action) {
  if (action.type === "ADD_FAVORITE") {
    return { ...state, [action.article_id]: action.articleInfo };
  }
  if (action.type === "REMOVE_FAVORITE") {
    const { [action.article_id]: value, ...remainFavorites } = state;
    return remainFavorites;
  }
  return state;
}

export default FavoriteReducer;
