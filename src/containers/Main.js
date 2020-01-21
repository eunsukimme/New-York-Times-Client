import Main from "../components/Main";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    articles: state.articles,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SetLoading: function() {
      dispatch({ type: "SET_LOADING" });
    },
    UnsetLoading: function() {
      dispatch({ type: "UNSET_LOADING" });
    },
    SetArticles: function(new_articles) {
      dispatch({ type: "SET_ARTICLES", new_articles: new_articles });
    },
    LoadArticles: function(new_articles) {
      dispatch({ type: "LOAD_ARTICLE", new_articles: new_articles });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
