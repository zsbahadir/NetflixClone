import { useQuery } from 'react-query';
import api from '../api/api';

export const getTvDetail = async (id) => {
    try {
        const response = await api.get(`/tv/${id}`, {
            params: {language: 'en-US'},
        });
        return response.data;
    } catch(error) {
        throw new Error("Error fetching Tv Details")
    }
}


export const useGetTvDetail  = ( id ) =>{
  return useQuery(['tvDetail', id ], () => getTvDetail(id))
}