import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    new Array(NUM_OF_GUESSES_ALLOWED).fill().map(() => ({
      value: new Array(5).fill({ letter: '', status: '' }), id: crypto.randomUUID()
    }))
  );
  const [numOfGuesses, setNumOfGuesses] = React.useState(0);

  function handleGuessSubmit(guess) {
    if (numOfGuesses === 6) {
      return;
    }

    const newResults = [...guesses];
    newResults[numOfGuesses].value = checkGuess(guess, answer);

    setGuesses(newResults);
    setNumOfGuesses(numOfGuesses => numOfGuesses + 1)
  }

  return (
    <>
      <GuessResults results={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </>
  );
}

export default Game;
