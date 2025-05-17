export interface IMovieApi {
    id?: number;
    title?: string;
    original_title?: string;
    overview?: string;
    release_date?: string;
    poster_path?: string;
    backdrop_path?: string;
    genre_ids?: number[];
    original_language?: string;
    popularity?: number;
    vote_average?: number;
    vote_count?: number;
    adult?: boolean;
    video?: boolean;
    rate:number
    price?:number
    image?:string
  }
  