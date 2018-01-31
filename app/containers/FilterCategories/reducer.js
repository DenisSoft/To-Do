import { PUSH_POP_CATEGORY_IN_FILTER } from './constants';

const initialState = [0];

export default function categoryFilterReducer(state = initialState, action) {
  switch (action.type) {

    case PUSH_POP_CATEGORY_IN_FILTER:

      if (state.includes(action.id)) {
        let listIdOpenCategory = state.slice();
        const listOpenCategory = action.categories.slice();
        const closeCategory = listOpenCategory.find((category) => category.id === action.id);
        if (closeCategory.listIdChildrenCategory.length) {
          const closingSubsidiaryCategories = (listIdCategory) => {
            listIdCategory.forEach((idCategory) => {
              if (listIdOpenCategory.includes(idCategory)) {
                const closeChildCategory = listOpenCategory.find((category) => category.id === idCategory);
                if (closeChildCategory.listIdChildrenCategory.length) {
                  closingSubsidiaryCategories(closeChildCategory.listIdChildrenCategory);
                }
                listIdOpenCategory = listIdOpenCategory.filter((id) =>
                  id !== closeChildCategory.id
                );
              }
            });
            return listOpenCategory;
          };
          closingSubsidiaryCategories(closeCategory.listIdChildrenCategory);
        }
        return listIdOpenCategory.filter((idCategory) =>
          idCategory !== action.id);
      }
      return [
        ...state,
        action.id,
      ];

    default:
      return state;
  }
}
