import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Funcție pentru a obține date de la backend
export const getData = async () => {
    try {
        const response = await api.get('/api/data'); // Endpoint-ul backend-ului
        return response.data;
    } catch (error) {
        console.error('Eroare la obținerea datelor:', error);
        return null;
    }
};

export default api;
