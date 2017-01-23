import * as types from '../actions/actionTypes';

const initialState = [
  {
    nama: 'Andi',
    suara: 0
  },
  {
    nama: 'Budi',
    suara: 0
  },
  {
    nama: 'Susan',
    suara: 0
  },
  {
    nama: 'Heru',
    suara: 0
  }
];

export default function mainReducer(state = initialState, action) {
  switch(action.type) {

    case types.VOTE:
      return state.map(obj => {
        if (obj.nama !== action.nama) {
          return obj;
        }

        return Object.assign({}, obj, { suara: obj.suara + 1 });
      });

    default:
      return state;
  }

}
