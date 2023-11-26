import { useState } from "react";

const phrases = new Map([
  ["english", "Happy Birthday"],
  ["german", "Alles Gute zum Geburtstag"],
  ["spanish", "Feliz Cumpleaños"],
  ["japanese", "Tanjohbi Omedetou"],
]);

{
  /*function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState("english");
  const [phrase, setPhrase] = useState(phrases.get("english"));

  const handleChangeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setPhrase(phrases.get(lang));
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrase}! ({currentLanguage})
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>

      <button onClick={() => handleChangeLanguage("japanese")}>Japanese</button>
    </div>
  );
}*/
}

{
  /*//unifying state(multiple related things are always updated together)

function BirthdayTranslator() {
  const [currentPhrase, setCurrentPhrase] = useState({
    lang: "english",
    phrase: "Happy Birthday",
  });

  const handleChangeLanguage = (newlang) => {
    setCurrentPhrase({ lang: newlang, phrase: phrases.get(newlang) });
  };
  //currentPhrase is object. that's why currrentPhrase.phrase, currentPhrase.lang. Look at L40-42
  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {currentPhrase.phrase}!{currentPhrase.lang}
      </h3>

      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>
      <button onClick={() => handleChangeLanguage("japanese")}>Japanese</button>
    </div>
  );
}*/
}

//avoid redundancy

function BirthdayTranslator() {
  const [currentLanguage, setCurrentLanguage] = useState("english");

  const handleChangeLanguage = (newLang) => {
    setCurrentLanguage(newLang);
  };

  return (
    <div className="BirthdayTranslator componentBox">
      <h3>
        {phrases.get(currentLanguage)}!{currentLanguage}
      </h3>
      <button onClick={() => handleChangeLanguage("english")}>English</button>

      <button onClick={() => handleChangeLanguage("german")}>German</button>

      <button onClick={() => handleChangeLanguage("spanish")}>Spanish</button>

      <button onClick={() => handleChangeLanguage("japanese")}>Japanese</button>
    </div>
  );
}
export default BirthdayTranslator;
