import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// testing the connection 
export const getData = async () => {
    try {
        const response = await api.get('/api/data'); // backed end endpoint
        return response.data;
    } catch (error) {
        console.error('Error at retrieving data:', error);
        return null;
    }
};

export default api;
