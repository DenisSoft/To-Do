import { UPDATE_FILTER_TASKS } from './constants';

const initialState = {
  title: '',
  isDone: false,
};

export default function updateFilterTasks(state = initialState, action) {
  switch (action.type) {

    case UPDATE_FILTER_TASKS:

      return {
        title: action.title,
        isDone: action.isDone ? state.isDone : !state.isDone,
      };

    default:
      return state;
  }
}
