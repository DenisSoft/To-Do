import { PUSH_POP_CATEGORY_IN_FILTER } from './constants';

export function pushPopCategoryInFiltr(id, categories) {
  return {
    type: PUSH_POP_CATEGORY_IN_FILTER,
    id,
    categories,
  };
}
