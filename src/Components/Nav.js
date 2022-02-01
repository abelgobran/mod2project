import React from "react";
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <nav>
            <h1>navbar</h1>
            <ul>
                <Link to='SearchMovieinfo'>
                    <li>Movie Info</li>
                </Link>


                <Link to='SearchOMDBapi'>
                    <li>Omdb</li>
                </Link>

                <Link to='SearchMusic'>
                    <li>GetAudio</li>
                </Link>

            </ul>
        </nav>
    )
}

export default Nav