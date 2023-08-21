import { useState, useEffect } from "react";
import { APIDetail } from "../../contant";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
}

const useMovieList = (search?: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMovies = async (page: number) => {
    setIsLoading(true);
    const apiKey = APIDetail.KEY;
    let apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}`;

    if (search) {
      apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const newMovies: Movie[] = data.results;

      // Sort movies by release date in descending order (latest first)
      newMovies.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());

      if (search) {
        setMovies(newMovies);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setCurrentPage(page)
      };
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      fetchMovies(currentPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return { movies, isLoading };
};

export default useMovieList;
