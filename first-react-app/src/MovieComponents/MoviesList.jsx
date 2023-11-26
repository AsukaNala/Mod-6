import Movie from "./Movie";

function Movielist() {
  // collection of objects representing movies
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
  {
    /* return (
     <div className="MovieList componentBox">
       <ul>
         {movies.map((movie) => (
           <li>{movie.title}</li>
         ))}
       </ul>
     </div>
   );
  */
  }
  {
    /*const movieItems = movies.map((movie) => (
    <li key={movie.id}>{movie.title}</li> // key prop is required for lists
  ));
  return (//dont use key here. rendering affects.
    <div className="MovieList componentBox">
      <ul>{movieItems}</ul>
    </div>
  );*/
  }

  const movieItems = movies.map((movie) => (
    <Movie
      key={movie.id}
      title={movie.title}
      year={movie.year}
      synopsis={movie.synopsis}
    />
    // can also destructure movie into individual props
    // <Movie key={movie.id} {...movie}/>
  ));
  return (
    <div className="MovieList componentBox">
      <ul>{movieItems}</ul>
    </div>
  );
}

export default Movielist;
