import {Paper, Rock, Scissor} from '../../../../assets';
import {PLAY, PLAYER_SELECT, RESET, RESULT} from '../actions/gameAction';

const initialState = {
  arrayGame: [
    {id: 'scissor', image: Scissor, status: false},
    {id: 'rock', image: Rock, status: false},
    {id: 'paper', image: Paper, status: true},
  ],
  playerSelect: {id: 'paper', image: Paper, status: true},
  botSelect: {id: 'rock', image: Rock, status: false},
  score: 0,
  times: 9,
};

const gameReducer = (state = {...initialState}, action) => {
  // console.log(action);
  switch (action.type) {
    case PLAYER_SELECT:
      let newArrayGame = [...state.arrayGame];
      const selectItem = newArrayGame.find(
        item => item.id === action.payload.id,
      );
      if (!selectItem.status) {
        const previousSelect = newArrayGame.find(item => item.status);
        selectItem.status = true;
        previousSelect.status = false;
        state.arrayGame = newArrayGame;
      }
      state.playerSelect = selectItem;
      console.log(state.arrayGame);
      // console.log(selectItem);
      return state;

    case PLAY:
      state.botSelect = state.arrayGame[action.payload];
      return state;

    case RESULT:
      switch (state.playerSelect.id) {
        case 'paper':
          if (state.botSelect.id === 'paper') {
            state.times--;
          } else if (state.botSelect.id === 'rock') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
        case 'rock':
          if (state.botSelect.id === 'rock') {
            state.times--;
          } else if (state.botSelect.id === 'scissor') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
        case 'scissor':
          if (state.botSelect.id === 'scissor') {
            state.times--;
          } else if (state.botSelect.id === 'paper') {
            state.score++;
          } else {
            if (state.score > 0) {
              state.score--;
            }
            state.times--;
          }
          break;
      }
      return state;

    case RESET:
      // console.log(state);
      // const ob = {...initialState};
      // console.log(ob);
      const arrayGame = [
        {id: 'scissor', image: Scissor, status: false},
        {id: 'rock', image: Rock, status: false},
        {id: 'paper', image: Paper, status: true},
      ];
      // state.playerSelect = {id: 'paper', image: Paper, status: true};
      // state.botSelect = {id: 'rock', image: Rock, status: false};
      // state.score = 0;
      // state.times = 9;
      return {...state, ...initialState, arrayGame};

    default:
      return state;
  }
};

export default gameReducer;
