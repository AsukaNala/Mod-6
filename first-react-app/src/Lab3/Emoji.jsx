import { useState } from "react";
function Emoji() {
  const [emoji, setEmoji] = useState("😀");

  const handleEmoji = () => {
    let newEmoji = "😀";
    if (emoji === "😀") newEmoji = "😝";
    else if (emoji === "😝") newEmoji = "😍";
    //let newEmoji = emoji === "😀"? "😝""😍";

    setEmoji(newEmoji);
  };

  return (
    <div className="Emoji componentBox">
      <h3>What's your mood?</h3>
      <p>{emoji}</p>
      <button onClick={handleEmoji}>Change Emoji</button>
    </div>
  );
}

export default Emoji;
