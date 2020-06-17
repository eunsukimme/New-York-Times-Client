import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNews,
  changeField,
  toggleFavorite,
  getSections,
  setSection,
} from "../modules/news/actions";
import { RootState } from "../modules/index";

export default function useNews() {
  const dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news);

  /** get news */
  const handleGetNews = useCallback(
    (keyword: string, page: number, more?: boolean) =>
      dispatch(getNews(keyword, page, more)),
    [dispatch]
  );
  /** change news field */
  const handleChangeNewsField = useCallback(
    (key: string, value: any) => dispatch(changeField(key, value)),
    [dispatch]
  );
  /** toggle favorite */
  const handleToggleFavorite = useCallback(
    (news_id: string, action: "add" | "remove") =>
      dispatch(toggleFavorite(news_id, action)),
    [dispatch]
  );
  /** get sections list */
  const handleGetSections = useCallback(() => dispatch(getSections()), [
    dispatch,
  ]);
  /** set section */
  const handleSetSection = useCallback(
    (section: string) => dispatch(setSection(section)),
    [dispatch]
  );

  return {
    news,

    handleGetNews,
    handleChangeNewsField,
    handleToggleFavorite,
    handleGetSections,
    handleSetSection,
  };
}
