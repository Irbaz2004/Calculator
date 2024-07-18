import React from "react";
import { useState } from "react";

export default function Calculate() {
  const [val, setVal] = useState("");

  const handle =(e)=>{
    setVal(e.target.value)

  }
  return (
    <>
      <div className="container d-flex flex-column">
        <div className="Name fs-2 text-light text-center">
        iRuzCalc
        </div>

        <div className="input-field">
          <input type="text" className="result" onChange={handle} value={val} />
        </div>
        <div className="buttons">
          <button className="Ac" onClick={() => setVal("")}>A</button>
          <button  className="unique" onClick={() => setVal(val.slice(0, -1))}>D</button>
          <button  className="unique" onClick={() => setVal("")}>X</button>
          <button className="unique" onClick={() => setVal(val + "%")}>%</button>
        </div>
        <div className="buttons">
          <button  onClick={() => setVal(val + "7")}>7</button>
          <button  onClick={() => setVal(val + "8")}>8</button>
          <button  onClick={() => setVal(val + "9")}>9</button>
          <button className="unique"  onClick={() => setVal(val + "/")}>/</button>
        </div>
        <div className="buttons">
          <button onClick={() => setVal(val + "4")}>4</button>
          <button onClick={() => setVal(val + "5")}>5</button>
          <button onClick={() => setVal(val + "6")}>6</button>
          <button className="unique" onClick={() => setVal(val + "*")}>*</button>
        </div>
        <div className="buttons">
          <button onClick={() => setVal(val + "1")}>1</button>
          <button onClick={() => setVal(val + "2")}>2</button>
          <button onClick={() => setVal(val + "3")}>3</button>
          <button className="unique" onClick={() => setVal(val + "-")}>-</button>
        </div>
        <div className="buttons">
          <button onClick={() => setVal("0")}>0</button>
          <button  onClick={() => setVal(val + ".")}>.</button>
          <button className="equal" onClick={() => setVal(eval(val))}>=</button>
          <button className="unique" onClick={() => setVal(val + "+")}>+</button>
        </div>
        
      </div>
    </>
  );
}
