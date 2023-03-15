export type MoviesResult = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  media_type: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MoviesData = {
  average_rating: number;
  backdrop_path: string;
  comments: [key: number];
  created_by: {
    gravatar_hash: string;
    id: string;
    name: string;
    username: string;
  };
  description: string;
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  object_ids: [key: number];
  page: number;
  poster_path: string;
  public: boolean;
  results: MoviesResult[];
  revenue: number;
  runtime: number;
  sort_by: string;
  total_pages: number;
  total_results: number;
};
