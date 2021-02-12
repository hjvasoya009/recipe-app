import axios from 'axios'
import { APP_ID, API_KEY, BASE_URL } from '../config/api_config'

export const getRecipes = async (recipeName) => {
    const url = BASE_URL

    try {
        const response = await axios.get(url, {
            params: {
                q: recipeName,
                app_id: APP_ID,
                app_key: API_KEY
            }
        })

        const recipes = response.data.hits

        return recipes
    } catch (error) {
        throw error
    }
}