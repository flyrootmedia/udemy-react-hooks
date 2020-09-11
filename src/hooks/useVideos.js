import { useState, useEffect } from 'react';

// probably could have harcoded the params since the config object isn't merging properly,
// but I wanted to test export/import of multiple consts
//import youtube from '../apis/youtube';
import {createRequest as youtube, params as youtubeParams} from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (terms) => {
        const response = await youtube.get('/search', {
            params: {
                part: youtubeParams.part,
                maxResults: youtubeParams.maxResults,
                type: youtubeParams.type,
                key: youtubeParams.key,
                q: terms
            }
        });

        setVideos(response.data.items);
    };

    // you can use the standard JS method of returning an object, but the React
    // convention for hooks is an array (below)
    // return {
    //     videos, 
    //     search
    // };

    return [videos, search];

};

export default useVideos;