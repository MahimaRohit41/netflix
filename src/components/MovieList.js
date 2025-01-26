import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-6 pb-0'>
        <h1 className='text-white text-xl pb-2'>{title}</h1>
        <div className='flex overflow-x-auto'>
        <div className='flex'>
            {
                movies?.map((movie) => (
                    <MovieCard posterPath={movie.poster_path}/>
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default MovieList
