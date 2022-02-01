import React, { useState } from "react";
import axios from "axios";

function OmdbAPI() {

    // http://www.omdbapi.com/?i=tt3896198&apikey=e17ecc6a

    const url = ('http://www.omdbapi.com/?')

    const apiKey = 'apikey=e17ecc6a'
    const [movieTitle, setMovieTitle] = useState('')
    const title = 't=' + movieTitle + '&'
    console.log(url + title + apiKey)
    const [movies, setMovies] = useState([])


    const getmovies = () => {
        axios.get(url + title + apiKey)

            .then(response => {
                console.log(response);
                setMovies([response.data])
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(movies);
    return (
        <div>
            <div>
                <input type='text' name="title" placeholder="Enter a Movie Title" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)}></input>
                <button onClick={getmovies}>Search</button>
                <div>{movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <img src={movie.Poster}></img>
                            <ul>
                                <li>Title: {movie.Title}</li>
                                <li>Year: {movie.Year}</li>
                                <li>Actors: {movie.Actors}</li>
                                <li>Awards: {movie.Awards}</li>
                                <li>DVD release: {movie.DVD}</li>
                                <li>Director: {movie.Director}</li>
                                <li>Genre: {movie.Genre}</li>

                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    )
                })}</div>

            </div>
        </div>

    )
}
export default OmdbAPI
