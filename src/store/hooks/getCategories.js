import { useQuery } from 'react-query'; 
import api from '../api/api';

export const getCategories = async () => {
  try {
    const response = await api.get('/genre/movie/list', {
      params: {language: 'en'},
    });
    return response.data.genres;
  } catch (error) {
    throw new Error("Error fetching categories")
    //console.error(error);
  }
};

export const useCategories = () => {
  return useQuery('categories', getCategories)
};
