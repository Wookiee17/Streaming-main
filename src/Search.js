import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ setSelectedOption }) => {
    const [query, setQuery] = useState("");
    const [active, setActive] = useState(false);
 
    const animationOn = {
        opacity: "1",
        visibility: "visible",
        width: "250px",
    }
    const animationOff = {
        width: "0",
        visibility: "visible"
    }
    const searchOn = {
        cursor: "pointer",
        transition: "transform 1s",
        transform: "rotate(90deg)",
        opacity: "1"
    }
    const searchOff = {
        cursor: "pointer",
        transform: "rotate(-360deg)",
        transition: "transform 1",
    }
        const searchAnimate = () => {
                setActive(!active);
        }
        const searchMovies = e => {
            e.preventDefault();
            const API_KEY = "f4a9808382694381e00f172432bffd45";
            let fetchSearch = `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=true`
            setSelectedOption(fetchSearch);
        }
    return (
        <form className="search__form" onSubmit={searchMovies} >
            <div className="search__container" >
                <input type="search" placeholder="Search movies..." value={query} onChange={e => setQuery(e.target.value)} style={active ? animationOn : animationOff}/>
                <SearchIcon onClick={searchAnimate} style={active ? searchOn : searchOff} className="search__icon"/>
            </div>
        </form>
    )
}

export default Search;
