import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import data from "./data.json";
import { useState } from "react";

function App() {
  const index = Math.floor(Math.random() * data.length);
  const [quote, setQuote] = useState(data[index]);
  const newQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex]);
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Quote quote={quote.quote} author={quote.author} />
        <button onClick={newQuote}>New Quote</button>
      </main>

      <footer>
        <Footer dymamicText="Mi nuevo mensaje" />
      </footer>
    </>
  );
}

export default App;
