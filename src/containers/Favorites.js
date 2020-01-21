import Favorites from "../components/Favorites";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};
export default connect(mapStateToProps)(Favorites);
