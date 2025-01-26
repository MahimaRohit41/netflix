import React from 'react'
import { MOVIE_IMAGE } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36 mr-4'>
      <img src={MOVIE_IMAGE + posterPath} alt="Movie card"/>
    </div>
  )
}

export default MovieCard
