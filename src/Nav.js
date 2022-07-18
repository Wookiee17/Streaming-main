import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import requests from './requests';

function Nav({ setSelectedOption }) {
  
    return (
        <div className="nav">
            {/* <Link to="/" >
                <h2  onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>TopRated</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>Action</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>SciFi</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            </Link>
            <Link to="/" >
                <h2 onClick={() => setSelectedOption(requests.fetchTV)}>Movies</h2>
            </Link> */}
            
        </div>
    )
}

export default Nav
