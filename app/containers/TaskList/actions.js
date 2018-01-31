import { ADD_TASK, DELETE_TASK, CHANGE_STATUS, UPDATE_TASK } from './constants';

export function addTask(idCategory, title) {
  return {
    type: ADD_TASK,
    isDone: false,
    title,
    idCategory,
  };
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    id
  };
}

export function changeStatus(id) {
  return {
    type: CHANGE_STATUS,
    id,
  };
}

export function updateTask(id, idCategory, title, isDone, description) {
  return {
    type: UPDATE_TASK,
    id,
    isDone,
    title,
    idCategory,
    description,
  };
}
