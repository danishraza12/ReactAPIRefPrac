import axios from 'axios';

//Add KEY here
const KEY = ;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            `Client-ID ${KEY}`
    }
})
