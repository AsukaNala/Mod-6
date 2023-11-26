const spiderman = {
  name: "Spiderman",
  alterEgo: "Peter Parker",
  catchPhrase: "With great power comes great responsibility",
};
const SpideyJSX = () => {
  return (
    <>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </>
  );
};

export default SpideyJSX;
