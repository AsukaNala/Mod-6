import { useState } from "react";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState("");
  let display = firstNumber + " " + operator + " " + secondNumber;

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (operator) {
      case "+":
        setResult(firstNumber + secondNumber);
        break;
      case "-":
        setResult(firstNumber - secondNumber);
        break;
      case "*":
        setResult(firstNumber * secondNumber);
        break;
      case "/":
        setResult(firstNumber / secondNumber);
        break;
    }
  };

  const handleSetNumber = (e) => {
    let inputNumber = parseInt(e.target.value);
    if (e.target.name === "first") setFirstNumber(inputNumber);
    if (e.target.name === "second") setSecondNumber(inputNumber);
    setResult("");
  };

  return (
    <div className="Calculator componentBox">
      <form onSubmit={handleSubmit}>
        <h3>Result</h3>
        <h2 className="result">{result ? result : display}</h2>
        <div>
          <label>
            Number 1:{"  "}
            <input
              id="num1"
              type="number"
              name="first"
              value={firstNumber}
              onChange={handleSetNumber}
            />
          </label>
          {"    "}
          <label>
            Operator:{"  "}
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option>+</option>
              <option>-</option>
              <option>*</option>
              <option>/</option>
            </select>
          </label>
          {"    "}
          <label>
            Number 2:{"  "}
            <input
              id="num2"
              type="number"
              name="second"
              value={secondNumber}
              onChange={handleSetNumber}
            />
          </label>
          {"  "}
          <button>Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
