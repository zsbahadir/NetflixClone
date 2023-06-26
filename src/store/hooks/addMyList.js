import { useMutation } from 'react-query';
import api from "../api/api";


export const addMyList = async (listId) => {
    const response = await api.post( `/list/${listId}/add_item`, null, {
        headers: {
            'Content-Type' : 'application/json',
        },
    });
    return response.data;
    console.log(response.data)
};