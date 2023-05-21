import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';
import LoadingIndicator from 'components/Layout/LoadingIndicator';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        setError(true); 
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      {isLoading && <LoadingIndicator />}
      {}
      {error ? (
        <p>
          Sorry, we could not fetch the trending movies. Please try again later.
        </p>
      ) : (
        <MovieList trendingMovies={trendingMovies} />
      )}

    </>
  );
};

export default Home;
