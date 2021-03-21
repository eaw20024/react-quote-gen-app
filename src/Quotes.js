import React from "react";
import "./Quotes.css";

const Quotes = ({ quoteText, quoteAuthor, quoteGenre }) => {
  return (
    <div className="quote-container">
      <div className="quote-row">
        <div className="quote">
          <h2>{quoteText}</h2>
        </div>
      </div>
      <div className="quote-data">
        <p className="quote-author">{quoteAuthor}</p>
        <p className="quote-genre">{quoteGenre}</p>
      </div>
    </div>
  );
};

export default Quotes;
