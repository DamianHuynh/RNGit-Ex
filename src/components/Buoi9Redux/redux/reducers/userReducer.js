import {USER_COUNT_UP} from '../actions/userAction';

const initState = {
  userName: 'React Native 02',
};

const userReducer = (state = initState, action) => {
  // console.log('userReducer', action);
  switch (action.type) {
    case USER_COUNT_UP:
      return {userName: 'React Native 03'};
    default:
      return {...state};
  }
};

export default userReducer;
