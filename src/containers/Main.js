import Main from "../components/Main";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    keyword: state.keyword,
    page: state.page,
    articles: state.articles,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    SetKeyword: function(new_keyword) {
      dispatch({ type: "SET_KEYWORD", new_keyword: new_keyword });
    },
    SetPage: function(new_page) {
      dispatch({ type: "SET_PAGE", new_page: new_page });
    },
    SetLoading: function() {
      dispatch({ type: "SET_LOADING" });
    },
    UnsetLoading: function() {
      dispatch({ type: "UNSET_LOADING" });
    },
    SetArticles: function(new_articles) {
      dispatch({ type: "SET_ARTICLES", new_articles: new_articles });
    },
    AddArticles: function(new_articles) {
      dispatch({ type: "ADD_ARTICLES", new_articles: new_articles });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
