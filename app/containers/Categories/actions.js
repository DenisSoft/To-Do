import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './constants';

export function addCategory(title, idParentCategory) {
  return {
    type: ADD_CATEGORY,
    title,
    idParentCategory,
  };
}

export function deleteCategory(id) {
  return {
    type: DELETE_CATEGORY,
    id,
  };
}

export function updateCategory(id, title, idParentCategory, listIdChildrenCategory) {
  return {
    type: UPDATE_CATEGORY,
    id,
    title,
    idParentCategory,
    listIdChildrenCategory,
  };
}
