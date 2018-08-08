import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZvZKGqpFxkRDuvpwbLLdusGog1C1sPlreygiQxdJ&date=${date}`);
}