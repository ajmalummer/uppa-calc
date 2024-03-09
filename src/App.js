import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [inputNumber, setInputNumber] = useState("");
  const [tax, setTax] = useState("");
  const [percentage, setPercentage] = useState("add");
  const [changablePercentage, setChangablePercentage] = useState("");
  const [grandTotal, setGrandTotal] = useState("0");

  useEffect(() => {
    if (percentage === "add") {
      setGrandTotal(inputNumber / (1 - `0.${changablePercentage}`));
    }

    if (percentage === "sub") {
      setTax(inputNumber * `0.${changablePercentage}`);
      setGrandTotal(inputNumber - tax);
    }
  }, [inputNumber,percentage,tax]);
  return (
    <div className="App">
      <div className="wrapper">
        <Display
          inputNumber={inputNumber}
          percentage={percentage}
          grandTotal={grandTotal}
        />
        <Form
          inputNumber={inputNumber}
          setInputNumber={setInputNumber}
          percentage={percentage}
          setPercentage={setPercentage}
          changablePercentage={changablePercentage}
          setChangablePercentage={setChangablePercentage}
        />
      </div>
    </div>
  );
}

export default App;
