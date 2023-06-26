import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2ZlNjZmODQ2ODY0NTcyOGJkNTc1NTU5NzA2MzU4MCIsInN1YiI6IjY0NmI1YWQ0NTc1MzBlMDc4YTYwYjg0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.77BNSp7nhi6f7nhX6ra_rQ4Eu8XhNfiU2hzPz-jr5Ks';


const api = axios.create({

    baseURL: API_BASE_URL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`
        }
});


export default api;


// import axios from "axios";

// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };
// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   https: config,
// });

// export default instance;



// const API_KEY = here goes my api key;

// export default {
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
//     fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
//     fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
//     fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
//     fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
// }