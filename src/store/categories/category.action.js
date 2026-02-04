import { CATEGORIS_ACTION_TYPING } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(CATEGORIS_ACTION_TYPING.SET_CATEGORIS_MAP, categoriesMap);
};
