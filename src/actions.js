import { ADD, REMOVE } from './actionTypes';

export function add(val) {
  return {
    type: ADD,
    payload: val
  };
}

export function remove(val) {
  return {
    type: REMOVE,
    payload: val
  };
}