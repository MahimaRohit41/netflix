import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies';
import { useGetPopularMovies } from '../hooks/useGetPopularMovies';
import { useGetTopRatedMovies } from '../hooks/useGetTopRatedMovies';
import { useGetUpcomingMovies } from '../hooks/uspGetUpcomingMovies';

const Browse = () => {
    useGetNowPlayingMovies();
    useGetPopularMovies();
    useGetTopRatedMovies();
    useGetUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse