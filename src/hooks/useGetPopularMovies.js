import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";

export const useGetPopularMovies = () => {
const dispatch = useDispatch();

  useEffect(()=> {

    const getMoviesData = async () => {
      try{
        const movie = await fetch('https://api.themoviedb.org/3/movie/popular?page=2', API_OPTIONS);
        const jsonMovie = await movie.json();
        dispatch(addPopularMovies(jsonMovie.results));
        console.log(jsonMovie);
      }
      catch(error){
        console.log("Error in fetching movies data");
      }
    }
    getMoviesData();
  },[]);
}