// To test if the Error Boundary works
import { useState } from "react";

function Bomb() {
  throw new Error(" KABOOM ");
}

function ExplodingBomb() {
  const [exploded, setExploded] = useState(false);

  return (
    <div className="ExplodingBomb componentBox">
      <button onClick={() => setExploded(!exploded)}>
        DANGER: Click to explode bomb!
      </button>

      {/* Renders the Bomb conditionally, depending on state */}
      {exploded && <Bomb />}
    </div>
  );
}

export default ExplodingBomb;
