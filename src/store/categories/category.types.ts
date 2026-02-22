export enum CATEGORIS_ACTION_TYPES {
  FETCH_CATEGORISE_START = 'categories/FETCH_CATEGORISE_START',
  FETCH_CATEGORISE_SUCCESS = 'categories/FETCH_CATEGORISE_SUCCESS',
  FETCH_CATEGORISE_FAILED = 'categories/FETCH_CATEGORISE_FAILED',
};

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
}