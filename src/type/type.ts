import { ReactNode } from 'react';

export interface CommonProps {
    children: ReactNode;
}
// Header section
export interface HeaderProps extends CommonProps{
    bg: boolean;
}

export interface HeaderSearchProps {
    searchTerm: string;
    setSearchTerm: Function;
}

export interface HeaderLogoProps {
    to: string;
}

export interface PictureProps {
    src: string;
}
// jumbotron section

export interface JumbotronProps extends CommonProps{
    direction: string;
}

export type MediaType = 'tv' | 'movie';

export interface Show {
  adult: boolean;
  backdrop_path: string | null;
  media_type: MediaType;
  budget: number | null;
  homepage: string | null;
  showId: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string | null;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  release_date: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  name: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

