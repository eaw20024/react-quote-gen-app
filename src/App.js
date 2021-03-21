import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Quotes from "./Quotes";

function App() {
  //Create state variables
  const [quotes, setQuotes] = useState([]);
  const [search, setSearch] = useState("");

  const url =
    "https://quote-garden.herokuapp.com/api/v3/quotes/random?&count=7";

  //Query the API
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setQuotes(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Search feature for filtering specific quote genres
  const filteredQuotesGenre = quotes.filter((quote) =>
    quote.quoteGenre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="random-quote-app">
      <div className="random-quote-search">
        <h1 className="random-quote-headerText">Random Quote Generator:</h1>
        <form>
          <input
            type="text"
            placeholder="Search Quote Genres"
            className="quote-genre-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredQuotesGenre.map((quote) => {
        return (
          <Quotes
            key={quote.id}
            quoteText={quote.quoteText}
            quoteAuthor={quote.quoteAuthor}
            quoteGenre={quote.quoteGenre}
          />
        );
      })}
    </div>
  );
}

export default App;
