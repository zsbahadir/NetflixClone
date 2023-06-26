import { useQuery } from 'react-query';
import api from '../api/api';

export const getMovieVideo = async (id) =>{
    try{
        const response = await api.get(`/movie/${id}/videos`,{
            params: {language: 'en-US'},
        });
        return response.data.results;
    } catch (error) {
        throw new Error ("Error fetching Movie Video")
    }

};

export const useMovieVideo = ( id ) => {
    return useQuery(['movieVideo', id], () => getMovieVideo(id) )
};