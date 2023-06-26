import { useQuery } from 'react-query';
import api from '../api/api';


export const getTopRatedTvSeries = async () =>{
    try{
        const response = await api.get('/tv/top_rated', {
            params: {language: 'en-US', page: '1'},

        });
        return response.data.results;
    } catch (error){
        throw new Error("Error fetching movie list")
        //console.error(error)
    };
};

export const useTopRatedTvSeries = () => {
        return useQuery('topTvList', getTopRatedTvSeries )
    };


