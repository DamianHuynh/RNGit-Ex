import {Paper, Rock, Scissor} from '../../../../assets';

const initialState = {
  arrayGame: [
    {id: 'scissor', image: Scissor, status: false},
    {id: 'rock', image: Rock, status: false},
    {id: 'paper', image: Paper, status: true},
  ],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default gameReducer;
