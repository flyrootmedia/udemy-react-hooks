import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import LoadingSpinner from './LoadingSpinner';
import useVideos from '../hooks/useVideos';

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('monkeys');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    if (!videos.length) {
        return (
            <div style={{height: '200px'}}>
                <LoadingSpinner />
            </div>
        );
    }

    return (
        <div className="ui container" style={{marginTop: '20px'}}>
            <SearchBar onSearchSubmit={search} />
            <div className="video-playlist-container ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    ) 
};

export default App;


// keeping my below iterations for notes

// const App = () => {
//     // React docs recommend breaking up state variables if you need to watch for individual
//     // state data changing in useEffect
//     //const [state, setState] = useState({videos: [], selectedVideo: null });
    
//     const [selectedVideo, setSelectedVideo] = useState(null);
//     const [videos, search] = useVideos('monkeys');

//     useEffect(() => {
//         setSelectedVideo(videos[0]);
//     }, [videos]);
    

//     // const onSearchSubmit = async (terms) => {
//     //     const response = await youtube.get('/search', {
//     //         params: {
//     //             part: youtubeParams.part,
//     //             maxResults: youtubeParams.maxResults,
//     //             type: youtubeParams.type,
//     //             key: youtubeParams.key,
//     //             q: terms
//     //         }
//     //     });

//     //     setVideos(response.data.items);
//     //     setSelectedVideo(response.data.items[0]);

//     //     // I tried to add the spread "...state" here, but for some reason that causes React to throw a warning that 
//     //     // the "useEffect" call above is missing onSearchSubmit as a dependancy. No clue. May be easier/cleaner to just 
//     //     // declare individual pieces of state on different lines, but just wanted to try this
//     //     // setState({ 
//     //     //     ...state,
//     //     //     videos: response.data.items,
//     //     //     selectedVideo: response.data.items[0] 
//     //     // });
//     // };

//     // since this is one line, refactored to call directly on VideoList
//     // const onVideoSelect = video => {
//     //     // unlike class "setState", if creating state as an object, need to spread "state" to manually merge it if not setting all
//     //     // properties at once. Otherwise you'll delete the other properties because you're resetting the whole object
//     //     setState({ ...state, selectedVideo: video });
//     // };

//     // this is a departure from the course..just felt like adding it
//     if (!videos.length) {
//         return (
//             <div style={{height: '200px'}}>
//                 <LoadingSpinner />
//             </div>
//         );
//     }

//     return (
//         <div className="ui container">
//             <SearchBar onSearchSubmit={search} />
//             <div className="video-playlist-container ui grid">
//                 <div className="ui row">
//                     <div className="eleven wide column">
//                         <VideoDetail video={selectedVideo} />
//                     </div>
//                     <div className="five wide column">
//                         <VideoList 
//                             videos={videos} 
//                             // onVideoSelect={(video) => setState({ ...state, selectedVideo: video })}
//                             // we can call this with no arrow function/arg because it's just a single var
//                             // being passed 
//                             onVideoSelect={setSelectedVideo}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ) 
// };

