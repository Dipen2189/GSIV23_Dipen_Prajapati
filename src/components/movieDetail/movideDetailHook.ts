import { useState, useEffect } from "react";
import { APIDetail } from "../../contant";

interface MovieDetail {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
}

const useMovieDetail = (movieId: number) => {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchMovieDetail = async () => {
    setIsLoading(true);
    const apiKey = APIDetail.KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const movieDetailData: MovieDetail = {
        id: data.id,
        title: data.title,
        vote_average: data.vote_average,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.release_date,
      };
      setMovieDetail(movieDetailData);
    } catch (error) {
      console.error("Error fetching movie detail:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return { movieDetail, isLoading };
};

export default useMovieDetail;
