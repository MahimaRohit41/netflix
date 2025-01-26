import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

export const useGetTopRatedMovies = () => {
const dispatch = useDispatch();

  useEffect(()=> {

    const getMoviesData = async () => {
      try{
        const movie = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=2', API_OPTIONS);
        const jsonMovie = await movie.json();
        dispatch(addTopRatedMovies(jsonMovie.results));
        console.log(jsonMovie);
      }
      catch(error){
        console.log("Error in fetching movies data");
      }
    }
    getMoviesData();
  },[]);
}