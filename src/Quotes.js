import React from "react";
import "./Quotes.css";

const Quotes = ({
  quoteText,
  quoteAuthor,
  quoteGenre,
  toggleLike,
  liked,
  id,
}) => {
  return (
    <div className="quote-container">
      <div className="quote-row">
        <div className="quote">
          <h4>{quoteText}</h4>
        </div>
      </div>
      <div className="quote-data">
        <p className="quote-author">{quoteAuthor}</p>
      </div>
    </div>
  );
};

export default Quotes;
