import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(guess => (
        <p key={guess.id} className="guess">{guess.value}</p>
      ))}
    </div>
  );
}

export default GuessResults;
