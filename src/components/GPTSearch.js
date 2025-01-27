import React from 'react';
import GPTSearchbar from './GPTSearchbar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';

const GPTSearch = () => {
  return (
    <div>
        <div>
        <img className='absolute opacity-80' src={BG_IMAGE}
        alt="logo"
        />
      </div>
      <GPTSearchbar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
