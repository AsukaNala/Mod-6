import { useState } from "react";

function Calculator2() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSetNumber = (e) => {
    let inputNumber = parseInt(e.target.value);
    if (e.target.name === "first") setFirstNumber(inputNumber);
    if (e.target.name === "second") setSecondNumber(inputNumber);
  };

  const handleAddNumbers = () => {
    setResult(firstNumber + secondNumber);
  };
  const handleSubtractNumbers = () => {
    setResult(firstNumber - secondNumber);
  };
  const handleMultiplyNumbers = () => {
    setResult(firstNumber * secondNumber);
  };
  const handleDivideNumbers = () => {
    setResult(firstNumber / secondNumber);
  };

  return (
    <div className="Calculator2 componentBox">
      <form onSubmit={handleSubmit}>
        <h3>Result</h3>
        <h2>{result}</h2>
        <label htmlFor="num1">
          First Number: {"   "}
          <input
            type="number"
            name="first"
            value={firstNumber}
            onChange={handleSetNumber}
          />
        </label>{" "}
        <label htmlFor="num2">
          Second Number: {"   "}
          <input
            type="number"
            name="second"
            value={secondNumber}
            onChange={handleSetNumber}
          />
        </label>{" "}
        <button onClick={handleAddNumbers}>Add </button> {"   "}
        <button onClick={handleSubtractNumbers}>Subtract</button> {"   "}
        <button onClick={handleMultiplyNumbers}>Multiply</button> {"   "}
        <button onClick={handleDivideNumbers}>Divide</button> {"   "}
      </form>
    </div>
  );
}

export default Calculator2;
