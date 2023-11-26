import { useState } from "react";
// using build-in form component <input><select><textarea> = controlled form in state by React.
function LoginForm() {
  //input state values always to be strings -empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  {
    /*const showEvent = (e) => {
  console.log(e.target.value);*/
  }

  // const handleEmail = (e) => {
  //   setUserEmail(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
  };

  return (
    <div className="LoginForm, componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange. onChange handler uses event param e to access target value. Whenever user types, new value is stored in state.it's synchromously real-time. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)} //as it is in return block this renders more extras because of (e). so another way L9 there(function outside of return block passed to props) is better
              //onChange={showEvent} and coment out value={userEmail}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)} //without onChange, users can't type in a field. Because value={userPassword}='' initially. so it's empty.
            />
          </label>
        </div>

        {/* same form code as previously, BUT now includes <form> and <button> */}
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;

//Form tips.
//Provide a label for each input- important for useability and accessibility

//Provide an initial value for each input - either with value or defaultValue or <input type="text" placeholder="お名前を入力してください">

//Provide a name for each input - helps when processing form dat together

//use a <form> element with an onSubmit handler function to process the form value when the form is submitted

//Any buttoni nside <form> will submit the form, unless you give it type="button"

//controlled form elements keep the value in state. but everytime the value change(each typing) it occures render. Expensive!
//uncontrolled form = normal HTML DOM. not tracking each change. until it's submitted it doesn't render.
