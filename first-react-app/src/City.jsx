// add this to a new file City.jsx in the components folder
// destructures props object into 3 variables, two with defaults
function City({ name, state = "NSW", country = "Australia", children }) {
  return (
    <div className="City componentBox">
      <strong>{name}</strong> is in {state}, {country}
      {children}
      {/* need this{children} line otherwise App.jsx doesn't render children object */}
    </div>
  );
}

{
  /* or 
 function City(props){
  const {name, state="NSW", country="Australia"} = props;
  return(
    <div className='City componentBox'>
    <strong>{name}</strong> is in {state}, {country}
    </div>
  );
 }  does the same thing*/
}

export default City;
