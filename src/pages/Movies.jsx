import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import Notiflix from 'notiflix';
import {
  SectionTitle,
  StyledSection,
  List,
  ListItem,
  StyledLink,
} from 'components/MovieList/MovieList.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }

    const getMovies = async () => {
      try {
        const { results } = await fetchMoviesBySearch(query);
        if (results.length === 0) {
          Notiflix.Notify.error('No movies found');
          setMovies([]);
        } else {
          setMovies(results);
        }
      } catch (error) {
        setMovies([]);
      }
    };

    getMovies();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <main>
      <StyledSection>
        <SectionTitle>Movies Page</SectionTitle>
        <SearchMovies onSubmit={handleSubmit} />{' '}
        {}
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id}>
              {}
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </StyledLink>
            </ListItem>
          ))}
        </List>
      </StyledSection>
    </main>
  );
};

export default Movies;
