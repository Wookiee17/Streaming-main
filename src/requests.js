const API_KEY = "f4a9808382694381e00f172432bffd45";

export default {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,
    fetchPopularMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=true`,
    fetchPopularShows: `/tv/popular?api_key=${API_KEY}&language=en-US&include_adult=false&include_video=true`,
    
}