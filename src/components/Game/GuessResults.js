import React from 'react';

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map((result, row) => (
        <p key={result.id} className="guess">
          {result.value.map((r, column) => (
            <span key={`${row}_${column}`} className={`cell ${r.status}`}>{r.letter}</span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
