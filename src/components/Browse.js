import React from 'react';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useGetNowPlayingMovies } from '../hooks/useGetNowPlayingMovies';
import { useGetPopularMovies } from '../hooks/useGetPopularMovies';
import { useGetTopRatedMovies } from '../hooks/useGetTopRatedMovies';
import { useGetUpcomingMovies } from '../hooks/uspGetUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    useGetNowPlayingMovies();
    useGetPopularMovies();
    useGetTopRatedMovies();
    useGetUpcomingMovies();

    const isGPTSearchView = useSelector((state) => state.gpt.showGPTSearch);
  return (
    <div>
      <Header/>
      {isGPTSearchView && <GPTSearch/>}
      {!isGPTSearchView && (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
    </div>
  )
}

export default Browse