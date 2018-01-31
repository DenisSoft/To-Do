import { ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './constants';
import indexOf from 'lodash/indexOf';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

const initialState =
  [
    {
      id: 6,
      title: 'Category 1',
      idParentCategory: 0,
      listIdChildrenCategory: [],
    },
    {
      id: 5,
      title: 'Category 2',
      idParentCategory: 0,
      listIdChildrenCategory: [],
    },
    {
      id: 4,
      title: 'Category 3',
      idParentCategory: 0,
      listIdChildrenCategory: [3, 2, 1],
    },
    {
      id: 3,
      title: 'Category 3 1',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
    {
      id: 2,
      title: 'Category 3 2',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
    {
      id: 1,
      title: 'Category 3 3',
      idParentCategory: 4,
      listIdChildrenCategory: [],
    },
  ];


export default function categoryReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_CATEGORY:
      if (action.idParentCategory) {
        const index = state.findIndex((i) => i.id === action.idParentCategory) + 1;
        const newId = state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1;
        const parentCategory = state.slice(index - 1, index)[0];
        parentCategory.listIdChildrenCategory.push(newId);
        return [
          ...state.slice(0, index - 1),
          parentCategory,
          {
            id: newId,
            title: action.title,
            idParentCategory: action.idParentCategory,
            listIdChildrenCategory: [],
          },
          ...state.slice(index),
        ];
      }
      return [
        {
          id: state.reduce((maxId, category) => Math.max(category.id, maxId), -1) + 1,
          title: action.title,
          idParentCategory: action.idParentCategory || 0,
          listIdChildrenCategory: [],
        },
        ...state,
      ];

    case DELETE_CATEGORY:
      {
        let newState = state.slice();
        const idParentCategory = state.find((i) => i.id === action.id).idParentCategory;
        if (idParentCategory) {
          const indexParentCategory = state.findIndex((i) => i.id === idParentCategory);
          const parentCategory = state.slice(indexParentCategory, indexParentCategory + 1)[0];
          parentCategory.listIdChildrenCategory = parentCategory.listIdChildrenCategory.filter((id) =>
          id !== action.id
        );
          newState = [
            ...state.slice(0, indexParentCategory),
            parentCategory,
            ...state.slice(indexParentCategory + 1),
          ];
        }
        const deleteCategory = newState.find((i) => i.id === action.id);
        if (deleteCategory.listIdChildrenCategory.length) {
          let oldState = newState.slice();
          const listIdChildrenCategory = oldState.find((i) => i.id === action.id).listIdChildrenCategory;
          const deleteCildrenCategory = (listIdCategory) => {
            listIdCategory.forEach((idCategory) => {
              const deleteChildCategory = oldState.find((i) => i.id === idCategory);
              if (deleteChildCategory.listIdChildrenCategory.length) {
                deleteCildrenCategory(deleteChildCategory.listIdChildrenCategory);
              }
              oldState = oldState.filter((category) =>
                category.id !== idCategory
              );
            });
            return oldState;
          };
          newState = deleteCildrenCategory(listIdChildrenCategory);
        }
        return newState.filter((category) =>
        category.id !== action.id
      );
      }

    case UPDATE_CATEGORY:
      {
        const index = state.findIndex((i) => i.id === action.id) + 1;
        return [
          ...state.slice(0, index - 1),
          {
            id: action.id,
            title: action.title,
            idParentCategory: action.idParentCategory,
            listIdChildrenCategory: action.listIdChildrenCategory,
          },
          ...state.slice(index),
        ];
      }

    default:
      return state;
  }
}
