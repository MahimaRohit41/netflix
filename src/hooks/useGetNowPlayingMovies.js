import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

export const useGetNowPlayingMovies = () => {
const dispatch = useDispatch();

  useEffect(()=> {

    const getMoviesData = async () => {
      try{
        const movie = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const jsonMovie = await movie.json();
        dispatch(addNowPlayingMovies(jsonMovie.results));
        // console.log(jsonMovie);
      }
      catch(error){
        console.log("Error in fetching movies data");
      }
    }
    getMoviesData();
  },[]);
}