import React, { useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieSearch = ()=>{
    const [query,setQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const handleSearch = async () => {
        const apiKey = 'ce18c2f6';
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
        console.log(response.data);
        if(response.data) setMovies([...movies,response.data])
    }
    return(
        <div className="container">
            <div class = "First">
        <h1> Movies Search </h1>
        
        <input type="text" placeholder= "Please Search A Movie"
        value = {query}
        onChange={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
        </div>
        <h2>Movie Is Ready To Watch</h2>
        <ul>
            {
            // movies.map((movie) => (<li key = {movie.Title}>{movie.Title} = {movie.imdbRating}</li>))
            
            movies.map((movie) => (
                <MovieCard movie = {movie}/>
            ))
            }
        </ul>
        <div>
            Movies Is Watched
        </div>
        </div>
        

    )
}
export default MovieSearch;