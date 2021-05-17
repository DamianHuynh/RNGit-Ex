import {combineReducers} from 'redux';
import countReducer from './countReducer';
import gameReducer from './GameReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  countReducer,
  userReducer,
  gameReducer,
});

export default rootReducer;
