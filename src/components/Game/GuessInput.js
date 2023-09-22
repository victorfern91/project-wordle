import React from 'react';
import {WORD_LENGTH} from "../../constants";

function GuessInput({ handleGuessSubmit }) {
  const [guess, setGuess] = React.useState('')
  function handleSubmit(evt) {
    evt.preventDefault();

    handleGuessSubmit(guess)

    setGuess('');
  }

  function handleInputChange(evt) {
    setGuess(evt.target.value.toUpperCase());
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        autoFocus
        required
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
        pattern={`[a-zA-Z]{${WORD_LENGTH}}`}
        title="Must be a five letter word"
        onChange={handleInputChange}/>
    </form>
  );
}

export default GuessInput;
