import { useState } from "react";
import ExplodingBomb from "./ExplodingBomb";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Welcome from "./Welcom";
import SpideyJSX from "./Spidey";
import PropsDisplayer from "./PropsDisplayer";
import City from "./City";
import Address from "./Address";
import Greeting from "./Lab1/Greeting";
import Pet from "./Pet";
import FullName from "./Fullname";
import ComplexComment from "./CommentComponents/ComplexComment";
import Comment from "./CommentComponents/Comment";
import Callout from "./Callout";
import Movielist from "./MovieComponents/MoviesList";
import BigCats from "./Lab2/BigCats";
import MoodChanger from "./MoodChanger";
import Emoji from "./Lab3/Emoji";
import BirthdayTranslator from "./BirthdayTranslator";
import Weather from "./WeatherComponents/Weather";
import MoviesList2 from "./MovieComponents/MoviesList2";
import BigCats2 from "./Lab4-5/BigCats2";
import LoginForm from "./LoginForm";
import Calculator from "./Lab6/Calculator";
import Calculator2 from "./Lab6/Calculator2";

import "./App.css";

// object storing comment data - passed as props
const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    // author is also an object
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Greeting name="Asuka">
        <p>It's tooooooo hot today...</p>
      </Greeting>
      <ExplodingBomb />
      <Calculator2 />
      <Calculator />
      <LoginForm />
      <BigCats2 />
      <MoviesList2 />
      <Weather />
      <BirthdayTranslator />
      <Emoji />
      <MoodChanger />
      <BigCats />
      <Movielist />
      <Callout
        title="Nested React Component"
        message="Simple message with a fancy box applied via composition"
      >
        <FullName first="Elon" last="Musk" />
      </Callout>
      <Comment
        date={comment.date}
        author={comment.author}
        text={comment.text}
      />
      <ComplexComment
        date={comment.date}
        author={comment.author}
        text={comment.text}
      />
      <FullName first="Asuka" middle="Akahoshi" last="Matoba" />
      <Pet type="cat" name="Nala" colour="tabby" />
      <Address no={80} street="High Street" surburb="South Fremantle" />
      <City name="Perth" state="WA" country="Aus">
        <div>
          Newcastle is a harbour city in the Australian state of New South
          Wales.
        </div>
        <div>
          <strong>Population:</strong> 322,278 (2016)
        </div>
      </City>
      {/* If it's not specified, default values are used*/}
      <PropsDisplayer
        name="Asuka"
        age={39}
        from="Japan"
        pets={["cat", "dog", "goldfish"]}
      />
      <PropsDisplayer reactLogo={reactLogo} buttonCount={count} />
      {/* String prop value uses quotes, numeric prop value uses curly braces */}
      {/* Array prop value - uses curly braces */}
      {/* Variable prop values - uses curly braces */}
      <Welcome name="Asuka!">
        <p>Children of Welcome</p>
      </Welcome>
      <ExampleComponent />
      <SpideyJSX />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
