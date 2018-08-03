import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=vPrKNgQp68MMs4nFTovqF7kwNirjvMP8tvOfQWGV=${date}`);
}