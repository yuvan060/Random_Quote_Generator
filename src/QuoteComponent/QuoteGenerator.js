import React, { useState } from "react";
import axios from "axios";
import "./styleQuote.css";
const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const generateRandomQuote = async () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = backgroundColor;
    setBackgroundColor(randomColor);
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setRandomQuote(response.data.content + " - " + response.data.author);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={generateRandomQuote}>
        Generate Quote
      </button>
      <p className="quote">{randomQuote}</p>
    </div>
  );
};

export default QuoteGenerator;
