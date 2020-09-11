import axios from 'axios';

// NOTE: this key will be publicly available. 
// This is restricted to localhost:3000 and my test vercel app
//const KEY = 'AIzaSyARylSBUAtisOJ63fWuR11n8Tc1XcPbQI4';

const createRequest = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'
});

// NOTE: the "type" param is to make sure you only get videos, not playlists, which might result in a 
// react warning about those lists not having keys
const params = {
    part: 'snippet',
    maxResults: 25,
    type: 'video',
    key: KEY
}

export {KEY, createRequest, params};

// the course notes that starting with Axios release v0.19.0 there is a bug that fails to merge the 
// parameters from the config instance with the query param passed in app.js. 
/*
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});
*/