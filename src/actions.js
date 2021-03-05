import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export function add(item) {
  return {
    type    : ADD_ITEM,
    payload : item
  };
}

export function remove(item) {
  return {
    type    : REMOVE_ITEM,
    payload : item
  };
}
