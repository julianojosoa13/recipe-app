import axios from "axios"
import {RAPID_API_KEY, RAPID_API_HOST} from '@env'

export const getRecipesList = async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: size || '20', tags },
        headers: {
            'X-RapidAPI-Key': RAPID_API_KEY,
            'X-RapidAPI-Host': RAPID_API_HOST
        }
    };
    return await axios.request(options)
}