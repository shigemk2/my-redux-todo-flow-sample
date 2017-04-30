// @flow
import type { Id, Text, VisibilityFilter, Action } from '../types';

let nextTodoid: Id = 0;

export const addTodo = (text: Text): Action => {
  return {
    type: 'ADD_TODO',
    id: nextTodoid++,
    text
  }
};

export const setVisibilityFilter = (filter: VisibilityFilter): Action => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

export const toggleTodo = (id: ID): Action => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};