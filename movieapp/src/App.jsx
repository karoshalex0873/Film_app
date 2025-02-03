import Loader from "./components/Loader";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json", // Fix typo here
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMovie = async (query ='') => {

    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("failed to fetch movies");
      }

      const data = await response.json();

      if (data.response === "false") {
        setErrorMessage(data.Error || "Failed to fetch movies");
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);
    } catch (error) {
      console.error(`Error fetching movies: ${error.message}`); // Log the actual error message
      setErrorMessage("Error fetching movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <header className="text-center">
            <img src="./hero.png" />
            <h2 className="">
              Find {" "}
              <span className="text-gradient">Movies</span>
              {"  "}
              You'll Enjoy Without the Hassle
            </h2>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>
          <section className="all-movies">
            <h2 className="mt-[40]">All movies</h2>
            {isLoading ? (
              <div className="flex">
                <Loader />
              </div>
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie}/>
                ))}
              </ul>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default App;
