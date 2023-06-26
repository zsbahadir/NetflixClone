import { useQuery } from "react-query";
import api from "../api/api";

export const getMovieDetail = async (id) => {
    try{
        const response = await api.get(`/movie/${id}`, {
            params: {language: 'en-US'},
        });
        return response.data;
    } catch (error) {
        throw new Error("Error fetching details")
    }
};

export const useMovieDetail = ( id ) =>{
    return useQuery(['movieDetail', id] ,() => getMovieDetail(id));
};