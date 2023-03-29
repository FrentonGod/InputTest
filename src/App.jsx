import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    input1:"",
    input2:"",
  });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  }

return (
  <div style={{textAlign: "center"}}>
    <h1>Input Test</h1>
    <hr />
    <label htmlFor="in1">Input1</label>
    <input
    id="in1"
    name="input1"
    onChange={(e) => handleInputChange(e)}
    placeholder="Este es el input1"
    type="text" 
    value={inputValue.input1}
    />
        <br />
    <label>
      Input2
      <input 
      name="input2"
      className="mt-2"
      onChange={(e) => handleInputChange(e)}
      placeholder="Este es el input2"
      type="text" 
      value={inputValue.input2}
      />
    </label>
    </div>
  )
}

export default App