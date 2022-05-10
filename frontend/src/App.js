import { useState } from 'react';
import './styles.css';
import BackgroundAnimate from './BackgroundAnimate.js';
import InputShortener from './InputShortener.js';
import LinkResult from './LinkResult.js';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue} />
      <BackgroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
