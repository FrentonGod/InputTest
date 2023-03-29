import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div style={{textAlign: "center"}}>
    <h1>Input Test</h1>
    <hr />
    <input 
    onChange={(e) => handleInputChange(e)}
    type="text" 
    value={inputValue}
    />
    </div>
  )
}

export default App
