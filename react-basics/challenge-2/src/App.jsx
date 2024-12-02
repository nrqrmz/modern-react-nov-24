import Footer from "./components/Footer";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Form from "./components/Form";
import QuoteCard from "./components/QuoteCard";
import data from "./data.json";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({});
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, [])

  const setRandomQuote = () => {
    const randomNumber = Math.floor(Math.random() * data.length);
    setQuote(data[randomNumber]);
  };

  const handleAdd = (quote) => {
    setQuotes([...quotes, quote]);
  };

  return (
    <>
      {console.log(quotes)}
      <Header />
      <main>
        <Form handleAdd={handleAdd} />
        <Quote quote={quote.quote} author={quote.author} />

        <button onClick={setRandomQuote}>Change quote</button>

        <div className="grid-quotes">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              id={quote.id}
              quote={quote.quote}
              author={quote.author}
            />
          ))}
        </div>
      </main>

      <Footer text="My quotes app!" />
    </>
  );
}

export default App;
