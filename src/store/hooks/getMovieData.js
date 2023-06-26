import { useQuery } from 'react-query';
import api from '../api/api';

export const getMovieData = async () => {
  try {
    const response = await api.get('/discover/movie', {
      params: {
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc',
      },
    });
    return response.data.results;
  } catch (error) {
    throw new Error("Error fetching movie data")
    //console.error(error);
  }
};

export const useGetMovieData = () => {
  return useQuery('movieData', getMovieData )
};


