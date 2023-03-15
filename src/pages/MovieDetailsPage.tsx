import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Spinner } from '../components';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MoviesResult } from '../types';
import { useParams } from 'react-router-dom';

// TODO: Improve this page to avoid fetching data again and use the same data from MoviesPage
const BASE_URL = process.env.REACT_APP_LIST_URL;
const API_KEY = process.env.REACT_APP_MOVIES_API_KEY;
const IMAGES_BASE_URL = process.env.REACT_APP_IMAGES_BASE_URL;

export const MovieDetailsPage: React.FC = () => {
  const params = useParams();
  // TODO: Improve this component to avoid fetching data again
  const { data, isFetching } = useFetchMovies(
    `${BASE_URL}/list/1?sort_by=vote_average.desc&&api_key=${API_KEY}`
  );

  const [filteredMovie, setFilteredMovie] = useState<MoviesResult | undefined>(data?.results[0]);

  useEffect(() => {
    if (params && params.id) {
      const filteredResults = data?.results.find((i: MoviesResult) => {
        return String(i.id) == params.id;
      });
      setFilteredMovie(filteredResults);
    }
  }, [data?.results]);

  return (
    <div>
      {isFetching ? (
        <Spinner visible={isFetching} />
      ) : (
        <>
          <Link to="/">
            <button className="mt-10 ml-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Back to Movies
            </button>
          </Link>
          <h1 className="text-center font-medium text-4xl text-black">Movie Details</h1>
          <div className="mt-10 grid gap-5 grid-cols-5 ml-0 sm:ml-6">
            <MovieCard
              key={filteredMovie?.id}
              className="transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-100 duration-300 align-middle content-center max-w-xs p-2 rounded overflow-hidden shadow-lg bg-white"
              imageSrc={`${IMAGES_BASE_URL}/${filteredMovie?.poster_path}`}
              title={filteredMovie?.title}
              description={filteredMovie?.overview}
              showDetails={true}
            />
          </div>
        </>
      )}
    </div>
  );
};
