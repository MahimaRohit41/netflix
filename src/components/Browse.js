import React, { useEffect } from 'react';
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(()=> {

    const getMoviesData = async () => {
      try{
        const movie = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const jsonMovie = await movie.json();
        dispatch(addNowPlayingMovies(jsonMovie.results));
        console.log(jsonMovie);
      }
      catch(error){
        console.log("Error in fetching movies data");
      }
    }
    getMoviesData();
  },[]);
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse