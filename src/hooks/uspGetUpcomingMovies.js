import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

export const useGetUpcomingMovies = () => {
const dispatch = useDispatch();

  useEffect(()=> {

    const getMoviesData = async () => {
      try{
        const movie = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=2', API_OPTIONS);
        const jsonMovie = await movie.json();
        dispatch(addUpcomingMovies(jsonMovie.results));
        console.log(jsonMovie);
      }
      catch(error){
        console.log("Error in fetching movies data");
      }
    }
    getMoviesData();
  },[]);
}