import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID FHGVCCjKDBwT7ykR3KDA-CRC6uiHtazCp3gAjKkf4Go'
    }
})