export const COUNT_UP = 'COUNT_UP_NUMBER';
export const COUNT_DOWN = 'COUNT_DOWN';

export const countUp = payload => ({
  type: COUNT_UP,
  payload,
});

export const countDown = () => ({
  type: COUNT_DOWN,
});
