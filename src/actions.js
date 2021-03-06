import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from './actionTypes';

export function add(item) {
  console.log(item);
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

export function update(item, qty) {
  return {
    type    : UPDATE_ITEM,
    payload : { item: item, qty: qty }
  };
}
