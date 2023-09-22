export const NUM_OF_GUESSES_ALLOWED = 6;
export const WORD_LENGTH = 5;
export const INITIAL_STATE = new Array(NUM_OF_GUESSES_ALLOWED)
  .fill()
  .map(() => ({
      value: new Array(WORD_LENGTH)
        .fill({
          letter: '',
          status: '',
        }),
      id: crypto.randomUUID()
    })
  );
export const GAME_STATUS = {
  WON: 'WON',
  LOST: 'LOST',
  IDLE: 'IDLE'
};
