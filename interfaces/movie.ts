export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  tagline: string;
  release_date: string;
  runtime?: number ;
  vote_average: number;
  vote_count: number;
  poster_path: string;
  backdrop_path: string;
  homepage: string;
  budget: number;
  revenue: number;
  genres: Genre[];
  production_companies: ProductionCompany[];
  spoken_languages: SpokenLanguage[];
  original_language: string;
  origin_country: string[];
  status: string;
  imdb_id: string;
  popularity: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  name: string;
}

interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}