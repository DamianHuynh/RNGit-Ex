import {COUNT_UP, COUNT_DOWN} from '../actions/countAction';

const initState = {
  number: 10,
};

const countReducer = (state = initState, action) => {
  // console.log(action);
  //immutable
  switch (action.type) {
    case COUNT_UP:
      console.log(action);
      state.number = state.number + action.payload;
      return {...state};
    // return {number: state.number + 1};
    case COUNT_DOWN:
      state.number--;
      return {...state};
    default:
      return {...state};
  }
};

export default countReducer;
