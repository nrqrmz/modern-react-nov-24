import Footer from './components/Footer';
import Header from './components/Header';
import Quote from './components/Quote';
import Form from './components/Form';
import data from './data.json';
import './App.css';

import { useState } from 'react';

function App() {
    const [quote, setQuote] = useState(data[0]);

    const setRandomQuote = () => {
        const randomNumber = Math.floor(Math.random() * data.length);
        setQuote(data[randomNumber]);
    };

    return (
        <>
            <Header />

            <main>
                <Form />
                <Quote quote={quote.quote} author={quote.author} />

                <button onClick={setRandomQuote}>Change quote</button>
            </main>

            <Footer text="My quotes app!" />
        </>
    );
}

export default App;
