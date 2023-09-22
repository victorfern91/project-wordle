import React from 'react';
import {GAME_STATUS} from "../../constants";

function ResultBanner({ status, guesses, answer }) {
  return <div className={`${status === GAME_STATUS.WON ? 'happy' : 'sad'} banner`}>
    { status === GAME_STATUS.WON ? (
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guesses} guesses</strong>.
      </p>
    ) : (
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    )}
  </div>;
}

export default ResultBanner;
