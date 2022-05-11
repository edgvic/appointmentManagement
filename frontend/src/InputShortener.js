import { useState } from "react"
import { Button } from '@mui/material';

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1><span>Shortly</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleClick}>
          shorten
        </Button>
      </div>
    </div>
  )
}

export default InputShortener