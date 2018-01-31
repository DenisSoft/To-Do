/* eslint-disable no-param-reassign */
import { ADD_TASK, DELETE_TASK, CHANGE_STATUS, UPDATE_TASK } from './constants';
import { fromJS } from 'immutable';
import omit from 'lodash/omit';
import assign from 'lodash/assign';
import mapValues from 'lodash/mapValues';

const initialState =
  [
    {
      id: 5,
      idCategory: 6,
      title: 'To-Do Item #1',
      isDone: false,
      description: 'Bla-Bla-Bla',
    },
    {
      id: 4,
      idCategory: 6,
      title: 'To-Do Item #2',
      isDone: true,
      description: 'Bla-Bla-Bla',
    },
    {
      id: 3,
      idCategory: 6,
      title: 'To-Do Item #3',
      isDone: true,
      description: 'Bla-Bla-Bla',
    },
    {
      id: 2,
      idCategory: 6,
      title: 'To-Do Item #4',
      isDone: true,
      description: 'Bla-Bla-Bla',
    },
    {
      id: 1,
      idCategory: 6,
      title: 'To-Do Item #5',
      isDone: true,
      description: 'Bla-Bla-Bla',
    },
  ];


export default function taskReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TASK:
      {
        const newId = state[0].id + 1;
        return [
          {
            id: newId,
            idCategory: action.idCategory,
            title: action.title,
            isDone: action.isDone,
            description: '',
          },
          ...state,
        ];
      }

    case DELETE_TASK:
      return state.filter((task) => task.id !== action.id);

    case CHANGE_STATUS:
      return state.map((task) => {
        if (task.id === action.id) {
          task.isDone = !task.isDone;
        }
        return task;
      });


    case UPDATE_TASK:
      return state.map((task) => {
        if (task.id === action.id) {
          task.idCategory = action.idCategory;
          task.title = action.title;
          task.isDone = action.isDone;
          task.description = action.description;
        }
        return task;
      });

    default:
      return state;
  }
}
