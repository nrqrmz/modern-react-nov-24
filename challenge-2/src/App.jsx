import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

// import data from './data.json';
import Quote from "./components/Quote";
import { useEffect, useState } from "react";
// import Form from "./components/Form";

function App() {
  const url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
  const apiKey = "wJoWtJRu4LfPcTL1vAL/iQ==opWc9QhZWoTbhM2g";
  const [quoteList, setQuoteList] = useState([]);
  const [highlightedQuote, setHighlightedQuote] = useState(null); // Estado para la quote destacada

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "X-Api-Key": apiKey,
          },
        });
        const data = await response.json();
        const newData = data.map((quote, index) => ({
          ...quote,
          id: index + 1,
        }));
        console.log(newData);
        setQuoteList(newData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (quote) => {
    const id = quoteList.length + 1;
    setQuoteList([...quoteList, { ...quote, id }]);
  };

  const handleDelete = (quote) => {
    console.log(highlightedQuote === quote);
    if (highlightedQuote === quote) setHighlightedQuote(null);
    setQuoteList((prevState) => {
      return prevState.filter((el) => el !== quote);
    });
    // if (highlightedQuote && highlightedQuote.id === id) {
    //   console.log("hlqID", highlightedQuote);
    //   console.log("ID", id);
    //   setHighlightedQuote((() => {
    //     return null;
    //   })());
    // }
    // setQuoteList(quoteList.filter((quote) => quote.id !== id));
  };

  const handleHighlight = (quote) => {
    setHighlightedQuote(quote); // Actualiza el ID de la quote destacada
  };
  console.log(highlightedQuote);
  return (
    <>
      <Header />
      {/* <Form handleAdd={handleAdd} /> */}
      <main>
        <div className="quote-container">
          <h1>{highlightedQuote ? highlightedQuote.quote : "Quotes"}</h1>
          {quoteList.map((quote) => (
            <Quote
              key={quote.id}
              quote={quote}
              handleDelete={(quote) => handleDelete(quote)}
              isHighlighted={highlightedQuote === quote}
              handleHighlight={handleHighlight}
            />
          ))}
        </div>
      </main>
      <Footer text="Mi App de quotes!" />
    </>
  );
}

export default App;
