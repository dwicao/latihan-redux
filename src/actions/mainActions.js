import * as types from './actionTypes';

export function vote(nama) {
  return {
    type: types.VOTE,
    nama
  };
}
