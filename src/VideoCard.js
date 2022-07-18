import React, { forwardRef } from 'react';
import PlayIcon from '@material-ui/icons/PlayArrow';
import StarIcon from '@material-ui/icons/StarRate';
import './VideoCard.css';
import { useEffect } from 'react';
import { useState } from 'react';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movieList, id }, ref) => {
    const [data, setData] = useState([]);
    const [YTkey, setYTkey] = useState("");
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=f4a9808382694381e00f172432bffd45`)
        .then(res => res.json())
        .then(data => {
                setData(data);
            })
            
    },[id])
    const playTrailer = () => {
        [data].map(el => 
            setYTkey(el.results[0].key)
        )
    }
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movieList.backdrop_path || movieList.poster_path}`=== "https://image.tmdb.org/t/p/original/null" ? "https://png.pngtree.com/thumb_back/fw800/back_our/20190617/ourmid/pngtree-colorful-film-shooting-poster-background-material-image_130221.jpg" : `${base_url}${movieList.backdrop_path || movieList.poster_path}`} alt="videocard"/>
            <div className="movie__info">
                <a href={`https://www.youtube.com/watch?v=${YTkey}`} target="_blank" rel="noopener noreferrer"><PlayIcon onClick={playTrailer}/></a>
                <div className="movie__details">
                    <h2>{movieList.title || movieList.original_title || movieList.name || movieList.original_name}</h2>
                    <p className="movie__summary">{movieList.overview}</p>
                    <p><StarIcon style={{color: "orange"}}/> {movieList.vote_average}</p>
                </div>
            </div>
        </div>
    )
});

export default VideoCard
