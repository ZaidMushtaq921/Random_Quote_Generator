import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'

const App = () => {
  const [advice, setAdvice] = useState("");
  

  useEffect(  () => {
    fetchQuote();
  }, []);

  const handleNewQuote = async () => {
    await fetchQuote();
  };

  const fetchQuote = async () => {
    const data = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(data.data.slip.advice);
  };
  let content;
  if (advice !== "") {
    content = <h1>{advice}</h1>;
  } else {
    content = <h1>Loading...</h1>;
  }

  return (
    <div className="container">
    {content}
<button class="cta" onClick={handleNewQuote}>
  <span>Get Next Advice</span>
  <svg width="15px" height="10px" viewBox="0 0 13 10">
    <path d="M1,5 L11,5"></path>
    <polyline points="8 1 12 5 8 9"></polyline>
  </svg>
</button>

    </div>
  );
};

export default App;
