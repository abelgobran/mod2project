import React, { useState } from "react";
import axios from "axios";

function Api2() {
    

    const [apiData, setapiData] = useState([])
    const [searchInfo, setSearchInfo] = useState('')
    const [serviceProvider,setServiceProvider]=useState('')

    const handleChange = (e) => { const targetinfo = e.target.value; setSearchInfo(targetinfo) 

//     setServiceProvider({ ...serviceProvider, [choice]: value })
 }

    const handleEnter = (e) => {
        if (e.key == 'Enter') { FetchMovies(searchInfo) }
    }

    const FetchMovies = () => {
        const options = {
            method: 'GET',
            url: 'https://streaming-availability.p.rapidapi.com/search/basic',
            params: {
                country: 'us',
                service: {searchInfo},
                type: 'movie',
                genre: '18',
                page: '1',
                output_language: 'en',
                language: 'en'
            },
            headers: {
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com',
                'x-rapidapi-key': '825986eacfmshbc25a9323ddf210p13a23ajsnbc487986ec1a'
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setapiData(response.data)
        }).catch(function (error) {
            console.error(error);
        })
    }

    return (
        <div>

            <h3>Select a Service :</h3>
            <form>
                <input type='radio' id='netflix' name="service" value="netlfix" onChange={handleChange} />
                <label htmlFor='netlfix'>Netlfix</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Prime" onChange={handleChange} />
                <label htmlFor='Prime'>Prime</label><br></br>
                <input type='radio' id='inputForm' name="service" value="HBO" onChange={handleChange} />
                <label htmlFor='HBO'>HBO</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Hulu" onChange={handleChange} />
                <label htmlFor='Hulu'>Hulu</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Peacock" onChange={handleChange} />
                <label htmlFor='Peacock'>Peacock</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Paramount" onChange={handleChange} />
                <label htmlFor='Paramount'>Paramount</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Starz" onChange={handleChange} />
                <label htmlFor='Starz'>starz</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Showtime" onChange={handleChange} />
                <label htmlFor='Showtime'>Showtime</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Apple" onChange={handleChange} />
                <label htmlFor='Apple'>Apple</label><br></br>
                <input type='radio' id='inputForm' name="service" value="Mubi" onChange={handleChange} />
                <label htmlFor='Mubi'>Mubi</label><br></br>
                <p>service:{serviceProvider.service}</p>
            </form>

            <div>
                <input type='text' name="title" placeholder="Enter a Movie Title" value={setSearchInfo} onChange={handleChange} onKeyPress={handleEnter} ></input>
                <button onClick={FetchMovies}>Search</button>
            </div>
            <div>{apiData.map((movie, index) => {
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
                        </ul>
                    </div>
                )
            })}</div>

        </div>
    )
}
export default Api2

