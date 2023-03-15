import { useState, useEffect } from 'react';
import { MoviesData } from '../types';

export const useFetchMovies = (url: string) => {
  const [data, setData] = useState<MoviesData>();
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsFetching(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            // console.log('fetch aborted');
          } else {
            setIsFetching(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);

  return { data, isFetching, error };
};
