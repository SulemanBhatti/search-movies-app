import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Spinner } from '../components';
import { SearchBar } from '../components/SearchBar';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MoviesResult } from '../types';

const BASE_URL = process.env.REACT_APP_LIST_URL;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const IMAGES_BASE_URL = process.env.REACT_APP_IMAGES_BASE_URL;

export const MoviesPage: React.FC = () => {
  //TODO: Improve this hook and we can add pagination
  const { data, isFetching } = useFetchMovies(
    `${BASE_URL}/list/1?sort_by=vote_average.desc&&api_key=${API_KEY}`
  );
  const [value, setValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MoviesResult[] | undefined>(data?.results);

  useEffect(() => {
    setSearchResults(data?.results);
  }, [data?.results]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const filteredResults = data?.results.filter((i: MoviesResult) => {
      return i.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  //TODO: Repsonsive design is added but it should be improved
  return (
    <>
      {isFetching ? (
        <Spinner visible={isFetching} />
      ) : (
        <div className="bg-gray-600">
          <h1 className="text-center pt-4 font-medium text-xl text-gray-50">Movies Search</h1>
          <SearchBar
            className="font-sans text-black flex items-center justify-center pt-4"
            handleChange={handleChange}
            value={value}
          />
          {searchResults?.length ? (
            <div className="sm:mt-10 sm:grid sm:gap-5 sm:grid-cols-5 ml-10 mt-5 sm:ml-6">
              {searchResults?.map((i: MoviesResult) => {
                return (
                  <Link key={i.id} to={`/movie/${i.id}`}>
                    <MovieCard
                      className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-100 duration-300 align-middle content-center max-w-xs p-2 rounded overflow-hidden shadow-lg bg-white"
                      imageSrc={`${IMAGES_BASE_URL}/${i.poster_path}`}
                      title={i.title}
                      description={i.overview}
                      showDetails={false}
                    />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center pt-4 font-medium text-xl text-gray-50">
              No results found
            </div>
          )}
        </div>
      )}
    </>
  );
};
