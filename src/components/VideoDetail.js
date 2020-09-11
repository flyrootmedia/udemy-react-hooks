import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail">
            <div className="video-detail_player ui embed">
                <iframe 
                    src={videoSrc} 
                    title={video.snippet.description}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <div className="video-detail_title ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;