import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const VideoContainer = ({ movieId }) => {
    const dispatch = useDispatch();

    const fetchMovieTrailer = async () => {
        const movieData = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const jsonMovieData = await movieData.json();
        console.log(jsonMovieData.results);
        const trailerData = jsonMovieData?.results?.filter((data) => data.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : jsonMovieData?.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        fetchMovieTrailer();
    }, []);

    const trailer = useSelector((state) => state.movies?.trailerVideo);

    return (
        <div>
            <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/LH1J1EbqCaI?si=${trailer?.key}&autoplay=1&mute=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoContainer
