function Greeting(props) {
  return (
    <div className="Greeting componentBox">
      <h1>
        Hello,
        {props.name ? props.name : "World."}
      </h1>
      <h2>{props.children}</h2>
    </div>
  );
}
{
  /* name="World" is default
function Greeting({name = 'World'}, children) {
  return (
    <h1>Hello, {name}!</h1>;
    {children}
  )
} */
}

export default Greeting;
