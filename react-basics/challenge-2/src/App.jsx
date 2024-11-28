import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';
import Form from './components/Form';
import data from './data.json';
import './App.css';

import { useState } from 'react';

function App() {
    const [quote, setQuote] = useState(data[0]);
    const [quotes, setQuotes] = useState([]);

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
    };

    const handleAdd = (quote) => {
        setQuotes([...quotes, quote]);
    }

    return (
        <>
            <Header />
            {console.log(quotes)}
            <main>
                <Form handleAdd={handleAdd} />
                <Quote quote={quote.quote} author={quote.author} />

                <button onClick={setRandomQuote}>Change quote</button>
            </main>

            <Footer text="My quotes app!" />
        </>
    );
}

export default App;
