import React from 'react'
import VideoContainer from './VideoContainer'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies==null)
        return;

    const mainMovie = movies[0];
    const { original_title, overview, id } = mainMovie;
    console.log(mainMovie);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoContainer movieId={id}/>
    </div>
  )
}

export default MainContainer
