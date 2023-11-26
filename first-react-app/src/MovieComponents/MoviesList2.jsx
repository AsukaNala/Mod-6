import { useState } from "react";
import Movie from "./Movie";
import AddMovieForm from "./AddMovieForm";
function MoviesList2() {
  const movies = [
    {
      id: 1, // items in data collections need unique IDs
      title: "The Shawshank Redemption",
      year: 1994,
      synopsis: "Two imprisoned men find redemption.",
    },
    {
      id: 2,
      title: "The Dark Knight",
      year: 2008,
      synopsis: "Batman fights the menace known as the Joker.",
    },
    {
      id: 3,
      title: "Interstellar",
      year: 2014,
      synopsis: "Explorers travel through a wormhole in space.",
    },
  ];

  const [currentMovies, setCurrentMovies] = useState(movies);

  const movieItems = currentMovies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
  ));

  const handleReverseMovies = () => {
    //first clone the original, otherwise the original will change too
    let newMovies = [...currentMovies];
    newMovies.reverse(); //and then modify the clone
    setCurrentMovies(newMovies);
  };

  const handleAddMovie = (newMovie) => {
    newMovie.id = currentMovies.length + 1; // unreliable but succinct
    setCurrentMovies([...currentMovies, newMovie]);
  };

  const handleResetMovie = () => {
    setCurrentMovies(movies);
  };

  return (
    <div className="MoviesList componentBox">
      <ul>{movieItems}</ul>
      <button onClick={handleReverseMovies}>Reverse List</button>
      {"   "}
      <button onClick={handleResetMovie}>Reset</button>
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default MoviesList2;
