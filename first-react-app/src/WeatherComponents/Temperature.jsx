import { useState } from "react";
function Temperature({ temp, units = "C" }) {
  const [currentUnits, setCurrentUnits] = useState(units);
  const handleUnits = () => {
    setCurrentUnits((prevUnits) => (prevUnits === "C" ? "F" : "C"));
  };
  //props to lift up to Weather.'C' is default value
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32; //convert to Fahrenheit if units is F (or not C)

  return (
    <span className="Temperature">
      <strong>
        {parseInt(displayTemp)}&deg;{currentUnits}
      </strong>
      <button onClick={handleUnits}>Choose Units</button>
    </span>
  );
}

export default Temperature;
