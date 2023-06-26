import { useQuery } from "react-query";
import api from "../api/api";

export const getTvVideo = async (id) =>{
    try{
        const response = await api.get(`/tv/${id}/videos`, {
            params: {language: 'en-US'},
            api_key: '63fe66f8468645728bd5755597063580',
            append_to_response: 'videos'
        });
        return response.data.results;
    } catch (error) {
        throw new Error ("Error fetching Tv Video")
    }
};

export const useTvVideo = ( id ) => {
    return useQuery(['tvVideo', id], () => getTvVideo(id))
};



