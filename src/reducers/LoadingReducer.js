function LoadingReducer(state = false, action) {
  if (action.type === "SET_LOADING") {
    return true;
  }
  if (action.type === "UNSET_LOADING") {
    return false;
  }
  return state;
}

export default LoadingReducer;
