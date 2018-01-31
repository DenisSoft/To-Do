import { UPDATE_FILTER_TASKS } from './constants';

export function updateFilterTasks(title, isDone) {
  return {
    type: UPDATE_FILTER_TASKS,
    title,
    isDone,
  };
}
