import React, { useRef } from 'react'
import openai from '../utils/openAI';

const GPTSearchbar = () => {
  const searchText = useRef(null);
  const handleSearchClick = async () => {
    //Make a API call to GPT
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    console.log(gptResults);
  };

  return (
    <div className='pt-[10%] flex justify-center relative z-20'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}> 
        <input ref={searchText} className='bg-white p-4 m-4 col-span-9 ' type='text' placeholder='What would you like to watch today?'/>
        <button className='py-2 px-4 m-4 text-white bg-red-700 rounded-md col-span-3' onClick={handleSearchClick}>Search</button>
      </form>
    </div>
  )
}

export default GPTSearchbar
