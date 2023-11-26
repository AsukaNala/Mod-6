// useState is a React hook
import { useState } from "react";

function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log(mood);
  };

  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";

    setMood(newMood);
  };

  const handleCat = () => {
    let newMood = "Ohhhh!";
    if (mood === "Ohhhh!") newMood = "Wanna pat";
    else if (mood === "Wanna pat") newMood = "Wanna take it home";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={() => setMood("hungry")}>Skip Lunch</button>
      <button onClick={() => setMood("Thanks God")}>It's Friday</button>
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
      <button onClick={handleCat}>Meet a cat</button>
    </div>
  );
}

export default MoodChanger;
