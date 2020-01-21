import Article from "../components/Article";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};
const mapDispatchToProps = dispatch => {
  return {
    AddFavorite: function(article_id, articleInfo) {
      dispatch({
        type: "ADD_FAVORITE",
        article_id: article_id,
        articleInfo: articleInfo
      });
    },
    RemoveFavorite: function(article_id) {
      dispatch({ type: "REMOVE_FAVORITE", article_id: article_id });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Article);
