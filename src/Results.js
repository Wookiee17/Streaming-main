import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    }, [selectedOption]);

    return (
        <div className="results">
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.id} id={movie.id} movieList={movie}/>
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Results ;
