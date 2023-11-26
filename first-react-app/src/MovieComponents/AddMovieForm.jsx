import { useState } from "react";

function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie({ title, year, synopsis });
  };

  return (
    <div className="AddMovieForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Movie Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Year Released:
          <input
            type="number"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label>
          Sypnosis:
          <input
            type="text"
            name="sypnosis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </label>

        <button>Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
//what does it do? = when the new movie information is added in form and clicked AddMovie, handleSubmit is called. then onAddMovie is called with props(movie data from parent. )onAddMovie is also function to get data from its pararent
