import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import {GAME_STATUS, INITIAL_STATE, NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";
import ResultBanner from "./ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(INITIAL_STATE);
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);
  const [status, setStatus] = React.useState(GAME_STATUS.IDLE);

  function handleGuessSubmit(guess) {
    const num = numOfGuesses + 1;
    setNumOfGuesses(num);

    if (num > NUM_OF_GUESSES_ALLOWED || status === GAME_STATUS.WON) {
      return;
    }

    const newResults = [...guesses];
    newResults[numOfGuesses].value = checkGuess(guess, answer);

    setGuesses(newResults);

    if (num === NUM_OF_GUESSES_ALLOWED) {
      setStatus(guess === answer ? GAME_STATUS.WON : GAME_STATUS.LOST);
    } else if (guess === answer) {
      setStatus(GAME_STATUS.WON);
    }
  }

  return (
    <>
      <GuessResults results={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
      {status !== GAME_STATUS.IDLE && (
        <ResultBanner status={status} guesses={numOfGuesses} answer={answer} />
      )}
    </>
  );
}

export default Game;
